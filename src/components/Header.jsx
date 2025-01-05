import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-yellow-300">
            diifferA
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="#home" className="hover:text-yellow-300">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-300">
            About
          </a>
          <a href="#services" className="hover:text-yellow-300">
            Services
          </a>
          <a href="#contact" className="hover:text-yellow-300">
            Contact
          </a>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700">
            🔍
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            id="menu-button"
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className="md:hidden bg-purple-600 py-2 px-4 hidden" id="mobile-menu">
        <a href="#home" className="block py-2 hover:text-yellow-300">
          Home
        </a>
        <a href="#about" className="block py-2 hover:text-yellow-300">
          About
        </a>
        <a href="#services" className="block py-2 hover:text-yellow-300">
          Services
        </a>
        <a href="#contact" className="block py-2 hover:text-yellow-300">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;