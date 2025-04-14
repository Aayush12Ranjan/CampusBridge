import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import User from "../model/User.model.js";
import Review from "../model/Review.js";
import mongoose from "mongoose";


// Configure Multer for PDF uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") cb(null, true);
    else cb(new Error("Only PDF files are allowed"), false);
  }
}).array("documents", 5); // Allow up to 5 PDFs

export const createReview = async (req, res) => {
  try {
    const { skills, experience } = req.body;
    const userId = req.user._id; // Extracted from JWT token

    if (!skills || !experience) {
      return res.status(400).json({ message: "Skills and experience are required" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    let documentUrls = [];

    // Upload PDFs to Cloudinary if files are provided
    if (req.files && req.files.length > 0) {
      const uploadPromises = req.files.map((file) =>
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { resource_type: "raw", format: "pdf", folder: "reviews" },
            (error, result) => {
              if (error) reject(error);
              else resolve({ url: result.secure_url, filename: file.originalname });
            }
          );
          streamifier.createReadStream(file.buffer).pipe(stream);
        })
      );

      documentUrls = await Promise.all(uploadPromises);
    }

    const review = new Review({ userId, skills, experience, documents: documentUrls });
    await review.save();

    res.status(201).json({ message: "Review created successfully", review });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("userId", "username email profileImage batch companyName status");
    
    res.status(200).json({ success: true, reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// export const updateReview = async (req, res) => {
//   try {
//     const { skills, experience } = req.body;
//     const userId = req.user._id; // Extracted from JWT token
//     const reviewId = req.params.id;

//     const review = await Review.findOne({ _id: reviewId, userId });
//     if (!review) return res.status(404).json({ message: "Review not found" });

//     let documentUrls = review.documents; // Preserve existing documents

//     // If new files are provided, upload them
//     if (req.files && req.files.length > 0) {
//       const uploadPromises = req.files.map((file) =>
//         new Promise((resolve, reject) => {
//           const stream = cloudinary.uploader.upload_stream(
//             { resource_type: "raw", format: "pdf", folder: "reviews" },
//             (error, result) => {
//               if (error) reject(error);
//               else resolve({ url: result.secure_url, filename: file.originalname });
//             }
//           );
//           streamifier.createReadStream(file.buffer).pipe(stream);
//         })
//       );

//       documentUrls = await Promise.all(uploadPromises);
//     }

//     // Update the review
//     review.skills = skills || review.skills;
//     review.experience = experience || review.experience;
//     review.documents = documentUrls;

//     await review.save();

//     res.status(200).json({ message: "Review updated successfully", review });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// Delete Review

// export const updateReview = async (req, res) => {
//   try {
//     const userId = req.user._id; // Extract from token
//     const { skills, experience } = req.body;

//     if (!skills || !experience) {
//       return res.status(400).json({ message: "Skills and experience are required" });
//     }

//     const review = await Review.findOneAndUpdate(
//       { userId }, // Find by userId instead of reviewId
//       { skills, experience },
//       { new: true } // Return updated review
//     );

//     if (!review) {
//       return res.status(404).json({ message: "Review not found for this user" });
//     }

//     res.status(200).json({ message: "Review updated successfully", review });
//   } catch (error) {
//     console.error("Error updating review:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export const deleteReview = async (req, res) => {
//   try {
//     const userId = req.user._id; // Extracted from JWT token
//     const reviewId = req.params.id;

//     const review = await Review.findOne({ _id: reviewId, userId });
//     if (!review) return res.status(404).json({ message: "Review not found" });

//     // Delete associated documents from Cloudinary
//     if (review.documents && review.documents.length > 0) {
//       await Promise.all(
//         review.documents.map(async (doc) => {
//           const publicId = doc.url.split("/").pop().split(".")[0]; // Extract Cloudinary public ID
//           await cloudinary.uploader.destroy(`reviews/${publicId}`, { resource_type: "raw" });
//         })
//       );
//     }

//     // Delete review
//     await Review.deleteOne({ _id: reviewId });

//     res.status(200).json({ message: "Review deleted successfully" });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


// export const updateReview = async (req, res) => {
//   try {
//     const userId = req.user ? req.user._id : req.params.userId; // Support both token & params
//     console.log("Extracted User ID:", userId);

//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       return res.status(400).json({ message: "Invalid user ID format" });
//     }

//     const { skills, experience } = req.body;

//     if (!skills || !experience) {
//       return res.status(400).json({ message: "Skills and experience are required" });
//     }

//     const review = await Review.findOneAndUpdate(
//       { userId }, // Find by userId
//       { skills, experience },
//       { new: true, runValidators: true } // Ensure validation and return updated review
//     );

//     if (!review) {
//       return res.status(404).json({ message: "Review not found for this user" });
//     }

//     res.status(200).json({ message: "Review updated successfully", review });

//   } catch (error) {
//     console.error("Error updating review:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };




// export const updateReview = async (req, res) => {
//   try {
//     console.log("Update request received with params:", req.params);

//     const { reviewId } = req.params; // Extract review ID from request params
//     console.log("Extracted Review ID:", reviewId);

//     if (!mongoose.Types.ObjectId.isValid(reviewId)) {
//       return res.status(400).json({ message: "Invalid review ID format" });
//     }

//     const { skills, experience } = req.body;

//     if (!skills || !experience) {
//       return res.status(400).json({ message: "Skills and experience are required" });
//     }

//     const review = await Review.findByIdAndUpdate(
//       reviewId, // Find by review ID
//       { skills, experience },
//       { new: true, runValidators: true, upsert: false } // Ensure validation and return updated review
//     );

//     if (!review) {
//       return res.status(404).json({ message: "Review not found" });
//     }

//     res.status(200).json({ message: "Review updated successfully", review });

//   } catch (error) {
//     console.error("Error updating review:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// export const deleteReview = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     console.log("Extracted User ID:", userId);

//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       return res.status(400).json({ message: "Invalid user ID format" });
//     }

//     const review = await Review.findOne({ userId });
//     console.log("Review found:", review);

//     if (!review) {
//       return res.status(404).json({ message: "Review not found for this user" });
//     }

//     // Delete associated documents from Cloudinary (if they exist)
//     if (review.documents && review.documents.length > 0) {
//       await Promise.all(
//         review.documents.map(async (doc) => {
//           const publicId = doc.url.split("/").pop().split(".")[0]; // Extract Cloudinary public ID
//           await cloudinary.uploader.destroy(`reviews/${publicId}`, { resource_type: "raw" });
//         })
//       );
//     }

//     // Delete the review
//     await Review.deleteOne({ userId });

//     res.status(200).json({ message: "Review deleted successfully" });

//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };




// export const updateReview = async (req, res) => {
//   try {
//     console.log("Update request received with params:", req.params);
//     console.log("Request body:", req.body);
//     console.log("Uploaded files:", req.files);

//     const { reviewId } = req.params;
//     console.log("Extracted Review ID:", reviewId);

//     if (!mongoose.Types.ObjectId.isValid(reviewId)) {
//       return res.status(400).json({ message: "Invalid review ID format" });
//     }

//     // Extract data from req.body (for text fields)
//     let { skills, experience } = req.body;

//     if (!skills || !experience) {
//       return res.status(400).json({ message: "Skills and experience are required" });
//     }

//     // Parse skills if it’s a JSON string (from FormData)
//     skills = typeof skills === "string" ? JSON.parse(skills) : skills;

//     // Find the existing review
//     const review = await Review.findById(reviewId);
//     if (!review) {
//       return res.status(404).json({ message: "Review not found" });
//     }

//     // Handle existing documents (from req.body.existingDocs)
//     let existingDocs = req.body.existingDocs
//       ? Object.values(req.body.existingDocs).map((doc) =>
//           typeof doc === "string" ? JSON.parse(doc) : doc
//         )
//       : review.documents || [];

//     // Handle new uploaded files (from req.files)
//     const newDocs = req.files
//       ? req.files.map((file) => ({
//           filename: file.originalname,
//           url: `/uploads/${file.filename}`, // Adjust URL based on your setup
//         }))
//       : [];

//     // Combine existing and new documents
//     const updatedDocuments = [...existingDocs, ...newDocs];

//     // Update the review
//     const updatedReview = await Review.findByIdAndUpdate(
//       reviewId,
//       {
//         skills,
//         experience,
//         documents: updatedDocuments,
//       },
//       { new: true, runValidators: true, upsert: false }
//     );

//     if (!updatedReview) {
//       return res.status(404).json({ message: "Review not found" });
//     }

//     res.status(200).json({ message: "Review updated successfully", review: updatedReview });
//   } catch (error) {
//     console.error("Error updating review:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// Adjust to your model path

// export const updateReview = async (req, res) => {
//   try {
//     console.log("Update request received with params:", req.params);
//     console.log("Request body:", req.body);
//     console.log("Uploaded files:", req.files);

//     const { reviewId } = req.params;

//     // Validate the review ID
//     if (!mongoose.Types.ObjectId.isValid(reviewId)) {
//       return res.status(400).json({ message: "Invalid review ID format" });
//     }

//     // Extract and validate fields from request body
//     let { skills, experience } = req.body;
//     if (!skills || !experience) {
//       return res.status(400).json({ message: "Skills and experience are required" });
//     }

//     // Parse skills if it's a string (e.g., JSON from frontend form)
//     skills = typeof skills === "string" ? JSON.parse(skills) : skills;

//     // Find the existing review
//     const review = await Review.findById(reviewId);
//     if (!review) {
//       return res.status(404).json({ message: "Review not found" });
//     }

//     // Handle existing documents (from req.body.existingDocs)
//     let existingDocs = req.body.existingDocs
//       ? Object.values(req.body.existingDocs).map((doc) =>
//           typeof doc === "string" ? JSON.parse(doc) : doc
//         )
//       : review.documents || [];

//     // Handle new uploaded files and upload to Cloudinary
//     const newDocs = req.files
//       ? await Promise.all(
//           req.files.map(async (file) => {
//             // Upload the file to Cloudinary
//             const uploadedFile = await cloudinary.v2.uploader.upload(file.path, {
//               folder: "reviews", // Optional folder name
//             });

//             return {
//               filename: file.originalname,
//               url: uploadedFile.secure_url, // Cloudinary URL
//             };
//           })
//         )
//       : [];

//     // Combine existing and new documents
//     const updatedDocuments = [...existingDocs, ...newDocs];

//     // Update the review in the database
//     const updatedReview = await Review.findByIdAndUpdate(
//       reviewId,
//       {
//         skills,
//         experience,
//         documents: updatedDocuments,
//       },
//       { new: true, runValidators: true, upsert: false }
//     );

//     if (!updatedReview) {
//       return res.status(404).json({ message: "Review not found" });
//     }

//     // Send the updated review in the response
//     res.status(200).json({ message: "Review updated successfully", review: updatedReview });
//   } catch (error) {
//     console.error("Error updating review:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };





// export const updateReview = async (req, res) => {
//   try {
//     console.log("Update request received with params:", req.params);
//     console.log("Request body:", req.body);
//     console.log("Uploaded files:", req.files);

//     const { reviewId } = req.params;

//     // Validate the review ID
//     if (!mongoose.Types.ObjectId.isValid(reviewId)) {
//       return res.status(400).json({ message: "Invalid review ID format" });
//     }

//     // Extract and validate fields from request body
//     let { skills, experience } = req.body;
//     if (!skills || !experience) {
//       return res.status(400).json({ message: "Skills and experience are required" });
//     }

//     // Parse skills if it's a string
//     skills = Array.isArray(skills) ? skills : JSON.parse(skills);

//     // Find the existing review
//     const review = await Review.findById(reviewId);
//     if (!review) {
//       return res.status(404).json({ message: "Review not found" });
//     }

//     // Handle existing documents (from req.body.existingDocs)
//     let existingDocs = req.body.existingDocs
//       ? Array.isArray(req.body.existingDocs)
//         ? req.body.existingDocs
//         : Object.values(req.body.existingDocs).map((doc) =>
//             typeof doc === "string" ? JSON.parse(doc) : doc
//           )
//       : review.documents || [];

//     // Handle new uploaded files and upload to Cloudinary
//     const newDocs = req.files
//       ? await Promise.all(
//           req.files.map(async (file) => {
//             try {
//               const uploadedFile = await cloudinary.v2.uploader.upload(file.buffer, {
//                 folder: "reviews", // Optional folder name
//               });

//               return {
//                 filename: file.originalname,
//                 url: uploadedFile.secure_url, // Cloudinary URL
//               };
//             } catch (err) {
//               console.error("Error uploading file:", err);
//               return null;
//             }
//           })
//         )
//       : [];

//     // Filter out any failed uploads
//     const validDocs = newDocs.filter((doc) => doc !== null);

//     // Combine existing and new documents
//     const updatedDocuments = [...existingDocs, ...validDocs];

//     // Update the review in the database
//     const updatedReview = await Review.findByIdAndUpdate(
//       reviewId,
//       {
//         skills,
//         experience,
//         documents: updatedDocuments,
//       },
//       { new: true, runValidators: true, upsert: false }
//     );

//     if (!updatedReview) {
//       return res.status(404).json({ message: "Review not found" });
//     }

//     // Send the updated review in the response
//     res.status(200).json({ message: "Review updated successfully", review: updatedReview });
//   } catch (error) {
//     console.error("Error updating review:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };





// export const updateReview = async (req, res) => {
//   try {
//     console.log("Update request received with params:", req.params);
//     console.log("Request body:", req.body);
//     console.log("Uploaded files:", req.files);

//     const { reviewId } = req.params;

//     // Validate the review ID
//     if (!mongoose.Types.ObjectId.isValid(reviewId)) {
//       return res.status(400).json({ message: "Invalid review ID format" });
//     }

//     // Extract and validate fields from request body
//     let { skills, experience } = req.body;
//     if (!skills || !experience) {
//       return res.status(400).json({ message: "Skills and experience are required" });
//     }

//     // No need to parse skills as it's a plain string
//     // skills = typeof skills === "string" ? JSON.parse(skills) : skills;

//     // Find the existing review
//     const review = await Review.findById(reviewId);
//     if (!review) {
//       return res.status(404).json({ message: "Review not found" });
//     }

//     // Handle existing documents (from req.body.existingDocs)
//     let existingDocs = req.body.existingDocs
//       ? Object.values(req.body.existingDocs).map((doc) =>
//           typeof doc === "string" ? JSON.parse(doc) : doc
//         )
//       : review.documents || [];

//     // Handle new uploaded files and upload to Cloudinary
//     const newDocs = req.files
//   ? await Promise.all(
//       req.files.map((file) => {
//         return new Promise((resolve, reject) => {
//           // Using the upload_stream method for buffer data (since you're using memory storage)
//           const stream = cloudinary.uploader.upload_stream(
//             {
//               folder: 'reviews', // Optional Cloudinary folder name
//             },
//             (error, result) => {
//               if (error) {
//                 reject(error);  // Reject if error occurs during upload
//               } else {
//                 resolve({
//                   filename: file.originalname,
//                   url: result.secure_url,  // Cloudinary URL for the uploaded file
//                 });
//               }
//             }
//           );

//           stream.end(file.buffer);  // Pass the file buffer to the upload stream
//         });
//       })
//     )
//   : [];


//     // Combine existing and new documents
//     const updatedDocuments = [...existingDocs, ...newDocs];

//     // Update the review in the database
//     const updatedReview = await Review.findByIdAndUpdate(
//       reviewId,
//       {
//         skills,
//         experience,
//         documents: updatedDocuments,
//       },
//       { new: true, runValidators: true, upsert: false }
//     );

//     if (!updatedReview) {
//       return res.status(404).json({ message: "Review not found" });
//     }

//     // Send the updated review in the response
//     res.status(200).json({ message: "Review updated successfully", review: updatedReview });
//   } catch (error) {
//     console.error("Error updating review:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

export const deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    console.log("Extracted Review ID:", reviewId);

    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
      return res.status(400).json({ message: "Invalid review ID format" });
    }

    const review = await Review.findById(reviewId);
    console.log("Review found:", review);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Delete associated documents from Cloudinary (if they exist)
    if (review.documents && review.documents.length > 0) {
      await Promise.all(
        review.documents.map(async (doc) => {
          const publicId = doc.url.split("/").pop().split(".")[0]; // Extract Cloudinary public ID
          await cloudinary.uploader.destroy(`reviews/${publicId}`, { resource_type: "raw" });
        })
      );
    }

    // Delete the review
    await Review.findByIdAndDelete(reviewId);

    res.status(200).json({ message: "Review deleted successfully" });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const getReviewsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Check if userId exists and is a valid MongoDB ObjectId
    if (!userId || userId === "undefined" || userId === "null") {
      return res.status(400).json({ success: false, message: "Invalid User ID" });
    }

    // Find reviews by userId and populate the user info
    const reviews = await Review.find({ userId }).populate("userId", "username email");

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ success: false, message: "No reviews found for this user" });
    }

    res.status(200).json({ success: true, reviews });
  } catch (error) {
    console.error("Error fetching user reviews:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const getUserReviews = async (req, res) => {
  try {
      const userId = req.params.userId; // Extract user ID from request params
      const reviews = await Review.find({ userId }).populate("userId"); // Fetch reviews and populate user details
      
      if (!reviews.length) {
          return res.status(404).json({ message: "No reviews found for this user" });
      }

      res.status(200).json(reviews);
  } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
  }
};



 // Adjust the path to your Review model

export const updateReview = async (req, res) => {
  try {
    console.log("Update request received with params:", req.params);
    console.log("Request body:", req.body);
    console.log("Uploaded files:", req.files);

    const { reviewId } = req.params;

    // Validate the review ID
    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
      return res.status(400).json({ message: "Invalid review ID format" });
    }

    // Extract and validate fields from request body
    let { skills, experience } = req.body;
    if (!skills || !experience) {
      return res.status(400).json({ message: "Skills and experience are required" });
    }

    // Parse skills if it’s a string (from FormData)
    skills = typeof skills === "string" ? JSON.parse(skills) : skills;

    // Find the existing review
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Handle existing documents (from req.body.existingDocs)
    let existingDocs = req.body.existingDocs
      ? Object.values(req.body.existingDocs).map((doc) =>
          typeof doc === "string" ? JSON.parse(doc) : doc
        )
      : review.documents || [];

    // Handle new uploaded files and upload to Cloudinary
    const newDocs = req.files
      ? await Promise.all(
          req.files.map((file) => {
            return new Promise((resolve, reject) => {
              const stream = cloudinary.uploader.upload_stream(
                {
                  folder: "reviews",
                },
                (error, result) => {
                  if (error) {
                    reject(error);
                  } else {
                    resolve({
                      filename: file.originalname,
                      url: result.secure_url,
                    });
                  }
                }
              );
              stream.end(file.buffer);
            });
          })
        )
      : [];

    // Combine existing and new documents
    const updatedDocuments = [...existingDocs, ...newDocs];

    // Update the review in the database
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      {
        skills, // Now an array
        experience,
        documents: updatedDocuments,
      },
      { new: true, runValidators: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Send the updated review in the response
    res.status(200).json({ message: "Review updated successfully", review: updatedReview });
  } catch (error) {
    console.error("Error updating review:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};









export { upload }; // Export multer middleware for use in the router

