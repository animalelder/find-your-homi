"use client";

import Image from "next/image";

const RentalDetail = () => {
  // Options for different features
  const laundryOptions = ["In-Unit", "On-site", "None"];
  const petOptions = ["Yes", "No"];
  const leaseOptions = ["Short-term", "Long-term", "Month-to-month"];
  const genderOptions = ["male", "female", "non-binary"];
  const smokingOptions = ["smoking", "non-smoking"];
  const securityOptions = ["gate", "concierge", "camera"];
  const outdoorOptions = ["balcony", "patio", "yard"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };

  return (
    <div>
      <div className="grid min-h-fit grid-flow-row space-y-7 bg-gradient-to-b from-white/60 from-10% via-emerald-400/45 via-50% to-white to-90% p-4 sm:p-6 lg:p-8">
        <div className="my-12 flex flex-col lg:flex-row">
          <div className="p-4 lg:w-1/4">
            <p className="text-[10px] text-black">Listing Price</p>
            <p className="text-2xl font-bold text-gray-900">$1,250</p>
          </div>

          <div className="flex flex-col space-y-10 lg:w-3/4">
            {/* Rental Details Section */}
            <div className="space-y-20 rounded-xl border border-gray-700 bg-white/40 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Rental Details</h3>
                <button className="cursor-pointer rounded-lg border border-gray-700 bg-white px-4 py-2 transition duration-300 hover:bg-primary hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">Bedrooms</p>
                  <p className="font-medium text-gray-900">04</p>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">Bathrooms</p>
                    <p className="font-medium text-gray-900">03</p>
                  </div>
                </div>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">Square Feet</p>
                  <p className="font-medium text-gray-900">05</p>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">Laundry</p>
                    <div className="flex flex-wrap gap-2">
                      {laundryOptions.map((option, index) => (
                        <p
                          key={index}
                          className="rounded-full border border-gray-700 bg-white px-4 py-2 text-black transition duration-300 hover:bg-primary hover:text-white"
                        >
                          {option}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div>
                <p className="text-sm text-black">Pet friendly</p>
                <div className="flex flex-wrap gap-2">
                  {petOptions.map((option, index) => (
                    <p
                      key={index}
                      className="rounded-full border border-gray-700 bg-white px-4 py-2 text-black transition duration-300 hover:bg-primary hover:text-white"
                    >
                      {option}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Lease Details Section */}
            <div className="space-y-14 rounded-xl border border-gray-700 bg-white/40 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Lease Details</h3>
                <button className="cursor-pointer rounded-lg border border-gray-700 bg-white px-4 py-2 transition duration-300 hover:bg-primary hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">Move in Date</p>
                  <div className="flex space-x-2">
                    <p className="font-medium text-gray-900">MM/DD/YYYY</p>
                    <p className="rounded-2xl border border-gray-800 bg-white px-4 py-2">
                      Available January 30 2025
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col space-y-1">
                  <p className="text-black">Leasing Type</p>
                  <div className="flex flex-wrap gap-2">
                    {leaseOptions.map((option, index) => (
                      <p
                        key={index}
                        className="cursor-pointer rounded-full border border-gray-700 bg-white px-4 py-2 hover:bg-primary"
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Room Matching Section */}
            <div className="space-y-12 rounded-xl border border-gray-700 bg-white/40 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Room Matching</h3>
                <button className="cursor-pointer rounded-lg border border-gray-700 bg-white px-4 py-2 transition duration-300 hover:bg-primary hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">
                    Roommate Gender Preference
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {genderOptions.map((option, index) => (
                      <p
                        key={index}
                        className="rounded-full border border-gray-700 bg-white px-4 py-2 text-black transition duration-300 hover:bg-primary hover:text-white"
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">Smoking preference</p>
                    <div className="flex flex-wrap gap-2">
                      {smokingOptions.map((option, index) => (
                        <p
                          key={index}
                          className="rounded-full border border-gray-700 bg-white px-4 py-2 text-black transition duration-300 hover:bg-primary hover:text-white"
                        >
                          {option}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">Deposit Payment</p>
                  <div className="flex space-x-2">
                    <p className="font-medium text-gray-900">$500</p>
                    <p className="rounded-2xl border border-gray-800 bg-white px-4 py-2">
                      20%
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">
                      Credit Check/Background Check
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <p className="rounded-full border border-gray-700 bg-white px-4 py-2 text-black transition duration-300 hover:bg-primary hover:text-white">
                        Approved
                      </p>
                      <p className="rounded-full border border-gray-700 bg-white px-4 py-2 text-black transition duration-300 hover:bg-primary hover:text-white">
                        Denied
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Building Features Section */}
            <div className="space-y-16 rounded-xl border border-gray-700 bg-white/40 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Building Features</h3>
                <button className="cursor-pointer rounded-lg border border-gray-700 bg-white px-4 py-2 transition duration-300 hover:bg-primary hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">Security Feature</p>
                  <div className="flex flex-wrap gap-2">
                    {securityOptions.map((option, index) => (
                      <p
                        key={index}
                        className="rounded-full border border-gray-700 bg-white px-4 py-2 text-black transition duration-300 hover:bg-primary hover:text-white"
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">Utilities included</p>
                    <div className="flex flex-wrap gap-2">
                      {securityOptions.map((option, index) => (
                        <p
                          key={index}
                          className="rounded-full border border-gray-700 bg-white px-4 py-2 text-black transition duration-300 hover:bg-primary hover:text-white"
                        >
                          {option}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">Outdoor space</p>
                  <div className="flex flex-wrap gap-2">
                    {outdoorOptions.map((option, index) => (
                      <p
                        key={index}
                        className="rounded-full border border-gray-700 bg-white px-4 py-2 text-black transition duration-300 hover:bg-primary hover:text-white"
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">Property Insurance</p>
                    <div className="flex space-x-2">
                      <p className="font-medium text-gray-900">$100</p>
                      <p className="rounded-2xl border border-gray-800 bg-white px-4 py-2">
                        Approximate monthly cost
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* down form */}
        <div className="flex w-[1168px] justify-between place-self-center backdrop-blur-xl">
          {/* Left Section */}
          <div className="lg:w-1/3">
            <h3 className="mb-4 text-4xl font-bold tracking-wider text-gray-950">
              Inquire About Metropolitan Haven
            </h3>
            <p className="mb-6 tracking-wide text-black">
              Interested in this property? Fill out the form below, and our real
              estate experts will get back to you with more details, including
              scheduling a viewing and answering any questions you may have.
            </p>
            <button
              className="-ml-28 hidden opacity-65 hover:opacity-100 md:mt-32 md:block"
              onClick={scrollToTop}
            >
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/icons/upArrow.png"
                width={148}
                height={148}
                alt="Arrow"
                className="h-12 w-12"
              />
            </button>
          </div>

          {/* Right Section - Form */}
          <div className="lg:w-1/2">
            <form action="" className="space-y-6 p-9">
              {/* Name Fields */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="fname"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    placeholder="Enter first name"
                    className="w-full rounded-md border border-gray-800 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="Lname"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="Lname"
                    placeholder="Enter last name"
                    className="w-full rounded-md border border-gray-800 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Email and Phone Fields */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-gray-800 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter phone number"
                    className="w-full rounded-md border border-gray-800 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Property Selection */}
              <div>
                <p className="mb-2 text-sm font-bold text-black">
                  Selected property
                </p>
                <select
                  name="property"
                  id="property"
                  className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Downtown Condo, Toronto Canada">
                    Metropolitan Haven
                  </option>
                  <option value="Mansion in Regina. Canada">
                    Mansion in Regina. Canada
                  </option>
                  <option value="Apartment in Toronto">
                    Apartment in Toronto
                  </option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message here"
                  className="w-full rounded-md border border-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  rows="4"
                ></textarea>
              </div>

              {/* Terms and Submit Button */}
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 rounded border border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-black">
                    I agree with Terms of Use and Privacy Policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-6 py-2 text-sm text-black transition duration-300 hover:bg-[#1aa71a] sm:w-auto"
                >
                  Send Your Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <iframe
          width="100%"
          height="500"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Toronto%20canada+(homi%20apartment%20rental)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps map</a>
        </iframe>
      </div>
    </div>
  );
};

export default RentalDetail;
