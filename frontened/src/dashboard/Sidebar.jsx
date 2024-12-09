import { useState, useContext, useEffect } from 'react';
import CreateContext from '../context/CreateContext';
import PostCourse from './PostCourse';
import MyCourse from './MyCourse';
import Profile from './Profile';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('mycourse'); // Default to 'mycourse'
  const { userDetails } = useContext(CreateContext);

  useEffect(() => {
    setActiveItem('profile'); // Ensure default selection is always My Course
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="h-screen flex">
      <div className="flex flex-col justify-between bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 text-white w-64 p-5">
        <div>
          <div className="flex items-center space-x-4">
            <img
              src={userDetails?.avatar || 'https://source.unsplash.com/100x100/?portrait'}
              alt="User Avatar"
              className="w-14 h-14 rounded-full border-2 border-gray-300 shadow-md"
            />

            <div
              onClick={() => handleItemClick('profile')}
              className={`hover:bg-gray-700 p-2 rounded-lg transition duration-300 cursor-pointer ${
                activeItem === 'profile' ? 'bg-gray-700' : ''
              }`}
              aria-label="Profile"
            >
              <span className="flex items-center space-x-3">
                <span>View Profile</span>
              </span>
            </div>
          </div>

          <ul className="mt-6 space-y-3 text-sm">
            <Link
              to="/"
              className="block hover:bg-gray-700 p-2 rounded-lg transition duration-300 cursor-pointer"
            >
              <span className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-400"
                >
                  <path d="M4 4h16v16H4z" />
                </svg>
                <span>Home</span>
              </span>
            </Link>

            <li
              onClick={() => handleItemClick('mycourse')}
              className={`hover:bg-gray-700 p-2 rounded-lg transition duration-300 cursor-pointer ${
                activeItem === 'mycourse' ? 'bg-gray-700' : ''
              }`}
              aria-label="My Course"
            >
              <span className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-400"
                >
                  <path d="M4 4h16v16H4z" />
                </svg>
                <span>My Course</span>
              </span>
            </li>

            <li
              onClick={() => handleItemClick('postcourse')}
              className={`hover:bg-gray-700 p-2 rounded-lg transition duration-300 cursor-pointer ${
                activeItem === 'postcourse' ? 'bg-gray-700' : ''
              }`}
              aria-label="Post Course"
            >
              <span className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-400"
                >
                  <path d="M4 4h16v16H4z" />
                </svg>
                <span>Post Course</span>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <ul className="space-y-3 text-sm">
            <li className="hover:bg-gray-700 p-2 rounded-lg transition duration-300 cursor-pointer">
              <span className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-400"
                >
                  <path d="M4 4h16v16H4z" />
                </svg>
                <span>Settings</span>
              </span>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded-lg transition duration-300 cursor-pointer">
              <span className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-400"
                >
                  <path d="M4 4h16v16H4z" />
                </svg>
                <span>Login</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 bg-gray-100 p-5 overflow-y-auto">
        {activeItem === 'postcourse' && <PostCourse />}
        {activeItem === 'mycourse' && <MyCourse />}
        {activeItem === 'profile' && <Profile />}
      </div>
    </div>
  );
};

export default Sidebar;
