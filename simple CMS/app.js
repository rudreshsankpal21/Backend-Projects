const express = require("express");
const authRouter = require("./routes/authRoutes");
const postRouter = require("./routes/postRoutes");
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

module.exports = app;
