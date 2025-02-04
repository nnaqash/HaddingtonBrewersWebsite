import React, { useState, useEffect } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

/**
 * ImageSlider Component
 * A React component to display an image carousel slider with automatic looping.
 * 
 * Props:
 * - images: Array of image URLs to display in the slider.
 * 
 * Features:
 * - Automatically slides every 4 seconds (configurable).
 * - Loops infinitely.
 * - Adjusted width and height for better display.
 * - Works with manual navigation (Previous & Next buttons).
 */
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Adjust delay if needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Manual next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Manual previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative hidden md:block w-full md:w-5/6 lg:w-4/5 mx-auto overflow-hidden mt-10 h-[650px]">
      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-gray-700 text-4xl"
        onClick={prevSlide}
      >
        <FaArrowCircleLeft />
      </button>

      {/* Slider */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-[700px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-gray-700 text-4xl"
        onClick={nextSlide}
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
};

export default ImageSlider;
