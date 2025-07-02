require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

// middlewares
app.use(express.json());

// routes

// Connect DB
connectDB().then(() => {
  // Start the server
  app.listen(process.env.PORT, () =>
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
  );
});
