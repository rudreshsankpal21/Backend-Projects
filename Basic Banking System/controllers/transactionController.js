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
const transfer = async (req, res) => {};

module.exports = {
  deposite,
  withdraw,
  transfer,
};
