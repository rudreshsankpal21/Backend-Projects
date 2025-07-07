const Poll = require("../models/Poll");

// Create a poll
const createPoll = async (req, res) => {
  const { question, options } = req.body;
  try {
    // Check if poll already exists
    const exists = await Poll.findOne({ question });
    if (exists) {
      return res.status(400).json({ message: "Poll already exists" });
    }

    // create poll
    const poll = await Poll.create({
      question,
      options,
    });
    if (!poll) {
      res.status(400).json({ message: "Poll not created" });
    }
    res.status(201).json({ message: "Poll created successfully", poll });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all polls
const getAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find();
    if (!polls) {
      res.status(404).json({ message: "Polls not found" });
    }
    res.status(200).json(polls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get a single poll by id
const getPollById = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) {
      res.status(404).json({ message: "Poll not found" });
    }
    res.status(200).json(poll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { createPoll, getAllPolls, getPollById };
