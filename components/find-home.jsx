"use client";

import Image from "next/image";
import { useState } from "react";

const FindHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const listings = [
    {
      bg: "assets/home1.png",
      title: "Apartment in Toronto",
      description: "Region Home apartment",
      price: "$5,300/m",
    },
    {
      bg: "assets/home2.png",
      title: "Condo in Toronto",
      description: "Resource Home apartment",
      price: "$8,500/m",
    },
    {
      bg: "assets/home3.png",
      title: "Condo in Toronto",
      description: "Region Home apartment",
      price: "$5,300/m",
    },
  ];

  return (
    <div className="bg-primaryLight px-4 py-8">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Find your Home with <span className="text-primaryGreen">homi</span>
        </h2>
        <p className="mb-6 w-full text-center text-gray-600 md:w-[1020px]">
          Discover the ease of finding your perfect space with Homi. Whether
          you&apos;re searching for a cozy apartment or the ideal roommate, our
          platform connects you with trusted listings, tailored matches, and
          seamless communication—all in one place. Your next home is just a few
          clicks away!
        </p>
        <button className="mb-8 rounded-full bg-buttonRed px-6 py-2 text-white">
          Browse Now
        </button>
      </div>

      {/* Display Listings */}
      <div className="flex flex-wrap items-center justify-center gap-5">
        {listings.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)} // Set active index when image is clicked
            className={`relative w-full cursor-pointer overflow-hidden rounded-2xl bg-cover bg-center shadow-md sm:w-[320px] md:w-[320px] lg:w-[320px]`}
            style={{
              backgroundImage: `url(${item.bg})`,
              height: "400px",
            }}
          >
            <Image
              src="assets/livelisting/badge.png"
              alt="Live Listing"
              width={249}
              height={43}
              className="absolute left-4 top-[-60px] h-48 w-48 object-contain"
            />
            <div className="absolute bottom-4 left-1/2 w-[90%] -translate-x-1/2 transform rounded-2xl bg-white p-4">
              <p className="font-semibold">{item.title}</p>
              <span className="block text-sm text-gray-600">
                {item.description}
              </span>
              <span className="block font-bold">{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Dots */}
      <div className="mt-4 flex justify-center">
        {listings.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`mx-2 h-3 w-3 rounded-full ${activeIndex === index ? "bg-primaryGreen" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FindHome;
