const express = require("express");

// add our router
const authorRouter = express.Router();

// require the author controller
const authorController = require("../controllers/authorController.js");

// handle the GET request to get all authors
authorRouter.get("/", authorController.getAllAuthors);

// handle GET request for specific author ID
authorRouter.get("/:authorID", authorController.getAuthorByID);

// handle POST request to add one author
authorRouter.post("/", authorController.addAuthor(req, res));

// handle POST request to update one author
authorRouter.post("/update", authorController.updateAuthor(req, res));

// export the router
module.exports = authorRouter;
