const express = require("express");
const {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");
const authMiddleware = require("../middlewares/authMiddleware");
const transactionRouter = express.Router();

// create a new transaction
transactionRouter.post("/create", authMiddleware, createTransaction);

// get all transaction of a user
transactionRouter.get("/all", authMiddleware, getAllTransactions);

// get a transactions of a user
transactionRouter.get("/user/:id", authMiddleware, getTransactionById);

// update a transaction
transactionRouter.put("/update/:id", authMiddleware, updateTransaction);

// delete a transaction
transactionRouter.delete("/delete/:id", authMiddleware, deleteTransaction);

module.exports = transactionRouter;
