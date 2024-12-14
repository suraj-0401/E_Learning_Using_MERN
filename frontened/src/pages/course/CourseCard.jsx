import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  const data = [
    {
      id: 1,
      title: "Striver's DSA Sheet",
      description: "Boost your DSA skills with our handy cheat sheets.",
      icon: "📝", // Replace with appropriate icons/images
    },
    {
      id: 2,
      title: "System Design",
      description: "Design better systems with our simplified approach.",
      icon: "⚙️", // Replace with appropriate icons/images
    },
    {
      id: 3,
      title: "Technical Blogs",
      description: "Dive Deep into Tech Innovation with Our Engaging Blogs.",
      icon: "✍️", // Replace with appropriate icons/images
    },
    {
      id: 3,
      title: "Technical Blogs",
      description: "Dive Deep into Tech Innovation with Our Engaging Blogs.",
      icon: "✍️", // Replace with appropriate icons/images
    },
    {
      id: 3,
      title: "Technical Blogs",
      description: "Dive Deep into Tech Innovation with Our Engaging Blogs.",
      icon: "✍️", // Replace with appropriate icons/images
    },
    {
      id: 3,
      title: "Technical Blogs",
      description: "Dive Deep into Tech Innovation with Our Engaging Blogs.",
      icon: "✍️", // Replace with appropriate icons/images
    },
    
  ];

  return (
    <div className="bg-black min-h-screen flex justify-center items-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="group relative bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300"
          >
            {/* Rectangle hover box */}
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-all duration-300"></div>
            
            <div className="relative z-10">
              <div className="text-4xl bg-gray-900 text-white p-4 rounded-full inline-block mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.description}</p>
              <Link to='/course-details'>
              <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300">
                Try it free →
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
