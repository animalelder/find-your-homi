"use client";

import Image from "next/image";
import { useState } from "react";
import { NavBar } from "./nav-bar";

const PropertyDetailHeader = () => {
  const images = [
    "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/metro_haven/1.png",
    "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/metro_haven/2.png",
    "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/metro_haven/3.png",
    "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/metro_haven/4.png",
    "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/metro_haven/5.png",
    "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/metro_haven/6.png",
    "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/metro_haven/7.png",
    "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/metro_haven/8.png",
    "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/metro_haven/9.png",
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
    <div
      className="relative min-h-[950px] bg-contain bg-bottom"
      style={{
        backgroundImage: `url('https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/property/detail_bg.png')`,
        backgroundClip: "border-box",
        backgroundSize: "cover",
        backdropFilter: "blur(70px)",
      }}
    >
      <div className="relative w-full" aria-label="Property Detail Background">
        {/* Navbar */}
        <div className="absolute left-0 top-[-2] z-10 w-full px-4 sm:px-12">
          <NavBar />
        </div>

        {/* Content Wrapper */}
        {/* Content Wrapper */}
        <div className="absolute left-1/2 mx-auto my-52 flex min-w-[80%] max-w-7xl -translate-x-1/2 transform flex-col items-center justify-center rounded-lg bg-white p-6 shadow-2xl">
          {/* Upper Carousel */}
          <div className="flex items-center justify-center space-x-2 rounded-xl border border-gray-700 p-3">
            <div className="flex w-full max-w-3xl space-x-2 overflow-hidden">
              {images
                .slice(carouselIndex, carouselIndex + 9)
                .map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    width={190}
                    height={124}
                    alt="Carousel Item"
                    className="h-32 w-32 cursor-pointer rounded object-contain hover:opacity-80" // Updated sizes
                    onClick={() => handleImageClick(image)}
                  />
                ))}
            </div>
          </div>

          {/* Middle Section */}
          <div className="mt-12 flex items-center justify-center space-x-4">
            {selectedImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={963}
                height={767}
                alt="Selected Item"
                className="max-h-96 max-w-96 rounded object-contain shadow-lg" // Updated sizes
              />
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <button onClick={handlePrev} className="p-2">
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//back_button.png"
                width={77}
                height={77}
                alt="Previous"
                className="h-8 w-8"
              />
            </button>
            <Image
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//indicator.png"
              alt="Indicator"
              width={185}
              height={7}
              className="hidden md:block"
            />
            <button onClick={handleNext} className="p-2">
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//forward_button.png"
                width={77}
                height={77}
                alt="Next"
                className="h-8 w-8"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailHeader;
