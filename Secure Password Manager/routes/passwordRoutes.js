const express = require("express");
const {
  getAllPasswords,
  getPasswordById,
  addPassword,
} = require("../controllers/passwordController");
const passwordRouter = express.Router();

// Add a new Password
passwordRouter.post("/", addPassword);

// get all passwords of user
passwordRouter.get("/", getAllPasswords);

// get one password by ID
passwordRouter.get("/:id", getPasswordById);

// Update a Password
passwordRouter.put("/:id", updatePassword);

// Delete a Password
passwordRouter.delete("/:id", deletePassword);

module.exports = passwordRouter;
