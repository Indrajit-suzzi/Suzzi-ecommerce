const express = require("express");
const app = express();
const path = require("path");
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/termsandconditions", (req, res) => {
  res.render("termsAndConditions.ejs");
});

app.get("/account/login", (req, res) => {
  res.render("loginPage.ejs");
});

app.get("/account/signup", (req, res) => {
  res.render("signUp.ejs");
});

app.use((req, res, next) => {
  res.status(404).render("errorPage.ejs");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
