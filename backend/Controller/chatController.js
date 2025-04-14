
// import jwt from "jsonwebtoken";
// import Message from "../model/Message.js";

// // Authentication Middleware
// export const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "Unauthorized" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch {
//     res.status(403).json({ message: "Invalid token" });
//   }
// };

// // Send Message
// export const sendMessage = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const newMessage = new Message({ sender: req.user.userId, text });

//     await newMessage.save();
//     res.status(201).json({ message: "Message sent" });
//   } catch (err) {
//     res.status(500).json({ message: "Error sending message" });
//   }
// };

// // Get Messages (Students see their own, Faculty see all)
// export const getMessages = async (req, res) => {
//   try {
//     const messages =
//       req.user.role === "faculty"
//         ? await Message.find().populate("sender", "username")
//         : await Message.find({ sender: req.user.userId }).populate("sender", "username");

//     res.json(messages);
//   } catch (err) {
//     res.status(500).json({ message: "Error retrieving messages" });
//   }
// };



import MessageModel from "../model/Message.js"; // Ensure the correct model is imported

// ✅ Send Message
export const sendMessage = async (req, res) => {
    try {
        const { sender, message } = req.body;

        // ✅ Validate request body
        if (!sender || !message) {
            return res.status(400).json({ message: "Sender and message are required" });
        }

        // ✅ Save message to MongoDB
        const newMessage = new MessageModel({ sender, message });
        await newMessage.save();

        res.status(201).json({ message: "Message sent successfully", newMessage });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// ✅ Fetch All Messages
export const getMessages = async (req, res) => {
    try {
        const messages = await MessageModel.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch messages", error: error.message });
    }
};
