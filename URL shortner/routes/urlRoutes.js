const express = require("express");
const urlRouter = express.Router();

const {
  createShortUrl,
  getShortUrl,
  deleteShortUrl,
} = require("../controllers/urlController");

urlRouter.post("/api/shorten", createShortUrl);

module.exports = urlRouter;
