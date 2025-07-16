const express = require("express");
const authRouter = express.Router();
const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/authController");
authRouter.post("/register", registerUser);

authRouter.post("/login", loginUser);

authRouter.get("/users", getUsers);

module.exports = authRouter;
