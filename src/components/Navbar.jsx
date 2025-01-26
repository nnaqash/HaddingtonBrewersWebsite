import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle menu open/close
  };

  const handleClose = () => {
    setIsOpen(false); // Close menu when clicking a link
  };

  return (
    <nav className="bg-customBlue text-customWhite py-2 fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" onClick={handleClose}>
            <img
              src="./images/logo.png"
              alt="Club logo"
              className="w-16 h-16 rounded-full cursor-pointer"
            />
          </NavLink>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none"
          >
            {/* SVG Icon changes dynamically */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // Close icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-customBlue md:bg-transparent flex flex-col md:flex-row items-center transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* Menu Links */}
          <li className="w-full md:w-auto">
            <NavLink
              to="/"
              onClick={handleClose}
              className={({ isActive }) =>
                isActive
                  ? "bg-customWhite text-customRed font-bold py-2 px-4 block rounded text-lg"
                  : "bg-customRed text-customWhite font-medium py-2 px-4 block hover:bg-customWhite hover:text-customRed rounded text-lg"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="w-full md:w-auto">
            <NavLink
              to="/Contact"
              onClick={handleClose}
              className={({ isActive }) =>
                isActive
                  ? "bg-customWhite text-customRed font-bold py-2 px-4 block rounded text-lg"
                  : "bg-customRed text-customWhite font-medium py-2 px-4 block hover:bg-customWhite hover:text-customRed rounded text-lg"
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="w-full md:w-auto">
            <NavLink
              to="/Team"
              onClick={handleClose}
              className={({ isActive }) =>
                isActive
                  ? "bg-customWhite text-customRed font-bold py-2 px-4 block rounded text-lg"
                  : "bg-customRed text-customWhite font-medium py-2 px-4 block hover:bg-customWhite hover:text-customRed rounded text-lg"
              }
            >
              Team
            </NavLink>
          </li>
          <li className="w-full md:w-auto">
            <NavLink
              to="/Fixtures"
              onClick={handleClose}
              className={({ isActive }) =>
                isActive
                  ? "bg-customWhite text-customRed font-bold py-2 px-4 block rounded text-lg"
                  : "bg-customRed text-customWhite font-medium py-2 px-4 block hover:bg-customWhite hover:text-customRed rounded text-lg"
              }
            >
              Fixtures
            </NavLink>
          </li>
          <li className="w-full md:w-auto">
            <NavLink
              to="/Highlights"
              onClick={handleClose}
              className={({ isActive }) =>
                isActive
                  ? "bg-customWhite text-customRed font-bold py-2 px-4 block rounded text-lg"
                  : "bg-customRed text-customWhite font-medium py-2 px-4 block hover:bg-customWhite hover:text-customRed rounded text-lg"
              }
            >
              Highlights
            </NavLink>
          </li>
          <li className="w-full md:w-auto">
            <NavLink
              to="/Merch"
              onClick={handleClose}
              className={({ isActive }) =>
                isActive
                  ? "bg-customWhite text-customRed font-bold py-2 px-4 block rounded text-lg"
                  : "bg-customRed text-customWhite font-medium py-2 px-4 block hover:bg-customWhite hover:text-customRed rounded text-lg"
              }
            >
              Merch
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
