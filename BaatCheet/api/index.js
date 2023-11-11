const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//authication middelware for nodejs. It provides a simple and flexible way to authenticate requests made to a web application.
const passport = require("passport");
//handle local username and password in app
const localStrategy = require("passport-local").Strategy;

const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

const jwt = require("jsonwebtoken");

mongoose
  .connect("mongodb+srv://ankushkumar:ankush@cluster0.tkkky4e.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port 8000`);
});
