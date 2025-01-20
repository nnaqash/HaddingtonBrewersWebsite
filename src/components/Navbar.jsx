import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-customBlue text-customWhite py-2 fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/">
            <img
              src="./images/logo.png"
              alt="Club logo"
              className="w-20 h-20 rounded-full cursor-pointer"
            />
          </Link>
        </div>
        {/* <h1 className='text-2xl text-center pr-9 '>Haddington Brewers Basketball Club &#127936;</h1> */}

        {/* Hamburger Menu */}
        <div className="md:hidden z-50">
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none absolute top-2 right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`md:flex space-y-4 md:space-y-0 md:space-x-12 absolute md:static top-28 left-0 w-full md:w-auto bg-customBlue md:bg-transparent flex-col md:flex-row items-center transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* Menu Items */}
          <Link to="/">
            <li
              className="bg-customRed py-2 px-4 rounded text-white font-medium hover:bg-customWhite hover:text-customRed cursor-pointer text-lg"
              onClick={handleClose}
            >
              Home
            </li>
          </Link>
          <Link to="/Contact">
            <li
              className="bg-customRed py-2 px-4 rounded text-white font-medium hover:bg-customWhite hover:text-customRed cursor-pointer text-lg"
              onClick={handleClose}
            >
              Contact
            </li>
          </Link>
          <Link to="/Team">
            <li
              className="bg-customRed py-2 px-4 rounded text-white font-medium hover:bg-customWhite hover:text-customRed cursor-pointer text-lg"
              onClick={handleClose}
            >
              Team
            </li>
          </Link>
          <Link to="/Fixtures">
            <li
              className="bg-customRed py-2 px-4 rounded text-white font-medium hover:bg-customWhite hover:text-customRed cursor-pointer text-lg"
              onClick={handleClose}
            >
              Fixtures
            </li>
          </Link>
          <Link to="/Highlights">
            <li
              className="bg-customRed py-2 px-4 rounded text-white font-medium hover:bg-customWhite hover:text-customRed cursor-pointer text-lg"
              onClick={handleClose}
            >
              Highlights
            </li>
          </Link>
          <Link to="/Merch">
            <li
              className="bg-customRed py-2 px-4 rounded text-white font-medium hover:bg-customWhite hover:text-customRed cursor-pointer text-lg"
              onClick={handleClose}
            >
              Merch
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
