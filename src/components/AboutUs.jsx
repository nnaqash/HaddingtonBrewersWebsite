import React from "react";
import ImageSlider from "./ImageSlider";

const AboutUs = () => {
  const images = [
    "./images/slider.png",
    "./images/slider2.png",
    "./images/slider3.png",
  ];

  return (
    <div className="bg-customBlue text-customWhite m-5 text-center">
      {/* Small & Medium Screens: Image on top, text below */}
      <div className="flex flex-col lg:hidden">
        {/* Static Image for small & medium screens */}
        <div className="w-full">
          <img
            src="./images/cover.jpg"
            alt="Basketball Team"
            className="w-full max-h-[500px] object-contain"
          />
        </div>
        <div className="px-6 py-6">
          <ContentSection />
        </div>
      </div>

      {/* Large Screens: Slider on top, text below */}
      <div className="hidden lg:flex flex-col xl:hidden">
        <div className="w-full">
          <ImageSlider images={images} />
        </div>
        <div className="px-6 py-6">
          <ContentSection />
        </div>
      </div>

      {/* Extra Large Screens: Side-by-side layout */}
      <div className="hidden xl:flex flex-row items-center">
        {/* Image Slider on the left */}
        <div className="w-1/2 p-4">
          <ImageSlider images={images} />
        </div>
        {/* Text Content on the right */}
        <div className="w-1/2 px-6 py-6">
          <ContentSection />
        </div>
      </div>
    </div>
  );
};

/* Extracted ContentSection for cleaner code */
const ContentSection = () => (
  <p className="text-lg md:text-xl leading-loose text-center">
    <strong className="text-3xl md:text-4xl">
      The Haddington Brewers Basketball 🏀
    </strong>
    <br />
    <br />
    <strong className="text-2xl md:text-3xl">Who are we?</strong>
    <br />
    We are a community-run senior men’s basketball club based in Haddington and
    competing in the Lothian Basketball Association's Lothian League (Senior
    Men’s Div 4). We started as a group of guys who met weekly at Knox Academy
    to enjoy recreational basketball. Through connections with players in other
    teams, we began arranging friendly matches against teams such as Boroughmuir
    Blaze and Gracemount Panthers. From this, the Haddington Brewers were born.
    In 2023, we registered as an official club and entered the 23/24 Lothian
    League.
    <br />
    <br />
    <strong className="text-2xl md:text-3xl">Our Aim</strong>
    <br />
    We want to create an opportunity for basketball to flourish in East Lothian.
    The community aspect is essential to us. We welcome people of all abilities
    to join. Our goal is to grow as a team and foster a love for the game.
    <br />
    <br />
    Our training sessions are every Thursday at 20:00 - 21:30 (depending on
    school holidays).
    <br />
    Join us @ Address: Knox Academy, Pencaitland Road, Haddington EH41 4DT.
    <br />
    <a
      href="https://www.google.com/maps/dir//Pencaitland+Road,+Haddington+EH41+4DT/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Get Directions
    </a>
  </p>
);

export default AboutUs;
