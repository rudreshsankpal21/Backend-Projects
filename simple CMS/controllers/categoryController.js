const CategoryModel = require("../models/Category");

// create new category
const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
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

// get all categories
const getAllCategories = async (req, res) => {
  try {
    const category = await CategoryModel.find();
    if (!category) {
      res.status(404).json({ message: "Categories not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// getCategoryBySlug
const getPostsByCategorySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    // Populate all posts under that category
    const category = await CategoryModel.findOne({ slug }).populate("posts");
    if (!category) {
      res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCategory, getAllCategories, getPostsByCategorySlug };
