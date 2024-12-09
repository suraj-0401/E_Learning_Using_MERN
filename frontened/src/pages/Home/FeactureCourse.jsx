import React from 'react'
import { useTheme } from '../../context/ThemeContext'

function FeactureCourse() {
  const{theme}=useTheme();
  const themeClasses = theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white';

  return (
    <section className={`${themeClasses} py-16 bg-gray-50`}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Featured Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={`https://via.placeholder.com/300x200?text=Course+${i + 1}`}
              alt={`Course ${i + 1}`}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-800">
                Advanced Course {i + 1}
              </h3>
              <p className="text-gray-500 mt-2">
                Dive deep into the subject and learn from experts.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>  )
}

export default FeactureCourse