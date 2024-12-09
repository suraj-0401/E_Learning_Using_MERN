import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MyCourse() {
  const [purchasedCourses, setPurchasedCourses] = useState([]);

  // Simulate fetching purchased courses (replace with API call as needed)
  useEffect(() => {
    const fetchPurchasedCourses = () => {
      const courses = JSON.parse(localStorage.getItem('purchasedCourses')) || [];
      setPurchasedCourses(courses);
    };

    fetchPurchasedCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Courses</h1>
      {purchasedCourses.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600">You haven't purchased any courses yet.</p>
          <Link
            to="/course"
            className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Browse Courses
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {purchasedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <iframe
                  className="w-full h-40"
                  src={course.videoUrl}
                  title={`Course Video ${course.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <span
                  className={`absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full`}
                >
                  Purchased
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">{course.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{course.description}</p>
                <p className="text-gray-800 font-bold mt-4">
                  Price: ${course.price}
                </p>
                <div className="mt-4 flex justify-between">
                  <a
                    href={course.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Watch Now
                  </a>
                  <Link
                    to="/course"
                    className="inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    More Courses
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCourse;
