const express = require("express");
const isAdmin = require("../middlewares/isAdmin");
const {
  createBooking,
  getUserBookings,
} = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");
const bookingRouter = express.Router();

// create a booking
bookingRouter.post("/", authMiddleware, createBooking); // ✅

// get user's booking
bookingRouter.get("/my", authMiddleware, getUserBookings); // ✅

// get all bookings
bookingRouter.get("/", isAdmin, getAllBookings);

// update status
bookingRouter.put("/:id/status", isAdmin, updateStatus);

// delete a booking
bookingRouter.delete("/:id", isAdmin, deleteBooking);

// cancel/delete booking
bookingRouter.delete("/:id/cancel", authMiddleware, cancelBooking);

module.exports = bookingRouter;
