const express = require("express");
const {
  getAllUsers,
  getAllTransactions,
  getUserById,
  deleteUser,
} = require("../controllers/adminController");
const adminRouter = express.Router();

// list all users
adminRouter.get("/users", getAllUsers); // ✅

// list all transactions
adminRouter.get("/transactions", getAllTransactions); // ✅

// get user by id
adminRouter.get("/users/:id", getUserById); // ✅

// delete user
adminRouter.delete("/users/:id", deleteUser); // ✅

module.exports = adminRouter;
