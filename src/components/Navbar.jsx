import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed top-6 w-full z-50 px-10 py-6 flex justify-between items-center bg-transparent">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src="/path-to-your-logo.svg" alt="Totem Logo" className="h-8 w-auto" />
      </Link>

      {/* Right side buttons */}
      <div className="flex items-center space-x-4">
        {/* Projects button */}
        <button className="text-white hover:text-gray-300 transition-colors">
          ⋮
        </button>

        {/* Hamburger menu button */}
        <button className="text-white hover:text-gray-300 transition-colors">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;