import Navbar from '@/components/navbar';
import React, { useState } from 'react';

const PropertyDetailHeader = () => {
  const images = [
    '/property1.png',
    '/property2.png',
    '/property3.png',
    '/rental1.png',
    '/rental2.png',
    '/rental3.png',
    '/rental1.png',
    '/rental2.png',
    '/rental3.png'
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState([images[0], images[1]]);

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = (image) => {
    setSelectedImages((prev) => {
      if (prev.includes(image)) return prev;
      return [prev[1], image];
    });
  };

  return (
    <div className="relative">
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url('/propertyDetail_bg.png')` }}
        aria-label="Property Detail Background"
      >
        {/* Navbar */}
        <div className="absolute top-[-2] left-0 w-full px-4 sm:px-12 z-10">
          <Navbar />
        </div>

        {/* Content Wrapper */}
       {/* Content Wrapper */}
<div className="bg-white rounded-lg shadow-2xl p-6 mt-32 mx-auto w-[80%] max-w-7xl absolute left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center">

        {/* Upper Carousel */}
<div className="flex justify-center items-center p-3 space-x-2 border border-gray-700 rounded-xl">
  <div className="flex overflow-hidden space-x-2 w-full max-w-3xl">
    {images.slice(carouselIndex, carouselIndex + 9).map((image, index) => (
      <img
        key={index}
        src={image}
        alt="Carousel Item"
        className="w-32 h-32 rounded cursor-pointer hover:opacity-80" // Updated sizes
        onClick={() => handleImageClick(image)}
      />
    ))}
  </div>
</div>

{/* Middle Section */}
<div className="flex justify-center items-center mt-12 space-x-4">
  {selectedImages.map((image, index) => (
    <img
      key={index}
      src={image}
      alt="Selected Item"
      className="w-96 h-96 rounded shadow-lg" // Updated sizes
    />
  ))}
</div>

          {/* Bottom Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button onClick={handlePrev} className="p-2">
              <img src='/back_button.png' alt="Previous" className="w-8 h-8" />
            </button>
            <img src='/indicator.png' alt="Indicator" className='hidden md:block' />
            <button onClick={handleNext} className="p-2">
              <img src='/forward_button.png' alt="Next" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailHeader;
