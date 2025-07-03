require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");
const PORT = 5000 || process.env.PORT;

// connect DB
connectDB().then(() => {
  // Start the server
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
  );
});
