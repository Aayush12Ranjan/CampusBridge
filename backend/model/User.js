import mongoose from "mongoose";

const uSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true }, // Added email field
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "faculty"], required: true },
});

// ✅ Fix: Prevent model overwrite by renaming the model
const UserSchemaModel = mongoose.model("UserSchemaModel", uSchema);

export { UserSchemaModel }; // Named export
