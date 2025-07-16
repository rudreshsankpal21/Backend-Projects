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
const getMonthlySummary = async (req, res) => {
  try {
    const expensesByMonth = await Transaction.aggregate([
      {
        $match: {
          user: req.user._id,
          type: "expense",
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$date" },
            month: { $month: "$date" },
          },
          totalAmount: { $sum: "$amount" },
        },
      },
      {
        $sort: {
          "_id.month": 1,
        },
      },
    ]);

    res.status(200).json({
      message: "Monthly expenses fetched successfully",
      expensesByMonth,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

// get recent transactions
const getRecentTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(15);
    res.status(200).json({
      message: "Recent transactions fetched successfully",
      transactions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

module.exports = {
  getTransactionSummary,
  getExpensesByCategory,
  getMonthlySummary,
  getRecentTransactions,
};
