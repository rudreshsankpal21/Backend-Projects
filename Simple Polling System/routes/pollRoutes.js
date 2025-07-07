const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createPoll, getAllPolls } = require("../controllers/pollController");
const pollRouter = express.Router();

// create poll
pollRouter.post("/", authMiddleware, createPoll);

// get all polls
pollRouter.get("/", getAllPolls);

// get a single poll by id
pollRouter.get("/:id", authMiddleware, getPollById);

// vote on a poll
pollRouter.put("/:id/vote", authMiddleware, voteOnPoll);

// close a poll
pollRouter.put("/:id/close", authMiddleware, closePoll);

// delete a poll
pollRouter.delete("/:id", authMiddleware, deletePoll);

module.exports = pollRouter;
