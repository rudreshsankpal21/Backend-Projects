const express = require("express");
const transactionRouter = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const {
  deposite,
  withdraw,
  transfer,
} = require("../controllers/transactionController");

//  deposite Balance
transactionRouter.post("/deposite", authMiddleware, deposite); // ✅

// withdraw Balance
transactionRouter.post("/withdraw", authMiddleware, withdraw); // ✅

// transfer Balance
transactionRouter.post("/transfer", authMiddleware, transfer);

module.exports = transactionRouter;
