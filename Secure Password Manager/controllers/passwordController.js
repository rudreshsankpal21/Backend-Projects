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

// get one password by ID
const getPasswordById = async (req, res) => {
  try {
    const password = await Password.findById(req.params.id);
    if (!password) {
      return res.status(404).json({ message: "Password not found" });
    }
    res.status(200).json(password);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPasswords,
  getPasswordById,
};
