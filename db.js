import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.mongoURI;

if (!mongoURI) {
  console.error("MongoDB URI is undefined. Check your .env file.");
  process.exit(1); 
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

export default mongoose;
