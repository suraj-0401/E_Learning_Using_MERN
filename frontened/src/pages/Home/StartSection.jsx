import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-black text-white py-16 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">Why Choose Us?</h2>
        <p className="text-lg mt-4">
          Unlock Your Potential with Our Comprehensive Learning Approach
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-2 hover:border-pink-500 hover:shadow-xl">
          <div className="text-4xl text-pink-500 mb-4">01</div>
          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            Expert-Crafted Learning
          </h3>
          <p>
            Our team of accomplished engineers, with impressive coding profiles
            across various programming platforms, hails from top tech companies
            like Google, Amazon, Meta, and Microsoft. They also boast a proven
            track record of successful teaching.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-2 hover:border-pink-500 hover:shadow-xl">
          <div className="text-4xl text-pink-500 mb-4">02</div>
          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            Structured Learning Path
          </h3>
          <p>
            Master Data Structures & Algorithms (DSA), System Design, core
            subjects, and practical projects – all through premium blog posts
            and in-depth video solutions.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-2 hover:border-pink-500 hover:shadow-xl">
          <div className="text-4xl text-pink-500 mb-4">03</div>
          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            Unmatched Content Depth
          </h3>
          <p>
            We prioritize quality content, offering in-depth explanations and a
            wider range of solved problems in both free and paid courses. Our
            focus is on developing problem-solving skills through intuitive video
            explanations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
