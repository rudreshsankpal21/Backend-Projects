const express = require("express");
const {
  uploadFile,
  getFiles,
  deleteFiles,
} = require("../controllers/fileController");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multerMiddleware");
const fileRoutes = express.Router();

// Upload file
fileRoutes.post("/upload", authMiddleware, upload.single("file"), uploadFile);

// Get all files
fileRoutes.get("/", authMiddleware, getFiles);

// Delete file
fileRoutes.delete("/:id", authMiddleware, deleteFiles);

module.exports = fileRoutes;
