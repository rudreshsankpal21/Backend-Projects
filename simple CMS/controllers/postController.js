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

module.exports = { createPost, getAllPosts };
