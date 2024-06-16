const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Question = require("./Models/question.js");
const cors = require("cors");
const app = express();
const port = 4000;

const ATLAS_URL = process.env.ATLAS_URL;

// Connect to database
async function main() {
  await mongoose.connect(ATLAS_URL);
}

main()
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

// Middlewares
app.use(express.urlencoded({ extended: true })); // To parse incoming request data
app.use(methodOverride("_method"));

// Routes
app.post("/api/studentdata", async (req, res) => {
  try {
    const { level, class: className } = req.body;

    // Redirect to the route with the specified level and class
    res.redirect(`/api/${level}/${className}`);
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/:level/:class", async (req, res) => {
  try {
    const { level, class: className } = req.params;

    // Query the database for questions matching the given level and class
    const questions = await Question.find({ level, class: className });
    console.log(questions);

    // Respond with the retrieved questions
    res.status(200).json(questions);
  } catch (error) {
    // Handle any errors that occur during the query
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

