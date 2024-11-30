import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/terms", (req, res) => {
  res.render("terms");
});

export default router;
