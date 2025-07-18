const Transaction = require("../models/Transaction");

// deposite balance
const deposite = async (req, res) => {
  const { amount } = req.body;
  try {
    //  add balance to the account
    const transaction = await Transaction.create({
      user: req.user._id,
      toUser: req.user._id,
      type: "deposit",
      amount,
    });

    if (!transaction) {
      res.status(400).json({
        message: "Failed depositing the amount",
      });
    }

    res.status(200).json({
      message: "successfully deposited the amount",
      transaction,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

// withdraw balance
const withdraw = async (req, res) => {
  try {
    // Track the balance
    const user = await User.findById(req.user._id).select("balance");

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // no withdrawal allowed if balance is 0
    if (user.balance === 0) {
      return res.status(400).json({
        message: "No withdrawal allowed as your balance is 0",
      });
    }

    // withdraw balance
    const transaction = await Transaction.create({
      user: req.user._id,
      toUser: req.user._id,
      type: "withdrawal",
      amount,
    });

    if (!transaction) {
      res.status(400).json({
        message: "Failed withdrawing the amount",
      });
    }

    res.status(200).json({
      message: "successfully withdrawed the amount",
      transaction,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

// transfer balance
const transfer = async (req, res) => {
  const { toUser, amount } = req.body;
  try {
    if (!toUser || !amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid transfer details" });
    }

    // Fetch sender
    const sender = await User.findById(req.user._id);
    if (!sender) {
      return res.status(404).json({ message: "Sender not found" });
    }

    // Check balance
    if (sender.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Fetch receiver
    const receiver = await User.findById(toUser);
    if (!receiver) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    // Update balances
    sender.balance -= amount;
    receiver.balance += amount;

    // Save updates
    await sender.save();
    await receiver.save();

    // Record transaction
    const transaction = await Transaction.create({
      user: sender._id,
      toUser,
      type: "transfer",
      amount,
    });

    res.status(200).json({
      message: "Amount transferred successfully",
      transaction,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// get transaction history
const transactionHistory = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id });
    if (!transactions) {
      return res.status(404).json({ message: "Transactions not found" });
    }
    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  deposite,
  withdraw,
  transfer,
  transactionHistory,
};
