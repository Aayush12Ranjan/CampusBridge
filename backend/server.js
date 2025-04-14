import express from "express";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import Userrouter from "./routes/User.routes.js";
import ReviewRouter from "./routes/reviewRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/auth.js";
import chatRoutes from "./routes/chat.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "*" })); // Allow all origins (adjust as needed)
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Handle form data

// Routes
app.use("/api/auth", Userrouter);
app.use("/api/review", ReviewRouter);
app.use("/api/contact", contactRoutes); // This makes /api/contact available
app.use("/api/users", authRoutes);
app.use("/api/chat", chatRoutes);


// Connect to MongoDB and Start Server
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit process if DB connection fails
  }
};

 startServer();
