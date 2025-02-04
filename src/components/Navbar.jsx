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
    <nav className="bg-customBlue text-customWhite py-2 fixed top-0 w-full z-50 shadow-lg">
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

        {/* Desktop Navigation (Large & XL Screens) */}
        <ul className="hidden lg:flex space-x-6">
          {["Home", "Contact", "Team", "Fixtures", "Highlights", "Merch"].map(
            (item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                  className={({ isActive }) =>
                    isActive
                      ? "bg-customWhite text-customRed font-bold py-2 px-4 rounded text-lg"
                      : "bg-customRed text-customWhite font-medium py-2 px-4 rounded text-lg hover:bg-customWhite hover:text-customRed transition-all"
                  }
                >
                  {item}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Hamburger Button (Medium & Small Screens) */}
        <div className="lg:hidden">
          <button onClick={handleToggle} className="text-white focus:outline-none">
            {/* SVG Icon toggles dynamically */}
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
      </div>

      {/* Mobile Navigation Menu (Shows when isOpen is true) */}
      <div
        className={`lg:hidden bg-customBlue transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {["Home", "Contact", "Team", "Fixtures", "Highlights", "Merch"].map(
            (item) => (
              <li key={item} className="w-full text-center">
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // ✅ Fixed Home Route
                  onClick={handleClose}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-customWhite text-customRed font-bold py-2 px-6 block rounded text-lg"
                      : "bg-customRed text-customWhite font-medium py-2 px-6 block rounded text-lg hover:bg-customWhite hover:text-customRed transition-all"
                  }
                >
                  {item}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
