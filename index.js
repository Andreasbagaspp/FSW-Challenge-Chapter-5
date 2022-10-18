const express = require("express");
const app = express();
const port = 3000;

let users = require("./users.json");

app.set("view engine", "ejs");

const main = require("./controller/main");
const games = require("./controller/games");

//middleware
app.use(express.static("public"));
app.use(express.json()); //ini adalah config untuk menerima request json dari client
app.use(express.urlencoded({ extended: false })); // ini adalah config untuk menerima request selain json

// Route
app.get("/", (req, res) => {
  res.render("main.ejs");
});

app.get("/main", (req, res) => {
  res.render("main.ejs");
});

app.get("/games", (req, res) => {
  res.render("games.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.listen(port, () => {
  console.log(`Listening server at http://localhost:${port}`);
});
