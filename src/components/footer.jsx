import React from 'react';

const Footer = () => {
  return (
    <div className="bg-customBlue py-10">
      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 px-8">
        {/* Social Media Section */}
        <div className="text-center">
          <h2 className="text-5xl text-customWhite mb-6">Find us on</h2>
          <div className="flex justify-center gap-8 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=100094929144838"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./icons/facebook.png"
                alt="Facebook"
                className="h-20 w-20"
              />
            </a>
            <a
              href="https://www.instagram.com/haddingtonbrewersbasketball/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./icons/instagram.png"
                alt="Instagram"
                className="h-20 w-20"
              />
            </a>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="text-center">
          <h2 className="text-5xl text-customWhite mb-6">Quick Links</h2>
          <ul className="text-customWhite text-4xl">
            <li className="py-3">
              <a href="/" target="_blank" className="hover:underline">
                Join Us
              </a>
            </li>
            <li className="py-3">
              <a href="/" target="_blank" className="hover:underline">
                Support Us
              </a>
            </li>
            <li className="py-3">
              <a href="/" target="_blank" className="hover:underline">
                Address
              </a>
            </li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="w-48 h-48 rounded-full"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10">
        <p className="text-2xl text-customWhite">
          &copy; {new Date().getFullYear()} Haddington Brewers Basketball Club. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
