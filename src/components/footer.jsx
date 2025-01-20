import React from 'react';

const Footer = () => {
  return (
    <div className="bg-customBlue py-5 relative top-40">
      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 px-8">
        {/* Social Media Section */}
        <div className="text-center">
          <h2 className="text-2xl text-customWhite mb-6">Find us on</h2>
          <div className="flex justify-center gap-8 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=100094929144838"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./icons/facebook.png"
                alt="Facebook"
                className="h-10 w-10"
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
                className="h-10 w-10"
              />
            </a>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="text-center">
          <h2 className="text-2xl text-customWhite mb-1">Quick Links</h2>
          <ul className="text-customWhite text-xl">            
            <li className="py-1">
              <a href="/" target="_blank" className="hover:underline">
                Support Us
              </a>
            </li>
            <li className="py-1">
              <a href="https://www.google.com/maps/dir//Pencaitland+Road,+Haddington+EH41+4DT/@55.9532291,-2.8696744,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4887a659080513a7:0xbe3a534430329099!2m2!1d-2.7873309!2d55.9533179?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="hover:underline">
                Join us @Address :Knox Academy, Pencaitland Road, Haddington EH41 4DT
              </a>
            </li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center">
        <p className="text-sm text-customWhite">
          &copy; {new Date().getFullYear()} Haddington Brewers Basketball Club. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
