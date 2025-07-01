const express = require("express");
const {
  uploadFile,
  getFiles,
  deleteFiles,
} = require("../controllers/fileController");
const authMiddleware = require("../middlewares/authMiddleware");
const fileRoutes = express.Router();

// Upload file
fileRoutes.post("/upload", authMiddleware, uploadFile);

// Get all files
fileRoutes.get("/files", authMiddleware, getFiles);

// Delete file
fileRoutes.delete("/files/:id", authMiddleware, deleteFiles);

module.exports = fileRoutes;
