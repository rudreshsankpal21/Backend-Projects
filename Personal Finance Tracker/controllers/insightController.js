const Transaction = require("../models/Transaction");

// get Transaction summary
const getTransactionSummary = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id });
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "income") {
        totalIncome += transaction.amount;
      } else if (transaction.type === "expense") {
        totalExpense += transaction.amount;
      }
    });

    res.status(200).json({
      message: "Transaction fetched successfully",
      totalIncome,
      totalExpense,
      totalBalance: totalIncome - totalExpense,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

// get expenses by category
const getExpensesByCategory = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id });

    // fetch expenses by category
    const expensesByCategory = transactions.reduce((acc, transaction) => {
      const { category, amount } = transaction;
      if (transaction.type === "expense") {
        acc[category] = (acc[category] || 0) + amount;
      }
      return acc;
    }, {});

    const aggregatedExpenses = await Transaction.aggregate([
      {
        $match: {
          user: req.user._id,
          type: "expense",
        },
      },
      {
        $group: {
          _id: "$category",
          totalAmount: { $sum: "$amount" },
        },
      },
    ]);

    res.status(200).json({
      expensesByCategory,
      aggregatedExpenses,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

// get monthly expenses
const getMonthlySummary = async (req, res) => {};

// get recent transactions
const getRecentTransactions = async (req, res) => {};

module.exports = {
  getTransactionSummary,
  getExpensesByCategory,
  getMonthlySummary,
  getRecentTransactions,
};
