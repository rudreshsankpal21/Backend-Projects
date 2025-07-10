// isAdmin middleware
const isAdmin = (req, res, next) => {
  try {
    if (req.user && req.user.role === "admin") {
      return next();
    }
    return res.status(403).json({ message: "Unauthorized : Admin only" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = isAdmin;
