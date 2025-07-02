require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const urlRouter = require("./routes/urlRoutes");
const PORT = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api", urlRouter);

// Connect DB
connectDB().then(() => {
  // Start the server
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
  );
});
