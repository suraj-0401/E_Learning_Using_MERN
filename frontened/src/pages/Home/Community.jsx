import React from 'react';

const CommunitySection = () => {
  return (
    <div className="bg-black text-white py-32 px-4 text-center min-h-screen">
      <h2 className="text-3xl font-bold mb-8">Connect with our community</h2>
      <div className="flex justify-center gap-8">

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-48 transform transition duration-300 hover:scale-105 hover:bg-gray-700">
          <span className="text-3xl font-bold mb-2">120K+</span>
          <span>Twitter</span>
          <i className="text-blue-500 text-3xl mt-2">🐦</i>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-48 transform transition duration-300 hover:scale-105 hover:bg-gray-700">
          <span className="text-3xl font-bold mb-2">120K+</span>
          <span>Instagram</span>
          <i className="text-pink-500 text-3xl mt-2">📸</i>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-48 transform transition duration-300 hover:scale-105 hover:bg-gray-700">
          <span className="text-3xl font-bold mb-2">560K+</span>
          <span>LinkedIn</span>
          <i className="text-blue-700 text-3xl mt-2">🔗</i>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
