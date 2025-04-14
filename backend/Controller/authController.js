// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { UserSchemaModel } from "../model/User.js"; // ✅ Correct model import
// import dotenv from "dotenv";

// dotenv.config();

// // ✅ Signup Route
// export const signup = async (req, res) => {
//   const { username, email, password, role } = req.body;

//   // ✅ Validate role
//   if (!["student", "faculty"].includes(role)) {
//     return res.status(400).json({ message: "Invalid role" });
//   }

//   try {
//     // ✅ Check if user already exists
//     const existingUser = await UserSchemaModel.findOne({ $or: [{ username }, { email }] });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // ✅ Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // ✅ Save new user
//     const newUser = new UserSchemaModel({ username, email, password: hashedPassword, role });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Error registering user", error: err.message });
//   }
// };

// // ✅ Login Route
// export const login = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // ✅ Find user in database
//     const user = await UserSchemaModel.findOne({ username });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // ✅ Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // ✅ Generate JWT token
//     const token = jwt.sign(
//       { userId: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.json({ token, role: user.role });
//   } catch (err) {
//     res.status(500).json({ message: "Login failed", error: err.message });
//   }
// };


import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserSchemaModel } from "../model/User.js"; // ✅ Correct model import
import dotenv from "dotenv";

dotenv.config();

// Signup Route
export const signup = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!["student", "faculty"].includes(role)) {
    return res.status(400).json({ message: "Invalid role" });
  }

  try {
    const existingUser = await UserSchemaModel.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserSchemaModel({ username, email, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err.message });
  }
};

// Login Route
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserSchemaModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
