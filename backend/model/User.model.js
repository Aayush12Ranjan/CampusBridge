import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  companyName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    default: null
  },
  batch: {
    type: String,
    required: true,
    enum: ['2020-2024', '2021-2025', '2022-2026', '2023-2027']
  },
  status: {
    type: String,
    required: true,
    enum: ['Selected', 'Rejected']
  }
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

export default User;


