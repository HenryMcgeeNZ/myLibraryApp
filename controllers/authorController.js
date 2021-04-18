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

// add an author (POST)
const addAuthor = async (req, res) => {
  // construct a new Author objet from body of POST
  const author = new Author(req.body);

  try {
    let result = await author.save(); // save new author object to db
    return res.send(result); // return saved object to sender
  } catch (err) {
    // error detected
    res.status(400);
    return res.send("Database insertion failed");
  }
};

// update an author
const updateAuthor = async (req, res) => {
  // construct changed Author object from body of POST
  const new_author = req.body;

  try {
    // check author with provided id already exists
    const author = await Author.findOne({ authorID: req.body.authorID });
    if (!author) {
      res.status(400);
      return res.send("Author not found in database");
    }

    // replace author properties with those listed in POST body
    Object.assign(author, new_author);
    let result = await author.save(); // save updated author to db
    return res.send(result); // return saved author to sender
  } catch (err) {
    res.status(400);
    return res.send("Database update failed");
  }
};

module.exports = {
  getAllAuthors,
  getAuthorByID,
  addAuthor,
  updateAuthor,
};
