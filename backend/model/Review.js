import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skills: {
    type: [String],
    default: []
  },
  experience: { 
    type: String,
    required: true,
    trim: true
  },
  documents: [
    {
      url: { type: String },
      filename: { type: String },
    },
  ],
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;