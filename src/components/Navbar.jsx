import React, { useState } from 'react';

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a menu item is clicked
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-customBlue text-customWhite p-4">
      {/* Navbar container: centers the content and uses flexbox for layout */}
      <div className="container mx-auto flex items-center justify-between relative">
        
        {/* Logo Section: Always visible, aligned to the start */}
        <div className="flex items-center flex-shrink-0">
          <img src="./images/logo.png" alt="Club logo" className="w-24 h-auto" />
        </div>

        {/* Hamburger Menu: Visible only on small screens */}
        <div className="md:hidden z-50">
          <button
            onClick={handleToggle} // Toggles the menu visibility
            className="text-white focus:outline-none absolute top-4 right-4"
          >
            {/* Dynamic SVG: Changes between hamburger and close (X) icons */}
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
                // Show "X" icon when the menu is open, otherwise show hamburger
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu: Items are toggled on small screens */}
        <ul
          className={`md:flex space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-32 left-0 w-full md:w-auto bg-customBlue md:bg-transparent flex-col md:flex-row items-center transition-all duration-300 ${
            isOpen ? 'block' : 'hidden' // Show menu (block) if isOpen is true, otherwise hide (hidden)
          }`}
        >
          {/* Menu Item: Home */}
          <li
            className="bg-customRed py-3 px-8 rounded text-white font-bold hover:bg-[#800000] cursor-pointer text-4xl"
            onClick={handleClose} // Close menu after clicking
          >
            Home
          </li>

          {/* Menu Item: Contact Us */}
          <li
            className="bg-customRed py-3 px-8 rounded text-white font-bold hover:bg-customWhite hover:text-customBlue cursor-pointer text-4xl"
            onClick={handleClose} // Close menu after clicking
          >
            Contact Us
          </li>

          {/* Menu Item: Committee */}
          <li
            className="bg-customRed py-3 px-8 rounded text-white font-bold hover:bg-customWhite hover:text-customRed cursor-pointer text-4xl"
            onClick={handleClose} // Close menu after clicking
          >
            Committee
          </li>

          {/* Menu Item: Fixtures */}
          <li
            className="bg-customRed py-3 px-8 rounded text-white font-bold hover:bg-[#FFC0CB] hover:text-customBlue cursor-pointer text-4xl"
            onClick={handleClose} // Close menu after clicking
          >
            Fixtures
          </li>

          {/* Menu Item: Merch */}
          <li
            className="bg-customRed py-3 px-8 rounded text-white font-bold hover:bg-customGray hover:text-customBlue cursor-pointer text-4xl"
            onClick={handleClose} // Close menu after clicking
          >
            Merch
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
