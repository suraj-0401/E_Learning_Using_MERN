import React from 'react';

const Testimonials = () => {
  return (
    <div className="bg-black text-white py-16 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-pink-500">Discover the Success Stories of Our Students</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-2 hover:border-pink-500">
          <p className="text-lg mb-4">
            DP and Graphs? Used to terrify me! I'd skip problems related to them without a second thought. Then I discovered Striver's series. By the end, I was tackling Recursion, DP, and Graphs with confidence, even solving problems independently. Huge thanks ...
          </p>
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="Athang Kulkarni" className="w-12 h-12 rounded-full mr-4"/>
            <div>
              <p className="font-semibold text-pink-500">Athang Kulkarni</p>
              <p className="text-sm text-gray-400">Software Engineer 3 @ Walmart</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-2 hover:border-pink-500">
          <p className="text-lg mb-4">
            With no prior knowledge of programming or DSA, the takeUforward channel was instrumental in my journey from beginner to landing my dream job as a Software Development Engineer. Their clear explanations and well-structured content made grasping crucial ...
          </p>
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="Gaurav Poosarla" className="w-12 h-12 rounded-full mr-4"/>
            <div>
              <p className="font-semibold text-pink-500">Gaurav Poosarla</p>
              <p className="text-sm text-gray-400">SDE-1 @ Samsung</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-2 hover:border-pink-500">
          <p className="text-lg mb-4">
            I was entirely new to the world of DSA and CP when I discovered Striver's channel. Striver's clear explanations ignited my passion for computer science, introducing me to core concepts like trees, graphs, and dynamic programming. Today, I stand as an ...
          </p>
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="Prajwal Shah" className="w-12 h-12 rounded-full mr-4"/>
            <div>
              <p className="font-semibold text-pink-500">Prajwal Shah</p>
              <p className="text-sm text-gray-400">SWE Intern @ Deutsche Bank</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="text-white bg-pink-500 px-4 py-2 rounded-full hover:bg-pink-600">←</button>
        <button className="text-white bg-pink-500 px-4 py-2 rounded-full hover:bg-pink-600 ml-4">→</button>
      </div>
    </div>
  );
};

export default Testimonials;
