require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// connect db
connectDB().then(() =>
  // start server
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
);
