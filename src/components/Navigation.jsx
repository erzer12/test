import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineContacts } from 'react-icons/ai';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-xl font-bold">
              <AiOutlineHome className="h-6 w-6 mr-2" />
              MyApp
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-150 ease-in-out"
              >
                <AiOutlineHome className="h-5 w-5 mr-2" />
                Home
              </Link>
              <Link
                to="/about"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-150 ease-in-out"
              >
                <AiOutlineUser className="h-5 w-5 mr-2" />
                About
              </Link>
              <Link
                to="/projects"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-150 ease-in-out"
              >
                <AiOutlineProject className="h-5 w-5 mr-2" />
                Projects
              </Link>
              <Link
                to="/contact"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-150 ease-in-out"
              >
                <AiOutlineContacts className="h-5 w-5 mr-2" />
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              <AiOutlineHome className="h-5 w-5 mr-2" />
              Home
            </Link>
            <Link
              to="/about"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              <AiOutlineUser className="h-5 w-5 mr-2" />
              About
            </Link>
            <Link
              to="/projects"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              <AiOutlineProject className="h-5 w-5 mr-2" />
              Projects
            </Link>
            <Link
              to="/contact"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-150 ease-in-out"
              onClick={toggleMenu}
            >
              <AiOutlineContacts className="h-5 w-5 mr-2" />
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}