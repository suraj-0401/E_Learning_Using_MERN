import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateContext from "../context/CreateContext";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLogined, setIsLogined] = useState(false);

  // user context
  const { userDetails } = useContext(CreateContext);
  console.log(userDetails);
  // theme context
  const { theme, toggleTheme } = useTheme();
  const themeClasses = theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white';

  useEffect(() => {
    // Check login status when the component mounts
    const loginStatus = localStorage.getItem("isLogined") === 'true'; 
    setIsLogined(loginStatus);
  }, []);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // logout logic
  const handleLogout = () => {
    localStorage.removeItem("isLogined");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("googleToken");

    setIsLogined(false); 
    navigate('/login');
  };


  return (
    <nav className={`bg-white border-b border-gray-200 dark:bg-gray-900 ${themeClasses}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            E-learning
          </span>
        </Link>

        <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse relative">
          <button
            onClick={toggleDropdown}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            <h1>Menu</h1>
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-96 w-64 bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-lg border border-gray-300 z-10 dark:from-gray-800 dark:to-gray-700 dark:border-gray-600 transform transition-all duration-300 ease-in-out">
              <div className="px-5 py-4 text-sm font-semibold text-gray-900 dark:text-white bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-t-lg">
                <div className="mb-1">{userDetails.role}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {userDetails.email}
                </div>
              </div>

              {/* Menu Items */}
              <ul className="py-2 text-gray-700 dark:text-gray-200 divide-y divide-gray-100 dark:divide-gray-600">
                <li className="hover:scale-105 transition-transform">
                  {userDetails.role==='admin' && <Link
                    to="/dashboard"
                    className="block px-5 py-3 hover:text-blue-700 hover:bg-blue-50 dark:hover:text-blue-300 dark:hover:bg-gray-700 rounded-lg"
                  >
                    Dashboard
                  </Link> 
                  }
                </li>
                <li className="hover:scale-105 transition-transform">
                  <button
                    onClick={toggleTheme}
                    className="block px-5 py-3 hover:text-blue-700 hover:bg-blue-50 dark:hover:text-blue-300 dark:hover:bg-gray-700 rounded-lg"
                  >
                    Theme
                  </button>
                </li>

                <li className="hover:scale-105 transition-transform">
                  <Link
                    to="/my-course"
                    className="block px-5 py-3 hover:text-blue-700 hover:bg-blue-50 dark:hover:text-blue-300 dark:hover:bg-gray-700 rounded-lg"
                  >
                    My Course
                  </Link>
                </li>
              </ul>

              <div className="py-3 bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-700 dark:to-gray-800 rounded-b-lg">
                {!isLogined ? (
                  <Link
                    to="/login"
                    className="block px-5 py-3 text-center text-red-600 hover:text-white hover:bg-red-500 dark:hover:bg-red-600 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="block px-5 py-3 text-center text-red-600 hover:text-white hover:bg-red-500 dark:hover:bg-red-600 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          )}

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"} md:block`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/course"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Course
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
