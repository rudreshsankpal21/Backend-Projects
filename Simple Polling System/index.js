require("dotenv").config();
const express = require("express");
const authRouter = require("./routes/authRoutes");
const pollRouter = require("./routes/pollRoutes");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/auth", authRouter);
app.use("/api/polls", pollRouter);

// connect DB
connectDB().then(() => {
  // Start the server
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
  );
});
