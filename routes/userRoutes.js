// userRoutes.js
import express from "express";
import {
  signup,
  login,
  logout,
  profile,
  forgotPassword,
} from "../controllers/authController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.use(isAuthenticated);

router.get("/signup", (req, res) => {
  res.render("signup");
});
router.post("/signup", signup);

router.get("/login", (req, res) => {
  res.render("login", { redirect: req.query.redirect || "" });
});
router.post("/login", login);

router.get("/logout", logout);
router.get("/profile", profile);
router.get("/status", (req, res) => {
  res.json({ isAuthenticated: !!req.user });
});

router.get("/forgot-password", forgotPassword);

export default router;
