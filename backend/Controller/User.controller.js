
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import cloudinary from '../config/cloudinary.js';
import User from '../model/User.model.js';

const signup = async (req, res) => {
  try {
    console.log("Received Body:", req.body);
    console.log("Received File:", req.file);

    const { username, email, password, confirmPassword, batch,companyName,status } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    let profileImage = null;
    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }).end(req.file.buffer);
      });
      profileImage = result.secure_url;
    }

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profileImage,
      batch,
      status,
      companyName
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: "User registered successfully", token, user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};



const login = async (req, res) => {
  try {
    console.log("🔹 Received request:", req.body);

    const { email, password } = req.body;

    if (!email?.trim() || !password?.trim()) {
      console.log("⚠️ Missing email or password");
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email: email.trim() });
    if (!user) {
      console.log("❌ User not found in database");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("✅ User found:", { id: user._id, email: user.email });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("🔹 Password valid:", isPasswordValid);

    if (!isPasswordValid) {
      console.log("❌ Invalid credentials");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    console.log("🔹 Generated Token:", token);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profileImage: user.profileImage,
        batch: user.batch,
        status: user.status,
        companyName: user.companyName
      },
    });
  } catch (error) {
    console.error("❌ Login Error:", error.message);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};


const getUserById = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      console.log("❌ Unauthorized: User ID not found in request");
      return res.status(401).json({ message: "Unauthorized" });
    }

    console.log("🔹 Fetching profile for user:", req.user._id);

    const user = await User.findById(req.user._id);
    if (!user) {
      console.log("❌ User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("✅ User found:", { id: user._id, email: user.email });

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      profileImage: user.profileImage || "https://via.placeholder.com/100",
      batch: user.batch || "N/A",
      status: user.status || "Active",
      companyName: user.companyName || "Unknown"
    });
  } catch (error) {
    console.error("❌ Error fetching user:", error.message);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};




export default login;



 const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

export { signup, login,getAllUsers,getUserById };


