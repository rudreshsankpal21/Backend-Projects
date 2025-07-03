const mongoose = require("mongoose");

// category model

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const CategoryModel = mongoose.model("Category", categorySchema);
module.exports = CategoryModel;
