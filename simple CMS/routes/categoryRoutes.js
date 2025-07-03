const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/isAdmin");
const categoryRouter = express.Router();

// create new category
categoryRouter.post("/create", authMiddleware, isAdmin, createCategory);

// get all categories
categoryRouter.get("/", getAllCategories);

// get posts by category slug
categoryRouter.get("/:slug", authMiddleware, getPostsByCategorySlug);

module.exports = categoryRouter;
