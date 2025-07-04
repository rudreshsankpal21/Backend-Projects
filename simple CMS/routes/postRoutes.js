const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
} = require("../controllers/postController");
const isAdmin = require("../middlewares/isAdmin");
const postRouter = express.Router();

// create post
postRouter.post("/create", authMiddleware, createPost);

// get all posts
postRouter.get("/", authMiddleware, getAllPosts);

// get post by id
postRouter.get("/:id", authMiddleware, getPostById);

// update post
postRouter.put("/:id", authMiddleware, isAdmin, updatePost);

// delete post
postRouter.delete("/:id", authMiddleware, isAdmin, deletePost);

module.exports = postRouter;
