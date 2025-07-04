const PostModel = require("../models/Post");

// create post
const createPost = async (req, res) => {
  const { title, content, category } = req.body;
  try {
    const author = req.user._id;

    // generate slug from title
    const slug = title.toLowerCase().replace(/ /g, "-");
    post.slug = slug;

    const post = await PostModel.create({ title, content, category, author });
    if (!post) {
      res.status(400).json({ message: "Post not created" });
    }
    await post.save();
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const { search } = req.query;

    // Build dynamic query
    let queryObj = {};

    if (search) {
      queryObj = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { content: { $regex: search, $options: "i" } },
        ],
      };
    }

    const posts = await PostModel.find(queryObj)
      .populate("category")
      .populate("author", "name email");

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get single post by id
const getPostById = async (req, res) => {
  try {
    // return one post by id
    const post = await PostModel.findById(req.params.id)
      .populate("category")
      .populate("author", "name email");
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update Post
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category } = req.body;

    // update post
    const post = await PostModel.findByIdAndUpdate(
      id,
      { title, content, category },
      { new: true }
    );
    if (!post) {
      res.status(404).json({ message: "Post not found" });
    }

    // check if the post belongs to the user
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "You are not authorized" });
    }
    await post.save();
    res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete post
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostModel.findByIdAndDelete(id);
    if (!post) {
      res.status(404).json({ message: "Post not found" });
    }

    // check if the post belongs to the user
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "You are not authorized" });
    }

    // check if the user is admin
    if (post.role !== "admin") {
      return res.status(403).json({ message: "You are not authorized" });
    }

    res.status(200).json({ message: "Post deleted successfully", post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
