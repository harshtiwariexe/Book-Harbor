const express = require("express");
const cors = require("cors");
const userModel = require("./Model/userModel");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.json("Testing");
});

app.post("/signup", (req, res) => {
  userModel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((e) => res.json(e));
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("success");
        } else {
          res.json("password is incorrect");
        }
      } else {
        res.json("User does not exist");
      }
    })
    .catch((e) => console.log(e));
});

module.exports = app;
