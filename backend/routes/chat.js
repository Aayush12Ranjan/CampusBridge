import express from "express";
import { sendMessage, getMessages } from "../Controller/chatController.js";
import { authenticateUser } from "../config/authMiddleware.js"; // ✅ Correct import

const router = express.Router();

router.post("/send",authenticateUser, sendMessage);
router.get("/messages",authenticateUser, getMessages);

export default router;
