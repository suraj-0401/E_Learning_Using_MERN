import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CourseDetails = () => {
  const modules = [
    {
      id: 1,
      title: "Introduction to EduVerse ",
      description: "Overview of the learning platform and tools.",
      videos: [
        { id: 1, title: "Welcome to EduVerse ", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
      ],
    },
    {
      id: 2,
      title: "Module 1: Roadmaps",
      description: "Personalized and curated roadmaps for success.",
      videos: [
        { id: 1, title: "Understanding Roadmaps", url: "https://www.w3schools.com/html/movie.mp4" },
        { id: 2, title: "Building Your Roadmap", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { id: 3, title: "Roadmap Examples", url: "https://www.w3schools.com/html/movie.mp4" },
        { id: 1, title: "Understanding Roadmaps", url: "https://www.w3schools.com/html/movie.mp4" },
        { id: 2, title: "Building Your Roadmap", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { id: 3, title: "Roadmap Examples", url: "https://www.w3schools.com/html/movie.mp4" },
      ],
    },
    {
      id: 3,
      title: "Module 2: Expert Assistance",
      description: "Connect with experts for doubt-solving.",
      videos: [
        { id: 1, title: "How to Connect with Experts", url: "https://www.w3schools.com/html/movie.mp4" },
      ],
    },
    {
      id: 4,
      title: "Module 3: Practice Tests",
      description: "Test yourself with structured assessments.",
      videos: [
        { id: 1, title: "Taking Practice Tests", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { id: 2, title: "Analyzing Results", url: "https://www.w3schools.com/html/movie.mp4" },
      ],
    },
  ];

  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (id) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg py-16 px-6 mt-8 mb-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">EduVerse  Course Details</h2>

      <div className="space-y-6">
        {modules.map((module) => (
          <div
            key={module.id}
            className="bg-gray-100 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleModule(module.id)}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-700">{module.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{module.description}</p>
              </div>
              <div className="text-blue-500">
                {expandedModule === module.id ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </div>
            </div>

            {expandedModule === module.id && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-6">
                  {module.videos.map((video) => (
                    <div
                      key={video.id}
                      className="flex flex-col items-start w-full md:w-1/2 lg:w-1/3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h4 className="text-gray-800 font-medium mb-2">{video.title}</h4>
                      <video
                        controls
                        className="w-full rounded-md border border-gray-300"
                      >
                        <source src={video.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105">
          Explore Full Course
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
