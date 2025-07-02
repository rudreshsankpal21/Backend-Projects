const mongoose = require("mongoose");

const clickSchema = new mongoose.Schema(
  {
    shortUrl: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShortUrl",
    },
    ipAddress: {
      type: String,
    },
    userAgent: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Click = mongoose.model("Click", clickSchema);
module.exports = Click;
