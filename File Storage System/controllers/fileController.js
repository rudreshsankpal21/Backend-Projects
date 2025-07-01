const cloudinary = require("../config/cloudinary");
const File = require("../models/File");
const uploadFile = async (req, res) => {
  try {
    // get the file via multer
    const result = await cloudinary.uploader.upload(req.file.path);

    const file = new File({
      name: req.file.originalname,
      url: result.secure_url,
      public_id: result.public_id,
      mimeType: result.mimetype,
      size: result.bytes,
      user: req.user._id,
    });
    await file.save();
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadFile };
