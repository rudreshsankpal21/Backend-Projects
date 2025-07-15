const express = require("express");
const {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");
const transactionRouter = express.Router();

// create a new transaction
transactionRouter.post("/create", createTransaction);

// get all transactions
transactionRouter.get("/all", getAllTransactions);

// get all transactions of a user
transactionRouter.get("/user/:id", getTransactionById);

// update a transaction
transactionRouter.put("/update/:id", updateTransaction);

// delete a transaction
transactionRouter.delete("/delete/:id", deleteTransaction);

module.exports = transactionRouter;
