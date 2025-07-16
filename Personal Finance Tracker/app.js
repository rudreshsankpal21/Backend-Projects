const express = require("express");
const authRouter = require("./routes/authRoutes");
const transactionRouter = require("./routes/transactionRoutes");
const insightRouter = require("./routes/insightRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/auth", authRouter);
app.use("/api/transactions", authMiddleware, transactionRouter);
app.use("/api/insights", authMiddleware, insightRouter);

module.exports = app;
