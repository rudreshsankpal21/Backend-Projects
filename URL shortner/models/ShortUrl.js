const mongoose = require("mongoose");

const shortUrlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    clicks: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);
module.exports = ShortUrl;
