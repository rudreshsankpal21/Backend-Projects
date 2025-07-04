const CategoryModel = require("../models/Category");

const createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    //   auto generate slug from name
    const slug = name.toLowerCase().replace(/ /g, "-");

    // check if category exists
    const exists = await CategoryModel.findOne({ slug });
    if (exists) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const category = await CategoryModel.create({ name, description, slug });
    if (!category) {
      return res.status(400).json({ message: "Category not created" });
    }
    res
      .status(201)
      .json({ message: "Category Successfully created", category });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCategory };
