const mongoose = require("mongoose");

// import author model
const Author = mongoose.model("Author");

// handle request to get all authors
const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    return res.send(authors);
  } catch (err) {
    res.status(400);
    return res.send("Database query failed");
  }
};

// function to handle a request to a particular author
const getAuthorByID = async (req, res) => {
  try {
    console.log("id: " + req.params.authorID);
    const oneAuthor = await Author.findOne({ authorID: req.params.authorID });
    if (oneAuthor === null) {
      res.status(400);
      return res.send("Author not found");
    }
    return res.send(oneAuthor);
  } catch (err) {
    res.status(400);
    return res.send("Database query failed");
  }
};

module.exports = {
  getAllAuthors,
  getAuthorByID,
};
