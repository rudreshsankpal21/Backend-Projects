const express = require("express");
const {
  getTransactionSummary,
  getExpensesByCategory,
  getMonthlySummary,
  getRecentTransactions,
} = require("../controllers/insightController");

const insightRouter = express.Router();

// get summary
insightRouter.get("/summary", getTransactionSummary); //✅

// get expenses by category
insightRouter.get("/expenses-by-category", getExpensesByCategory);

// get monthly expenses
insightRouter.get("/monthly-summary", getMonthlySummary);

// get recent transactions
insightRouter.get("/recent", getRecentTransactions);

module.exports = insightRouter;
