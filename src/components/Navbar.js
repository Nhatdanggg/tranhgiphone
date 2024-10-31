import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-3xl font-bold text-blue-600">TechNews</h1>
        </div>

        {/* Navigation Menu */}
        <ul className="flex space-x-8">
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Home</li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Hot Topics</li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Trending</li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Latest</li>
        </ul>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="text-gray-600" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
