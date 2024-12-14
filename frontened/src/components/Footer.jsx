import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const FooterSection = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h2 className="text-red-500 text-xl font-bold mb-4">takeUforward</h2>
          <p className="mb-4">
            The best place to learn data structures, algorithms, most asked coding interview questions, and real interview experiences free of cost.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-xing"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div>
          <h3 className="text-red-500 text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-white">Cancellation / Refund Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-red-500 text-lg font-semibold mb-4">Quick Access</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Striver's DSA Sheet</a></li>
            <li><a href="#" className="hover:text-white">Striver's DSA Playlist</a></li>
            <li><a href="#" className="hover:text-white">CS Subjects</a></li>
            <li><a href="#" className="hover:text-white">Striver's CP Sheet</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-red-500 text-lg font-semibold mb-4">DSA Playlists</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Array Series</a></li>
            <li><a href="#" className="hover:text-white">Graph Series</a></li>
            <li><a href="#" className="hover:text-white">DP Series</a></li>
            <li><a href="#" className="hover:text-white">LinkedList Series</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12 text-sm text-gray-600">
        Copyright &copy; 2024 takeUforward | All rights reserved
      </div>
    </footer>
  );
};

export default FooterSection; // Corrected export statement
