import { upload, uploadToCloudinary } from "../middleware/multer.js";
import Course from "../models/models.course.js";
import User from "../models/models.user.js";

export const postCourse = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: "Error uploading file", error: err.message });
    }

    try {
      const { title, name, category, description, userId } = req.body;

      // Validate required fields
      if (!title || !name || !category || !description || !userId) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Validate if files are uploaded
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "Please upload video files" });
      }

      // Validate file type and upload to Cloudinary
      const videoUrls = [];
      for (const file of req.files) {
        // Ensure the file is of the correct type
        if (!file.mimetype.startsWith("video/")) {
          return res.status(400).json({ message: "Invalid file type. Only video files are allowed." });
        }

        // Upload video file to Cloudinary
        const videoUrl = await uploadToCloudinary(file.path);
        videoUrls.push(videoUrl);
      }

      // Create a new course
      const newCourse = new Course({
        title,
        name,
        category,
        description,
        userId,
        videoUpload: videoUrls,
      });

      // Save the course to the database
      await newCourse.save();

      // Return success response
      res.status(201).json({ message: "Course posted successfully", course: newCourse });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  });
};

export const getInstructorCourse = async (req, res) => {
  try {
    const { id, userId } = req.params;

    const course = await Course.findOne({ _id: id, userId: userId });

    if (!course) {
      return res.status(404).json({ message: "Course not found for the specified user" });
    }

    res.status(200).json({ course });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find();

    if (courses.length === 0) {
      return res.status(404).json({ message: "No courses found" });
    }

    res.status(200).json({ courses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

