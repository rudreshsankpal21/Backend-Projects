const express = require("express");
const isAdmin = require("../middlewares/isAdmin");
const { get } = require("mongoose");
const resourceRouter = express.Router();

// Create a resource
resourceRouter.post("/", isAdmin, createResource);

// get all resources
resourceRouter.get("/", getAllResources);

// get a single resource
resourceRouter.get("/:id", getResourceById);

// update a resource
resourceRouter.put("/:id", isAdmin, updateResource);

// delete a resource
resourceRouter.delete("/:id", isAdmin, deleteResource);

module.exports = resourceRouter;
