import React from 'react';

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
  ];

  return (
    <div className="bg-black flex flex-col justify-center items-center py-12 px-4 min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Featured Courses
        </h2>
        <p className="text-lg md:text-xl text-white mt-4">
          Explore our top-rated courses crafted for excellence.
        </p>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="group relative bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
          >
            {/* Hover effect rectangle border */}
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-all duration-300"></div>

            <div className="relative z-10">
              {/* Icon Section */}
              <div className="text-5xl bg-gray-700 text-white p-4 rounded-full inline-block mb-4 mx-auto">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white text-center">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-center mt-2">
                {item.description}
              </p>

              {/* Button */}
              <div className="flex justify-center mt-4">
                <button className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
                  Try it free →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
