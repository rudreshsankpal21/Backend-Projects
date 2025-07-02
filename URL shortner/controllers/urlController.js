const ShortUrl = require("../models/ShortUrl");

// create short url
const createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;
  try {
    //   validates the format
    const urlRegex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    if (!urlRegex.test(originalUrl)) {
      return res.status(400).json({ message: "Invalid URL format" });
    }

    //Checks if it already exists
    const exists = await ShortUrl.findOne({ originalUrl });
    if (exists) {
      return res.status(400).json({ message: "URL already exists" });
    }

    // generate a unique short id
    const shortId =
      Date.now().toString(36) + Math.random().toString(36).slice(2);

    //   create short url
    const shortUrl = await ShortUrl.create({ originalUrl, shortId });
    res.status(201).json({ shortUrl });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createShortUrl, getShortUrl };
