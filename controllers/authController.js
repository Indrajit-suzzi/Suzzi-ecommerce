import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Signup
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if(!name || !email || !password){
      return res.render("signup", { error: "Something is missing" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render("signup", { error: "Email already exists!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.redirect("/user/login");
  } catch (error) {
    res.render("error", { message: error.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password, redirect } = req.body;
    if(!email || !password){
      return res.render("signup", { error: "Something is missing" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.render("login", {
        error: "Invalid email or password!",
        redirect,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render("login", {
        error: "Invalid email or password!",
        redirect,
      });
    }
    const token = generateToken(user._id);
    res.cookie("token", token, { httpOnly: true });
    res.redirect(redirect || "/user/profile"); 
  } catch (error) {
    res.render("error", { message: error.message });
  }
};

// Logout
export const logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};

//profile
export const profile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.render("error", { message: "User not found" });
    }
    res.render("profile", { user });
  } catch (error) {
    res.render("error", { message: error.message });
  }
};

// Forgot Password (Simplified)
export const forgotPassword = (req, res) => {
  res.render("error", {
    message: "Forgot password functionality not implemented yet.",
  });
};
