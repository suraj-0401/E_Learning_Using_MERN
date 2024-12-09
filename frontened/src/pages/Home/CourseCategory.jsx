import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function CourseCategory() {
  const{theme}=useTheme();
  const themeClasses = theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white';

  return (
    <section className={`${themeClasses} py-16`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Discover Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Programming", icon: "🖥️" },
            { name: "Business", icon: "📈" },
            { name: "Photography", icon: "📸" },
            { name: "Health & Fitness", icon: "🏋️" },
          ].map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition"
            >
              <span className="text-5xl">{category.icon}</span>
              <h3 className="text-lg font-medium mt-4">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
