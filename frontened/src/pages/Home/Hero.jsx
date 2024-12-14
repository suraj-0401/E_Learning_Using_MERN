import React from 'react';
function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Empower Your Future with <br />
            <span className="text-yellow-400">World-Class E-Learning</span>
          </h1>
          <p className="text-lg mb-6">
            Join thousands of learners and gain access to high-quality courses on coding, data science, design, and more. Learn at your own pace with expert instructors.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition duration-300">
              Get Started Now
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition duration-300">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src=""
            alt="E-Learning"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
