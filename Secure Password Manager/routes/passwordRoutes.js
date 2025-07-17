const express = require("express");
const passwordRouter = express.Router();

// get all passwords of user
passwordRouter.get("/", getAllPasswords);

// get one password by ID
passwordRouter.get("/:id", getPasswordById);

// Add a new Password
passwordRouter.post("/", addPassword);

// Update a Password
passwordRouter.put("/:id", updatePassword);

// Delete a Password
passwordRouter.delete("/:id", deletePassword);

module.exports = passwordRouter;
