const express = require("express");
const authRouter = require("./routes/authRoutes");
const postRouter = require("./routes/postRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoryRouter);

module.exports = app;
