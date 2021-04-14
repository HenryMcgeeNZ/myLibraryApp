const authors = require("../models/author");

// handle request to get all authors
const getAllAuthors = (req, res) => {
  res.send(authors);
};

// function to handle a request to a particular author
const getAuthorByID = (req, res) => {
  // search for author in the database via ID
  const author = authors.find((author) => author.id === req.params.id);

  if (author) {
    res.send(author); // send back author details
  } else {
    res.send([]);
  }
};

module.exports = {
  getAllAuthors,
  getAuthorByID,
};
