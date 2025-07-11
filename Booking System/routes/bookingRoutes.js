const express = require("express");
const isAdmin = require("../middlewares/isAdmin");
const { createBooking } = require("../controllers/bookingController");
const bookingRouter = express.Router();

// create a booking
bookingRouter.post("/", createBooking); // ✅

// get user's booking
bookingRouter.get("/my", getUserBookings);

// get all bookings
bookingRouter.get("/", isAdmin, getAllBookings);

// update status
bookingRouter.put("/:id/status", isAdmin, updateStatus);

// delete a booking
bookingRouter.delete("/:id", isAdmin, deleteBooking);

// cancel/delete booking
bookingRouter.delete("/:id/cancel", cancelBooking);

module.exports = bookingRouter;
