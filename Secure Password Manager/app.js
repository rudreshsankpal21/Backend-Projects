const express = require("express");
const authRouter = require("./routes/authRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const passwordRouter = require("./routes/passwordRoutes");
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/auth", authRouter);
app.use("api/passwords", authMiddleware, passwordRouter);

module.exports = app;
