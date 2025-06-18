import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: {
       type: mongoose.Schema.Types.ObjectId, 
       ref: "User", 
       required: true },

    text: { 
      type: String,
     required: true },
    timestamp: { 
      type: Date,
       default: Date.now 
      
      },
  },
  { timestamps: true }
);

// ✅ Fix: Export default properly
const Message = mongoose.model("Message", messageSchema);
export default Message;
