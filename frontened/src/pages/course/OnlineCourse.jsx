import React from "react";
import { online } from "./dummydata";

const OnlineCourses = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {online.map((val) => (
              <div
                key={val.id}
                className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={val.cover}
                    alt={val.courseName}
                    className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={val.hoverCover}
                    alt={val.courseName}
                    className="w-full h-64 object-cover absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h1 className="text-xl font-semibold text-gray-800">{val.courseName}</h1>
                  <span className="text-sm text-gray-500">{val.course}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
