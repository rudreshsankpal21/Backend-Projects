const express = require("express");
const authRouter = require("./routes/authRoutes");
const transactionRouter = require("./routes/transactionRoutes");
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/auth", authRouter);
app.use("/api/transactions", transactionRouter);

module.exports = app;
