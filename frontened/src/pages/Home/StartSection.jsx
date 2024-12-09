import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";

function StartSection() {
  const { theme } = useTheme();
  const themeClasses = theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white";

  const [activeUsers, setActiveUsers] = useState(0);

  const fetchActiveUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/user/activeUser");
      setActiveUsers(data.activeUsers); // Update state with the active user count
    } catch (error) {
      console.error("Error fetching active users:", error);
    }
  };

  useEffect(() => {
    fetchActiveUsers(); // Fetch initially
    const interval = setInterval(fetchActiveUsers, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className={`${themeClasses} py-16`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Active Users: {activeUsers}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Courses Available", value: "500+" },
            { label: "Learners Enrolled", value: "1.2M+" },
            { label: "Top Instructors", value: "150+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-4xl font-bold text-blue-600">{stat.value}</h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StartSection;
