const Booking = require("../models/Booking");

// create a booking
const createBooking = async (req, res) => {
  const { resourceId, date, slot } = req.body;

  try {
    // check if resource exists
    const resource = await Resource.findById(resourceId);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }

    // check if slot on that date is already booked
    const existingBooking = await Booking.findOne({
      resource: resourceId,
      date,
      slot,
    });
    if (existingBooking) {
      return res.status(400).json({ message: "Slot is already booked" });
    }

    // save the booking
    const booking = await Booking.create({
      user: req.user._id,
      resource,
      date,
      slot,
      status: "pending",
    });
    if (!booking) {
      return res.status(400).json({ message: "Booking not created" });
    }

    booking.owner = req.user._id;
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {}
};

module.exports = {
  createBooking,
};
