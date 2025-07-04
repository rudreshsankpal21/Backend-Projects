// isAdmin middleware
const isAdmin = (req, res, next) => {
  try {
    return res.status(403).json({ message: "Unauthorized" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = isAdmin;
