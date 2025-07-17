const Password = require("../models/Password");

// get all passwords of user
const getAllPasswords = async (req, res) => {
  try {
    const passwords = await Password.find({ User: req.user._id });

    if (!passwords) {
      return res.status(404).json({ message: "No passwords found" });
    }

    res.status(200).json(passwords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPasswords,
};
