import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: 'String',
    required: true,
  },
  name: {
    type: 'String',
    required: true,
  },
  category: {
    type: 'String',
    enum: ['programming', 'business', 'design', 'marketing'],
    required: true,
  },
  videoUpload: {
    type: [String],
    required: true,
  },
  description: {
    type: 'String',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Make sure you have a User model
  }
}, {
  timestamps: true
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
