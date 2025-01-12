import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineCustomerService, AiOutlineContacts } from 'react-icons/ai';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FaCode className="text-2xl text-blue-500" />
            <span className="text-white text-xl font-bold hover:text-blue-500 transition duration-300">
              Nagarik Electronics
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-white hover:text-blue-500 transition duration-300"
            >
              <AiOutlineHome className="text-xl" />
              <span>Home</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center space-x-2 text-white hover:text-blue-500 transition duration-300"
            >
              <AiOutlineUser className="text-xl" />
              <span>About</span>
            </Link>
            <Link 
              to="/services" 
              className="flex items-center space-x-2 text-white hover:text-blue-500 transition duration-300"
            >
              <AiOutlineCustomerService className="text-xl" />
              <span>Services</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center space-x-2 text-white hover:text-blue-500 transition duration-300"
            >
              <AiOutlineContacts className="text-xl" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-500 focus:outline-none"
            >
              {!isOpen ? (
                <RiMenu3Line className="h-6 w-6" />
              ) : (
                <RiCloseLine className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-blue-500 hover:bg-gray-800 px-3 py-2 rounded-md transition duration-300"
            >
              <AiOutlineHome className="text-xl" />
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 text-white hover:text-blue-500 hover:bg-gray-800 px-3 py-2 rounded-md transition duration-300"
            >
              <AiOutlineUser className="text-xl" />
              <span>About</span>
            </Link>
            <Link
              to="/services"
              className="flex items-center space-x-2 text-white hover:text-blue-500 hover:bg-gray-800 px-3 py-2 rounded-md transition duration-300"
            >
              <AiOutlineCustomerService className="text-xl" />
              <span>Services</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-2 text-white hover:text-blue-500 hover:bg-gray-800 px-3 py-2 rounded-md transition duration-300"
            >
              <AiOutlineContacts className="text-xl" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;