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
transactionRouter.post("/", createTransaction);

// get all transaction of a user
transactionRouter.get("/all", getAllTransactions);

// get a transaction by id
transactionRouter.get("/user/:id", getTransactionById);

// update a transaction
transactionRouter.put("/update/:id", updateTransaction);

// delete a transaction
transactionRouter.delete("/delete/:id", deleteTransaction);

module.exports = transactionRouter;
