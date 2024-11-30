import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import connectDB from "./db.js";

dotenv.config();
// connectDB();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.urlencoded({ extended: true })); // For form data
app.use(express.json());
app.use(cookieParser());

// Set view engine and static files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
import baseRoutes from "./routes/baseRoutes.js";
import userRoutes from "./routes/userRoutes.js";

app.use("/", baseRoutes);
app.use("/user", userRoutes);


// app.use((req, res) => {
//   res.status(404).render("error", { message: "Page not found" });
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
