const express = require("express");
const authRouter = require("./routes/authRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const transactionRouter = require("./routes/transactionRoutes");
const adminRouter = require("./routes/adminRoutes");
const isAdmin = require("./middlewares/isAdmin");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/auth", authMiddleware, authRouter);
app.use("/api/account", authMiddleware, transactionRouter);
app.use("/api/admin", authMiddleware, isAdmin, adminRouter);

module.exports = app;
