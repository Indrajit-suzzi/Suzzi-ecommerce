const express = require("express");
const app = express();
const path = require("path");
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/home", (req, res) => {
    res.render("home.ejs");
})

app.use((req, res, next) => {
    res.status(404).render('404.ejs');
  });

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})