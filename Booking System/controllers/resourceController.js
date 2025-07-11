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

// get all resources
const getAllResources = async (req, res) => {
  try {
    const { search } = req.query;
    let resources;

    if (search) {
      const regex = new RegExp(search, "i");
      resources = await Resource.find({
        $or: [{ name: regex }, { description: regex }],
      });
    } else {
      resources = await Resource.find();
    }

    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get resource by id
const getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createResource, getAllResources, getResourceById };
