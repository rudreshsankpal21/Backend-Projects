const express = require("express");
const urlRouter = express.Router();

const {
  createShortUrl,
  getShortUrl,
  deleteShortUrl,
} = require("../controllers/urlController");

urlRouter.post("/shorten", createShortUrl);
urlRouter.post("/s/:shortId", getShortUrl);
urlRouter.delete("/s/:shortId", deleteShortUrl);

module.exports = urlRouter;
