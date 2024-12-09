import React, { useEffect, useState } from 'react';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses data (simulate with dummy data for now)
    const fetchCourses = async () => {
      const dummyCourses = [
        {
          id: 1,
          title: 'React for Beginners',
          category: 'Programming',
          description: 'Learn the basics of React.',
          video: 'react-intro.mp4',
        },
      ];
      setCourses(dummyCourses);
    };

    fetchCourses();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
      <h2 className="text-3xl font-semibold text-gray-700 mb-5">My Courses</h2>

      {courses.length === 0 ? (
        <p className="text-gray-500">No courses posted yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
            >
              <h3 className="text-xl font-medium text-gray-800">{course.title}</h3>
              <p className="text-sm text-gray-500">Category: {course.category}</p>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <button
                className="mt-4 bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                View Video
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
