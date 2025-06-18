import express from "express";
import multer from "multer";
import { getAllUsers, getUserById, login, signup,Delete } from "../Controller/User.controller.js";
import {authenticateUser} from "../config/authMiddleware.js";

const Userrouter = express.Router();

// Use memory storage for direct Cloudinary upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Signup route with profile image upload
Userrouter.post("/signup", upload.single("profileImage"), signup);

// Login route
Userrouter.post("/login", login);

// Get all users (protected route)
// Userrouter.get("/users", authenticateUser, getAllUsers);
Userrouter.get("/users", getAllUsers);

Userrouter.get("/profile", authenticateUser, getUserById);

//delete profile

Userrouter.delete('/delete/:id',Delete);


export default Userrouter;


// import express from 'express';
// import { loginUser, registerUser } from '../Controller/User.controller.js';


// const router = express.Router();

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// export default router;
