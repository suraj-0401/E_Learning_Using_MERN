import React from 'react';

const InstructorProfile = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen flex flex-col items-center py-12 px-4">
        <h1 className="text-red-500 text-xl uppercase font-semibold mb-4">Instructor</h1>
        <h2 className="text-4xl font-bold mb-8">Meet Our Instructor</h2>

        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Section: Image */}
          <div className="md:w-1/2">
            <img
              src="/path-to-image" // Replace with the path to your image
              alt="Instructor"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Section: Info */}
          <div className="md:w-1/2 p-6 space-y-6">
            <h3 className="text-2xl font-bold">Suraj Shekhar</h3>
            <p className="text-sm font-light text-gray-400">SWE-III @ Google | Founder takeUforward</p>

            <ul className="list-disc ml-5 space-y-2 text-gray-300">
              <li>Software Engineer at Google.</li>
              <li>Offers from Facebook London and other startups.</li>
              <li>Previously worked with Amazon, Media.net.</li>
              <li>Followed by 1M+ people across YT, LinkedIn, and other socials.</li>
              <li>Candidate Master at Codeforces.</li>
              <li>6* at Codechef.</li>
            </ul>

            <div className="flex space-x-4 pt-4">
              <img
                src="/path-to-google-logo" // Replace with the path to your Google logo
                alt="Google Logo"
                className="h-10"
              />
              <img
                src="/path-to-amazon-logo" // Replace with the path to your Amazon logo
                alt="Amazon Logo"
                className="h-10"
              />
              <img
                src="/path-to-media-net-logo" // Replace with the path to your Media.net logo
                alt="Media.net Logo"
                className="h-10"
              />
              <img
                src="/path-to-codeforces-logo" // Replace with the path to your Codeforces logo
                alt="Codeforces Logo"
                className="h-10"
              />
              <img
                src="/path-to-codechef-logo" // Replace with the path to your Codechef logo
                alt="Codechef Logo"
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorProfile;
