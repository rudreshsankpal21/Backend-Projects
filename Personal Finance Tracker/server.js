const app = require("./app");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// connect DB
connectDB().then(() => {
  // start the server
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
  );
});
