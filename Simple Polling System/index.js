const express = require("express");
const authRouter = require("./routes/authRoutes");
const pollRouter = require("./routes/pollRoutes");
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/auth", authRouter);
app.use("/api/polls", pollRouter);

module.exports = app;
