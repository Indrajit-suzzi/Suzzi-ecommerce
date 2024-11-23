const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home.ejs");
});

router.get("/home", (req, res) => {
  res.render("home.ejs");
});

router.get("/termsandconditions", (req, res) => {
  res.render("termsAndConditions.ejs");
});

router.get("/account/login", (req, res) => {
  res.render("loginPage.ejs");
});

router.get("/account/signup", (req, res) => {
  res.render("signUp.ejs");
});

router.use((req, res, next) => {
  res.status(404).render("errorPage.ejs");
});

module.exports = router;
