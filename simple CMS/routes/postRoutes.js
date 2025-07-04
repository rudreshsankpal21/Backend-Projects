const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createPost, getAllPosts } = require("../controllers/postController");
const postRouter = express.Router();

// create post
postRouter.post("/create", authMiddleware, createPost);

// get all posts
postRouter.get("/", authMiddleware, getAllPosts);

// get post by id
postRouter.get("/:id", authMiddleware, getPostById);

// update post
postRouter.put("/:id", authMiddleware, updatePost);

// delete post
postRouter.delete("/:id", authMiddleware, deletePost);

module.exports = postRouter;
