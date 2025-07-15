const Transaction = require("../models/Transaction");

// Create a new transaction
const createTransaction = async (req, res) => {
  const { title, amount, type } = req.body;
  try {
    const transaction = await Transaction.create({
      title,
      amount,
      type,
      user: req.user._id,
    });
    if (!transaction) {
      res.status(400).json({
        message: "Failed to create Transaction",
      });
    }

    res.status(201).json({
      message: "Transaction created successfully",
      transaction,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

// Get all transactions
const getAllTransactions = async (req, res) => {};

// get all transaction of a user
const getTransactionById = async (req, res) => {};

// update a transaction
const updateTransaction = async (req, res) => {};

// delete a transaction
const deleteTransaction = async (req, res) => {};

module.exports = {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
};
