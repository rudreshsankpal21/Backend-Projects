const cloudinary = require("../config/cloudinary");
const File = require("../models/File");
const path = require("path");
const uploadFile = async (req, res) => {
  try {
    // get the file via multer
    const result = await cloudinary.uploader.upload(req.file.path);

    const file = new File({
      name: req.file.originalname,
      url: result.secure_url,
      public_id: result.public_id,
      mimeType: req.file.mimetype,
      size: result.bytes,
      user: req.user._id,
    });
    await file.save();
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get all files
const getFiles = async (req, res) => {
  try {
    const files = await File.find({ user: req.user._id });
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete all files
const deleteFiles = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    await cloudinary.uploader.destroy(file.public_id);
    await file.deleteOne();
    res.json({ message: "File deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadFile, getFiles, deleteFiles };
