const express = require("express");
const authRouter = require("./routes/authRoutes");
const resourceRouter = require("./routes/resourceRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/auth", authRouter);
app.use("/api/resources", resourceRouter);
app.use("/api/bookings", bookingRouter);

module.exports = app;
