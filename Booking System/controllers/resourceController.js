const Resource = require("../models/Resource");

// Create a resource
const createResource = async (req, res) => {
  const { name, description, availability } = req.body;

  try {
    // check if name already exists
    const name = await Resource.findOne({ name });
    if (name) {
      return res.status(400).json({ message: "Resource already exists" });
    }

    // save new resource
    const resource = await Resource.create({ name, description, availability });
    if (!resource) {
      return res.status(400).json({ message: "Resource not created" });
    }
    res
      .status(201)
      .json({ message: "Resource created successfully", resource });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createResource };
