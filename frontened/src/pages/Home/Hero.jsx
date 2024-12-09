import React from "react";

const Hero = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
          Your Path to Success
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Empower your career with expertly crafted online courses from industry leaders.
        </p>
        <div className="mt-8 flex justify-center">
          <button className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300">
            Start Learning
          </button>
          <button className="ml-4 px-8 py-3 border border-white rounded-full text-white font-bold hover:bg-white hover:text-blue-600 transition">
            Browse Courses
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;