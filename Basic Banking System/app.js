const express = require("express");
const authRouter = require("./routes/authRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/auth", authMiddleware, authRouter);

module.exports = app;
