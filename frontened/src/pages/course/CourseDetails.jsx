import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useTheme } from '../../context/ThemeContext';
import CheckoutForm from '../../payment/CheckoutForm';

const stripePromise = loadStripe('pk_test_51PlmgsCRaWWPfJ2zXtlH5ffbPSzV8HaPZXfhBA2SbsmagJ97bnFkKZtY8EHrd6p7rOkJhSZz82zcA2LuMhQkdP6z00v0KaEcAN');

const courses = [
  {
    id: 1,
    title: "React Basics",
    price: 100,
    description: "Learn the fundamentals of React, including JSX, components, and state.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    badge: { label: "New", color: "blue" },
    features: ["Introduction to JSX", "Components and Props", "State and Lifecycle"],
  },
];

const CourseDetails = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const themeClasses = theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white';

  const [showPayment, setShowPayment] = useState(false);

  const course = courses.find((course) => course.id === parseInt(id));

  const handleEnrollNow = () => {
    setShowPayment(true); // Trigger the payment modal
  };

  if (!course) {
    return (
      <div className={`${themeClasses} min-h-screen py-12 px-6 flex flex-col items-center`}>
        <h2 className="text-2xl font-bold text-red-500">Course not found!</h2>
        <Link to="/course" className="text-blue-500 hover:underline mt-4">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className={`${themeClasses} min-h-screen py-12 px-6`}>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <iframe
            className="w-full h-64"
            src={course.videoUrl}
            title={`Course Video ${course.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <span
            className={`absolute top-2 right-2 bg-${course.badge.color}-500 text-white text-xs px-2 py-1 rounded-full`}
          >
            {course.badge.label}
          </span>
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">{course.title}</h1>
          <p className="text-sm text-gray-600 mt-2">{course.description}</p>
          <ul className="mt-4 space-y-2">
            {course.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span
                  className={`bg-${course.badge.color}-100 text-${course.badge.color}-600 p-1 rounded-full mr-2`}
                >
                  ✅
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between">
            <Link
              to="/course"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Back to Courses
            </Link>
            <button
              onClick={handleEnrollNow}
              className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg">
            <button
              onClick={() => setShowPayment(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            <h2 className="text-center text-xl font-bold mb-4">Payment Checkout</h2>
            <Elements stripe={stripePromise}>
              <CheckoutForm 
                courseTitle={course.title} 
                price={course.price} 
                setShowPayment={setShowPayment} 
              />
            </Elements>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
