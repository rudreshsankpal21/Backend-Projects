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

    // count how many votes each option has
    const votes = poll.votes.reduce((acc, vote) => {
      acc[vote.option] = (acc[vote.option] || 0) + 1;
      return acc;
    }, {});

    res.status(200).json({ poll, votes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// vote on poll
const voteOnPoll = async (req, res) => {
  // chech if poll is open
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) {
      res.status(404).json({ message: "Poll not found" });
    }
    if (poll.isClosed) {
      return res.status(400).json({ message: "Poll is closed" });
    }

    // check is user already voted
    if (poll.votes.some((vote) => vote.user.toString() === req.user._id)) {
      return res.status(400).json({ message: "You have already voted" });
    }

    // update poll
    const updatedPoll = await Poll.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { votes: { user: req.user._id } } },
      { new: true }
    );
    res.status(200).json(updatedPoll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// close poll
const closePoll = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) {
      res.status(404).json({ message: "Poll not found" });
    }
    if (poll.createdBy.toString() !== req.user._id) {
      return res
        .status(403)
        .json({ message: "You are not authorized to close the poll" });
    }
    const updatedPoll = await Poll.findByIdAndUpdate(
      req.params.id,
      { isClosed: true },
      { new: true }
    );
    res.status(200).json(updatedPoll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete poll
const deletePoll = async (req, res) => {
  try {
    const poll = await Poll.findByIdAndDelete(req.params.id);
    if (!poll) {
      res.status(404).json({ message: "Poll not found" });
    }
    res.status(200).json({ message: "Poll deleted successfully", poll });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPoll,
  getAllPolls,
  getPollById,
  voteOnPoll,
  closePoll,
  deletePoll,
};
