import React from "react";
import Myphoto from '../../images/MyPhoto-2.jpg'
const InstructorProfile = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen flex flex-col items-center py-12">
        <h1 className="text-red-500 text-xl uppercase font-semibold mb-4">
          Instructor
        </h1>
        <h2 className="text-4xl font-bold mb-8">Meet Our Instructor</h2>

        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden space-y-8 md:space-y-0">
          <div className="md:w-1/2">
            <img
              src={Myphoto}// Replace with the path to your image
              alt="Instructor"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Section: Info */}
          <div className="md:w-1/2 p-6 space-y-6">
            <h3 className="text-2xl font-bold">Suraj Shekhar</h3>
            <p className="text-sm font-light text-gray-400">
              Intern at TechnoHacks
            </p>

            <ul className="list-disc ml-5 space-y-2 text-gray-300">
              <li>
                Teaching Assistant specializing in C programming, OOP, and Data
                Structures.
              </li>
              
              <li>
                Internship experience at Techno Hacks as MERN full stack devloper
              </li>

              <li>
                Proficient in deep learning, machine learning, and computer
                vision projects like fire detection and digit recognition using
                ResNet50.
              </li>
              <li>
                Ranked developer on competitive coding platforms with interests
                in Java, data structures, and algorithms.
              </li>
            </ul>

            <div className="flex space-x-4 pt-4">
  <a href="https://www.codechef.com/users/your_codechef_username" target="_blank" rel="noopener noreferrer">
    <img
      src="/path-to-codechef-logo" // Replace with the path to your CodeChef logo
      alt="CodeChef Logo"
      className="h-10"
    />
  </a>
  <a href="https://leetcode.com/your_leetcode_username" target="_blank" rel="noopener noreferrer">
    <img
      src="/path-to-leetcode-logo" // Replace with the path to your LeetCode logo
      alt="LeetCode Logo"
      className="h-10"
    />
  </a>
  <a href="https://auth.geeksforgeeks.org/user/your_gfg_username/profile" target="_blank" rel="noopener noreferrer">
    <img
      src="/path-to-gfg-logo" // Replace with the path to your GeeksforGeeks logo
      alt="GeeksforGeeks Logo"
      className="h-10"
    />
  </a>
  <a href="https://www.codingninjas.com/codestudio/profile/your_codingninjas_username" target="_blank" rel="noopener noreferrer">
    <img
      src="/path-to-codingninjas-logo" // Replace with the path to your Coding Ninjas logo
      alt="Coding Ninjas Logo"
      className="h-10"
    />
  </a>
  <a href="https://github.com/your_github_username" target="_blank" rel="noopener noreferrer">
    <img
      src="/path-to-github-logo" // Replace with the path to your GitHub logo
      alt="GitHub Logo"
      className="h-10"
    />
  </a>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorProfile;
