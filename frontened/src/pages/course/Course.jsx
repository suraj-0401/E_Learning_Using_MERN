import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MyCourse() {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('');

  // Simulate fetching purchased courses (replace with API call as needed)
  useEffect(() => {
    const fetchPurchasedCourses = () => {
      const courses = JSON.parse(localStorage.getItem('purchasedCourses')) || [];
      setPurchasedCourses(courses);
      setFilteredCourses(courses);

      // Extract unique categories and faculties
      const uniqueCategories = [
        ...new Set(courses.map((course) => course.category)),
      ];
      const uniqueFaculties = [
        ...new Set(courses.map((course) => course.faculty)),
      ];

      setCategories(uniqueCategories);
      setFaculties(uniqueFaculties);
    };

    fetchPurchasedCourses();
  }, []);

  // Handle filter changes
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFacultyChange = (event) => {
    setSelectedFaculty(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceRange([parseInt(event.target.value), priceRange[1]]);
  };

  const handlePriceChangeMax = (event) => {
    setPriceRange([priceRange[0], parseInt(event.target.value)]);
  };

  // Apply filters
  const applyFilters = () => {
    let filtered = [...purchasedCourses];

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((course) => course.category === selectedCategory);
    }

    // Filter by faculty
    if (selectedFaculty) {
      filtered = filtered.filter((course) => course.faculty === selectedFaculty);
    }

    // Filter by price range
    filtered = filtered.filter(
      (course) => course.price >= priceRange[0] && course.price <= priceRange[1]
    );

    setFilteredCourses(filtered);
  };

  return (
    <>




    <div className="flex min-h-screen bg-gray-100 py-12 px-6">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-5 rounded-lg mr-6">
        <h3 className="text-xl font-semibold mb-5">Filters</h3>

        {/* Category Filter */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Category</h4>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="bg-gray-900 text-white px-4 py-2 rounded-md w-full"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Faculty Filter */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Faculty</h4>
          <select
            value={selectedFaculty}
            onChange={handleFacultyChange}
            className="bg-gray-900 text-white px-4 py-2 rounded-md w-full"
          >
            <option value="">Select Faculty</option>
            {faculties.map((faculty) => (
              <option key={faculty} value={faculty}>
                {faculty}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Price</h4>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[0]}
            onChange={handlePriceChange}
            className="w-full"
          />
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={handlePriceChangeMax}
            className="w-full mt-2"
          />
          <div className="mt-2 text-sm">
            <span>${priceRange[0]}</span> - <span>${priceRange[1]}</span>
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={applyFilters}
          className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Apply Filters
        </button>
      </div>

      <div className="max-w-screen-lg mx-4 mt-24 overflow-hidden border shadow-lg rounded-xl sm:mx-auto">
        <div className="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
          <div className="text-white p-8 sm:p-8 bg-[#2C2760] order-first ml-auto h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5 flex flex-col justify-between">
            <div>
              <small className="text-xs uppercase sm:text-sm">Course</small>
              <h2 className="mt-2 text-xl font-medium sm:mt-4 sm:text-3xl">Javascript Fundamentals</h2>
            </div>
            <Link to='/course-detail' className="flex items-center mt-8 text-sm text-gray-200 sm:mt-0 text-start">View all chapters
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>

          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5 text-[#2C2760]">
            <div className="flex items-start justify-between mb-4">
              <div className="text-sm font-medium uppercase sm:text-base">Chapter 4</div>
              <div className="text-end">
                <div className="w-full sm:w-80 bg-[#EEEEEE] h-2 rounded-md">
                  <div className="bg-[#2C2760] h-2 rounded-md" style={{ width: '67%' }}></div>
                </div>
                <small>6/9 Challenges</small>
              </div>
            </div>
            <h2 className="text-2xl font-medium text-gray-900 lg:text-4xl">Callback & Closures</h2>
            <div className="flex justify-end mt-8 sm:mt-auto">
              <Link to="#"
                className="group flex w-44 cursor-pointer select-none items-center justify-center rounded-full bg-[#2C2760] px-6 py-2 text-white transition">
                <Link to='/course-details' className="flex items-center justify-center w-full py-1 font-semibold text-center rounded group">
                  Continue </Link>
              </Link>
            </div>
          </div>
        </div>




      </div>
    </div>
    </>
  );
}

export default MyCourse;
