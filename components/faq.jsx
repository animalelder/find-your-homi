"use client";

import Image from "next/image";
import { useState } from "react";

const Faq = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 text-center md:mb-0 md:text-left">
          <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
          <p className="mx-auto w-4/6 text-gray-600 md:mx-0">
            Find answers to common questions about Estatein's services, property
            listings, and the real estate process. We're here to provide clarity
            and assist you every step of the way.
          </p>
        </div>
        <button className="w-64 cursor-pointer rounded-lg border border-gray-800 bg-white px-4 py-2 hover:bg-primary hover:text-white">
          View All FAQ’s
        </button>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-800 p-6">
          <h4 className="mb-2 text-lg font-semibold">
            How do I search for properties on HOMI?
          </h4>
          <p className="mb-4 text-gray-600">
            Learn how to use our user-friendly search tools to find properties
            that match your criteria.
          </p>
          <button className="rounded-lg border border-gray-800 bg-white px-4 py-2 hover:bg-primary hover:text-white">
            Read More
          </button>
        </div>
        <div className="rounded-lg border border-gray-800 p-6">
          <h4 className="mb-2 text-lg font-semibold">
            What documents do I need to sell my property through HOMI?
          </h4>
          <p className="mb-4 text-gray-600">
            Find out about the necessary documentation for listing your property
            with us.
          </p>
          <button className="rounded-lg border border-gray-800 bg-white px-4 py-2 hover:bg-primary hover:text-white">
            Read More
          </button>
        </div>
        <div className="rounded-lg border border-gray-800 p-6">
          <h4 className="mb-2 text-lg font-semibold">
            How can I contact an Landlord?
          </h4>
          <p className="mb-4 text-gray-600">
            Discover the different ways you can get in touch with our
            experienced agents.
          </p>
          <button className="rounded-lg border border-gray-800 bg-white px-4 py-2 hover:bg-primary hover:text-white">
            Read More
          </button>
        </div>
      </div>
      <hr className="mb-4 border border-gray-700" />
      <div className="flex items-center justify-between">
        <p className="text-gray-600">{`${currentPage} of 10`}</p>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="rounded-full border border-gray-800 bg-white p-2 hover:bg-primary hover:text-white"
          >
            <Image
              src="assets/icons/rightArrow.png"
              width={41}
              height={41}
              alt="Previous"
              className="h-6 w-6"
            />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full border border-gray-800 bg-white p-2 hover:bg-primary hover:text-white"
          >
            <Image
              src="assets/icons/leftArrow.png"
              width={41}
              height={41}
              alt="Next"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
