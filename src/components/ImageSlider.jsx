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
 * Example Usage:
 * <ImageSlider images={["/image1.jpg", "/image2.jpg", "/image3.jpg"]} />
 */
const ImageSlider = ({ images }) => {
  // State to track the currently displayed image index.
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Advances the slider to the next image.
   * 
   * Logic:
   * - The `currentIndex` state holds the index of the currently visible image.
   * - When the "Next" button is clicked, the index is incremented by 1.
   * - The modulo operator (`%`) is used to wrap around to the first image if the index exceeds the length of the array.
   * 
   * Steps:
   * 1. `prevIndex` contains the current index of the image being displayed.
   * 2. `(prevIndex + 1)` increments the index to point to the next image.
   * 3. `% images.length` ensures that when we reach the last image, it wraps back to the first.
   */
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  /**
   * Moves the slider to the previous image.
   * 
   * Logic:
   * - The `currentIndex` state is decremented by 1 when the "Previous" button is clicked.
   * - If `currentIndex` is 0 (the first image), adding `images.length` ensures it wraps around to the last image.
   * - The modulo operator ensures the value stays within bounds.
   * 
   * Steps:
   * 1. `prevIndex` contains the current index of the image being displayed.
   * 2. `(prevIndex - 1 + images.length)` ensures that when we are at the first image, the index wraps around to the last image.
   * 3. `% images.length` ensures the index is valid within the array bounds.
   */
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-2/3 mx-auto  overflow-hidden hidden md:block mt-10 top-44">
      {/* Previous Button: Moves to the previous image in the slider */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-gray-700 text-3xl"
        onClick={prevSlide}
      >
        <FaArrowCircleLeft />
      </button>

      {/* Slider: Displays the images horizontally in a sliding container */}
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            {/* Image: Each image fills the full width of the container */}
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto  max-h-[1000px] object-cover" />
          </div>
        ))}
      </div>

      {/* Next Button: Moves to the next image in the slider */}
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
