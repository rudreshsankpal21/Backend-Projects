const mongoose = require("mongoose");

// connect db
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting DB", error);
  }
};

module.exports = connectDB;
