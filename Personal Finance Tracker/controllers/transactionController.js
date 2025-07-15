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
    const { type } = req.query; // Get ?type= from query

    let query = { user: req.user._id };
    if (type) {
      query.type = type;
    }

    const transactions = await Transaction.find(query);

    if (transactions.length === 0) {
      res.status(400).json({
        message: "No transactions found for the specified filter",
      });
    }

    res.status(200).json({
      message: "Transaction fetched successfully",
      transactions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

// get a transaction by id
const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
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

// update a transaction
const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!transaction) {
      res.status(400).json({
        message: "Failed to update Transaction",
      });
    }
    res.status(200).json({
      message: "Transaction updated successfully",
      transaction,
    });

    // save the transaction
    await transaction.save();
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

// delete a transaction
const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) {
      res.status(400).json({
        message: "Failed to delete Transaction",
      });
    }
    res.status(200).json({
      message: "Transaction deleted successfully",
      transaction,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

module.exports = {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
};
