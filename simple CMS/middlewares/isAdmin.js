// isAdmin middleware
const isAdmin = (req, res, next) => {
  try {
    if (req.user && req.user.role === "admin") {
      next();
    }
    res.status(403).json({ message: "Unauthorized" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = isAdmin;
