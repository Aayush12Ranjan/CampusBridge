// import express from "express";
// import multer from "multer";
// import User from "../model/User.model.js";
// import cloudinary from "../config/cloudinary.js";
// import Review from "../model/Review.js";
// import {authenticateUser} from "../config/authMiddleware.js";

// Configure multer for handling file uploads
// const storage = multer.memoryStorage(); // Store files in memory for direct upload
// const upload = multer({ storage });

// const ReviewRouter = express.Router();

// Route to create a review
// ReviewRouter.post("/create", authenticateUser, upload.array("documents", 5), async (req, res) => {
//   try {
//     console.log("Received Body:", req.body);
//     console.log("Uploaded Files:", req.files);

//     const { userId, username, skills, experience } = req.body;

//     // Check if user exists
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Upload files to Cloudinary (if any)
//     let documentUrls = [];
//     if (req.files.length > 0) {
//       const uploadPromises = req.files.map((file) =>
//         cloudinary.uploader.upload_stream(
//           { resource_type: "raw" },
//           (error, result) => {
//             if (error) throw new Error("File upload failed");
//             documentUrls.push(result.secure_url);
//           }
//         ).end(file.buffer) // Directly send file buffer for Cloudinary upload
//       );
//       await Promise.all(uploadPromises); // Wait for all uploads to complete
//     }

//     // Process skills correctly
//     const skillsArray = Array.isArray(skills) ? skills : skills.split(",").map((s) => s.trim());

//     // Create a new review document
//     const newReview = new Review({
//       userId,
//       username,
//       skills: skillsArray,
//       experience,
//       documents: documentUrls,
//     });

//     // Save the review to the database
//     await newReview.save();

//     res.status(201).json({ message: "Review created successfully", review: newReview });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Something went wrong", error: error.message });
//   }
// });

// Export the router
// export default ReviewRouter;

//  import express from 'express';
// import { createReview } from '../Controller/Review.controller.js';
// import {authenticateUser} from '../config/authMiddleware.js'


// const ReviewRouter = express.Router();

// ReviewRouter.post('/create', authenticateUser, createReview);

// export default ReviewRouter;



import express from "express";
import { createReview, deleteReview, getAllReviews, getReviewsByUser, getUserReviews, updateReview, upload } from "../Controller/Review.controller.js";
import { authenticateUser } from "../config/authMiddleware.js";

const ReviewRouter = express.Router();


ReviewRouter.post("/create", authenticateUser, upload, createReview);
ReviewRouter.delete("/delete/:reviewId", deleteReview);
ReviewRouter.put("/update/:reviewId",authenticateUser,upload, updateReview);
// ReviewRouter.get("/all", authenticateUser, getAllReviews);
ReviewRouter.get("/user/:userId", authenticateUser, getReviewsByUser);
ReviewRouter.get("/user/:userId", getUserReviews);


ReviewRouter.get("/all", getAllReviews);

export default ReviewRouter;
