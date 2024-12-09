import React, { useState } from 'react';
import axios from 'axios';

const PostCourse = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    category: '',
    description: '',
    videos: [], 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, videos: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formPayload = new FormData(); // Use FormData for file uploads
      formPayload.append('title', formData.title);
      formPayload.append('name', formData.name);
      formPayload.append('category', formData.category);
      formPayload.append('description', formData.description);
      const userId = localStorage.getItem('userId');
      formPayload.append('userId', userId);

      formData.videos.forEach((video) => {
        formPayload.append('videos', video);
      });

      const response = await axios.post('http://localhost:5000/api/admin/postCourse', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data); 

      // Reset the form fields after successful submission
      setFormData({
        title: '',
        name: '',
        category: '',
        description: '',
        videos: [],
      });

    } catch (error) {
      console.error('Error posting course:', error.response?.data || error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg w-full max-w-xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Post a New Course</h2>

        <div>
          <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
            Faculty
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter the faculty name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-gray-600 font-medium mb-2">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the course title"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-gray-600 font-medium mb-2">
            Course Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select a category</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="business">Business</option>
          </select>
        </div>

        <div>
          <label htmlFor="videos" className="block text-gray-600 font-medium mb-2">
            Video Upload
          </label>
          <input
            type="file"
            id="videos"
            name="videos"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
            accept="video/*"
            multiple
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-600 font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a brief description of the course"
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCourse;
