import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav className={`sticky top-0 w-full py-4 z-50 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white/10'} backdrop-blur-md`}>
      <div className="container mx-auto px-4 relative">
        {/* Dark mode toggle button at top right */}
        <button
          onClick={toggleDarkMode}
          className="absolute top-0 right-0 mt-2 mr-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-50"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white dark:text-yellow-300">
            Bahabelom G.
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black bg-white hover:text-blue-200 transition-colors order-first"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6">
            <Link to="/" className="text-white dark:text-yellow-300 hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white dark:text-yellow-300 hover:text-blue-200 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-white dark:text-yellow-300 hover:text-blue-200 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-white dark:text-yellow-300 hover:text-blue-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`$${isOpen ? 'flex' : 'hidden'} md:hidden flex-col gap-4 mt-4 animate-fade-in-down`}
        >
          <Link
            to="/"
            className="text-white dark:text-yellow-300 hover:text-blue-200 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white dark:text-yellow-300 hover:text-blue-200 transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white dark:text-yellow-300 hover:text-blue-200 transition-colors"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white dark:text-yellow-300 hover:text-blue-200 transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;