require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const PORT = process.env.PORT || 5000;

const app = express();

// middlewares
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Connect DB
connectDB().then(() => {
  // Start the server
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
  );
});
