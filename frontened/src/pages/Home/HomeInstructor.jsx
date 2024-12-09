import React from "react";

function HomeInstructor() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Learn From Top Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white text-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              <img
                src={`https://via.placeholder.com/100`}
                alt={`Instructor ${i + 1}`}
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h3 className="mt-4 font-medium text-lg">Instructor {i + 1}</h3>
              <p className="text-gray-500">Expert in Subject {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeInstructor;
