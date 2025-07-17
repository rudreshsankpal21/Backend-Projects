const Password = require("../models/Password");
const bcrypt = require("bcryptjs");
// create a password
const addPassword = async (req, res) => {
  const { serviceName, emailOrUsername, password } = req.body;
  try {
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!serviceName || !emailOrUsername || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPassword = await Password.create({
      User: req.user._id,
      serviceName,
      emailOrUsername,
      password: hashedPassword,
    });

    if (!newPassword) {
      return res.status(404).json({ message: "Password not found" });
    }

    res
      .status(201)
      .json({ message: "Password created successfully", newPassword });
  } catch (error) {}
};

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

// update a password
const updatePassword = async (req, res) => {
  try {
    const password = await Password.findById(req.params.id);
    if (!password) {
      return res.status(404).json({ message: "Password not found" });
    }

    const updatedPassword = await Password.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedPassword) {
      return res.status(404).json({ message: "Password not found" });
    }

    res.status(200).json({
      message: "Password updated successfully",
      updatedPassword,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPasswords,
  getPasswordById,
  addPassword,
  updatePassword,
};
