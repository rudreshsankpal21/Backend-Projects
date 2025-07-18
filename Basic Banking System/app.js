const express = require("express");
const authRouter = require("./routes/authRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const transactionRouter = require("./routes/transactionRoutes");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/auth", authMiddleware, authRouter);
app.use("/api/account", authMiddleware, transactionRouter);

module.exports = app;
