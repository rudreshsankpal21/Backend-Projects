const express = require("express");
const authRouter = express.Router();
const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/authController");
const isAdmin = require("../middlewares/isAdmin");
authRouter.post("/register", registerUser);

authRouter.post("/login", loginUser);

authRouter.get("/users", isAdmin, getUsers);

module.exports = authRouter;
