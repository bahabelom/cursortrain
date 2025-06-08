import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 w-full bg-white/10 backdrop-blur-md py-4 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
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
            <Link to="/" className="text-white hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-blue-200 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-blue-200 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:hidden flex-col gap-4 mt-4 animate-fade-in-down`}
        >
          <Link
            to="/"
            className="text-white hover:text-blue-200 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-200 transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-blue-200 transition-colors"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-200 transition-colors"
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