const Transaction = require("../models/Transaction");
const User = require("../models/User");

// get all Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    if (!transactions) {
      return res.status(404).json({ message: "Transactions not found" });
    }
    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getAllTransactions,
};
