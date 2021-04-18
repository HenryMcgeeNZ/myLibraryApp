const express = require("express");

// add our router
const authorRouter = express.Router();

// require the author controller
const authorController = require("../controllers/authorController.js");

// handle the GET request to get all authors
authorRouter.get("/", (req, res) => authorController.getAllAuthors(req, res));

// handle GET request for specific author ID
authorRouter.get("/:authorID", (req, res) =>
  authorController.getAuthorByID(req, res)
);

// handle POST request to add one author
authorRouter.post("/", (req, res) => authorController.addAuthor(req, res));

// handle POST request to update one author
authorRouter.post("/update", (req, res) =>
  authorController.updateAuthor(req, res)
);

// export the router
module.exports = authorRouter;
