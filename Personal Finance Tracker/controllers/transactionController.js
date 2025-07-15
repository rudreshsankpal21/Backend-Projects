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

// get all transaction of a user
const getAllTransactions = async (req, res) => {
  try {
    const transaction = await Transaction.find({ user: req.user._id });
    if (!transaction) {
      res.status(400).json({
        message: "Failed to get Transaction",
      });
    }
    res.status(200).json({
      message: "Transaction fetched successfully",
      transaction,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

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
