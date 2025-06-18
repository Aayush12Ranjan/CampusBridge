// import express from "express";
// import { Server } from "socket.io";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";

// import Userrouter from "./routes/User.routes.js";
// import ReviewRouter from "./routes/reviewRoutes.js";
// import contactRoutes from "./routes/contactRoutes.js";
// import authRoutes from "./routes/auth.js";
// import chatRoutes from "./routes/chat.js";

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors({ origin: "*" })); // Allow all origins (adjust as needed)
// app.use(express.json()); // Parse JSON payloads
// app.use(express.urlencoded({ extended: true })); // Handle form data

// // Routes
// app.use("/api/auth", Userrouter);
// app.use("/api/review", ReviewRouter);
// app.use("/api/contact", contactRoutes); // This makes /api/contact available
// app.use("/api/users", authRoutes);
// app.use("/api/chat", chatRoutes);


// app.get("/hello",(req,res)=>{
//   res.send("Hello from server")
// })

// // Connect to MongoDB and Start Server
// const startServer = async () => {
//   try {
//     await connectDB();
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => console.log(`✅ Server running on port http://localhost:${PORT}`));
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error);
//     process.exit(1); // Exit process if DB connection fails
//   }
// };

//  startServer();



import express from "express";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import http from "http";

// Routes
import Userrouter from "./routes/User.routes.js";
import ReviewRouter from "./routes/reviewRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/auth.js";
import chatRoutes from "./routes/chat.js";

// Config
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === "production";

const app = express();
const server = http.createServer(app);

// Socket.io
const io = new Server(server, {
  cors: {
    origin: isProduction 
      ? process.env.FRONTEND_URL 
      : "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors({
  origin: isProduction 
    ? process.env.FRONTEND_URL 
    : "http://localhost:5173"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", Userrouter);
app.use("/api/review", ReviewRouter);
app.use("/api/contact", contactRoutes);
app.use("/api/users", authRoutes);
app.use("/api/chat", chatRoutes);

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "healthy",
    mode: process.env.NODE_ENV || "development",
    uptime: process.uptime() 
  });
});

// Production Frontend Serving
if (isProduction) {
  const staticPath = path.join(__dirname, "../frontend/dist");
  app.use(express.static(staticPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
}

// Socket Events
io.on("connection", (socket) => {
  console.log(`Socket connected: ${socket.id}`);
  
  socket.on("disconnect", () => {
    console.log(`Socket disconnected: ${socket.id}`);
  });
  
  // Add your custom socket events here
});

// Start Server
const start = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`
      🚀 Server running in ${isProduction ? "PRODUCTION" : "DEVELOPMENT"} mode
      📡 Backend: http://localhost:${PORT}
      💻 Health: http://localhost:${PORT}/api/health
      `);
      
      if (isProduction) {
        console.log("🌐 Frontend being served from /frontend/dist");
      }
    });
  } catch (err) {
    console.error("💥 Server startup failed:", err);
    process.exit(1);
  }
};

start();