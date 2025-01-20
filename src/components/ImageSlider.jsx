import React, { useState } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

/**
 * ImageSlider Component
 * A React component to display an image carousel slider.
 * 
 * Props:
 * - images: Array of image URLs to display in the slider.
 * 
 * Responsive Design:
 * - The slider adjusts its width and image height dynamically based on the screen size.
 * - Hidden on phones and visible on medium screens and above.
 * 
 * Example Usage:
 * <ImageSlider images={["/image1.jpg", "/image2.jpg", "/image3.jpg"]} />
 */
const ImageSlider = ({ images }) => {
  // State to track the currently displayed image index.
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Advances the slider to the next image.
   * Logic:
   * - The `currentIndex` is incremented by 1.
   * - The modulo operator (`%`) ensures it wraps around to the first image if the index exceeds the array length.
   */
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  /**
   * Moves the slider to the previous image.
   * Logic:
   * - The `currentIndex` is decremented by 1.
   * - Adding `images.length` ensures it wraps around to the last image if at the first image.
   */
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative hidden md:block w-full md:w-3/4 lg:w-2/3 mx-auto overflow-hidden mt-10">
      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-gray-700 text-3xl"
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
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-contain"
            />
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-gray-700 text-3xl"
        onClick={nextSlide}
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
};

export default ImageSlider;

/**
 * Example Usage:
 * <ImageSlider images={["/image1.jpg", "/image2.jpg", "/image3.jpg"]} />
 */
