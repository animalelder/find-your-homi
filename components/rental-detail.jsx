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
  const utilityOptions = ["electricity", "water", "gas"];
  const outdoorOptions = ["balcony", "patio", "yard"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white/60 from-5% via-emerald-400/45 via-35% to-white to-70%">
      <div className="grid h-full grid-flow-row p-4 space-y-7 sm:p-6 lg:p-8">
        <div className="flex flex-col my-12 px-28 lg:flex-row">
          <div className="p-4 lg:w-1/4">
            <h3 className="text-base font-semibold text-black">
              Listing Price
            </h3>
            <p className="mt-3 font-['Urbanist'] text-4xl font-bold text-gray-900">
              $2,500
            </p>
          </div>

          <div className="flex flex-col space-y-10 lg:w-3/4">
            {/* Rental Details Section */}
            <div className="p-4 space-y-10 border border-gray-700 rounded-xl bg-white/40">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Rental Details</h3>
                <button className="px-4 py-2 transition duration-300 bg-white border border-gray-700 rounded-lg cursor-pointer hover:bg-primary hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-3">
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
              <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-3">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm text-black">Square Feet</p>
                  <p className="font-['Urbanist'] text-lg font-semibold leading-relaxed text-gray-900">
                    2500
                  </p>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">Laundry</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {laundryOptions.map((option, index) => (
                        <p
                          key={index}
                          className={`${index === 1 ? "bg-altGreen tracking-wide text-white" : "bg-white text-black"} rounded-full border border-gray-700 px-4 py-2 transition duration-300`}
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
                <div className="flex flex-wrap gap-2 pt-2">
                  {petOptions.map((option, index) => (
                    <p
                      key={index}
                      className={`${index === 0 ? "bg-altGreen font-semibold tracking-wide text-white" : "bg-white text-black"} rounded-full border border-gray-700 px-4 py-2 transition duration-300`}
                    >
                      {option}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Lease Details Section */}
            <div className="p-4 border border-gray-700 space-y-14 rounded-xl bg-white/40">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Lease Details</h3>
                <button className="px-4 py-2 font-semibold tracking-wide transition duration-300 bg-white border border-gray-700 rounded-lg cursor-pointer hover:bg-altGreen hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="py-2 text-sm text-black">Move in Date</p>
                  <div className="flex items-center gap-2 space-x-4">
                    <p className="font-['Urbanist'] text-lg font-semibold leading-relaxed text-gray-900">
                      MM/DD/YYYY
                    </p>
                    <p className="px-4 py-2 pt-2 ml-3 bg-white border border-gray-800 text-nowrap rounded-2xl">
                      Available January 30 2025
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col space-y-1">
                  <p className="text-black">Leasing Type</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {leaseOptions.map((option, index) => (
                      <p
                        key={index}
                        className={`${index === 1 ? "bg-altGreen font-semibold tracking-wide text-white" : "bg-white text-black"} rounded-full border border-gray-700 px-4 py-2 font-semibold tracking-wide text-black transition duration-300 hover:bg-altGreen`}
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Room Matching Section */}
            <div className="p-4 space-y-12 border border-gray-700 rounded-xl bg-white/40">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  Preferences & Room Matching
                </h3>
                <button className="px-4 py-2 font-semibold tracking-wide transition duration-300 bg-white border border-gray-700 rounded-lg cursor-pointer hover:bg-altGreen hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">
                    Roommate Gender Preference
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {genderOptions.map((option, index) => (
                      <p
                        key={index}
                        className={`${index === 2 ? "bg-white text-black" : "bg-altGreen font-semibold tracking-wide text-white"} rounded-full border border-gray-700 bg-altGreen px-4 py-2 font-semibold tracking-wide`}
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
                    <div className="flex flex-wrap gap-2 pt-2">
                      {smokingOptions.map((option, index) => (
                        <p
                          key={index}
                          className={`${index === 0 ? "bg-white text-black" : "bg-altGreen font-semibold tracking-wide text-white"} rounded-full border border-gray-700 bg-altGreen px-4 py-2 font-semibold tracking-wide`}
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
                  <div className="flex items-baseline gap-2 pt-2 space-x-2">
                    <p className="font-['Urbanist'] text-lg font-semibold leading-relaxed text-gray-900">
                      $500
                    </p>
                    <p className="px-4 py-2 bg-white border border-gray-800 rounded-2xl">
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
                    <div className="flex flex-wrap gap-2 pt-2">
                      <p className="px-4 py-2 font-semibold tracking-wide text-black transition duration-300 bg-white border border-gray-700 rounded-full hover:bg-altGreen hover:text-white">
                        Approved
                      </p>
                      <p className="px-4 py-2 font-semibold tracking-wide text-black transition duration-300 bg-white border border-gray-700 rounded-full hover:bg-altGreen hover:text-white">
                        Denied
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Building Features Section */}
            <div className="p-4 space-y-16 border border-gray-700 rounded-xl bg-white/40">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  Building Features & Property Insurance
                </h3>
                <button className="px-4 py-2 font-semibold tracking-wide transition duration-300 bg-white border border-gray-700 rounded-lg cursor-pointer hover:bg-altGreen hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">Security Feature</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {securityOptions.map((option, index) => (
                      <p
                        key={index}
                        className={`${index === 1 ? "bg-white text-black" : "bg-altGreen font-semibold tracking-wide text-white"} rounded-full border border-gray-700 bg-altGreen px-4 py-2 font-semibold tracking-wide`}
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
                    <div className="flex flex-wrap gap-2 pt-2">
                      {utilityOptions.map((option, index) => (
                        <p
                          key={index}
                          className={`${index === 0 ? "bg-white text-black" : "bg-altGreen font-semibold tracking-wide text-white"} rounded-full border border-gray-700 bg-altGreen px-4 py-2 font-semibold tracking-wide`}
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
                  <div className="flex flex-wrap gap-2 pt-2">
                    {outdoorOptions.map((option, index) => (
                      <p
                        key={index}
                        className={`${index != 0 ? "bg-white text-black" : "bg-altGreen font-semibold tracking-wide text-white"} rounded-full border border-gray-700 bg-altGreen px-4 py-2 font-semibold tracking-wide`}
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">
                      Minimum Property Insurance
                    </p>
                    <div className="flex items-baseline gap-2 pt-2 space-x-2">
                      <p className="font-['Urbanist'] text-lg font-semibold leading-relaxed text-gray-900">
                        $375
                      </p>
                      <p className="px-4 py-2 bg-white border border-gray-800 rounded-2xl">
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
        <div className="flex w-[1168px] max-w-[1200px] justify-between place-self-center font-['Urbanist'] backdrop-blur-xl">
          {/* Left Section */}
          <div className="grow basis-1/3">
            <h3 className="mb-4 text-4xl font-medium leading-normal tracking-wider text-gray-900">
              Inquire About
              <div className="font-bold tracking-normal text-black">
                Metropolitan Haven
              </div>
            </h3>
            <p className="mb-6 tracking-wide text-gray-600 text-balance">
              Interested in this property? Fill out the form below, and our real
              estate experts will get back to you with more details, including
              scheduling a viewing and answering any questions you may have.
            </p>
            <button
              className="hidden -ml-28 opacity-85 hover:opacity-100 md:mt-32 md:block"
              onClick={scrollToTop}
            >
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/icons/scrolltopicon.svg"
                width={150}
                height={150}
                alt="Scroll to top of page"
                className="size-12 drop-shadow-xl"
              />
            </button>
          </div>

          {/* Right Section - Form */}
          <div className="grow basis-2/3">
            <form action="" className="space-y-6 p-9">
              {/* Name Fields */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="fname"
                    className="block mb-1 text-sm font-semibold tracking-wide text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    placeholder="Enter first name"
                    className="w-full px-4 py-2 bg-white border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-800"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="Lname"
                    className="block mb-1 text-sm font-semibold tracking-wide text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="Lname"
                    placeholder="Enter last name"
                    className="w-full px-4 py-2 bg-white border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-800"
                  />
                </div>
              </div>

              {/* Email and Phone Fields */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-semibold tracking-wide text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-white border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-800"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="phone"
                    className="block mb-1 text-sm font-semibold tracking-wide text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter phone number"
                    className="w-full px-4 py-2 bg-white border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-800"
                  />
                </div>
              </div>

              {/* Property Selection */}
              <div>
                <p className="mb-2 text-sm font-bold tracking-wide text-black">
                  Selected property:
                </p>
                <select
                  name="property"
                  id="property"
                  disabled
                  className="w-full px-4 py-2 bg-white rounded-md caret-white focus:outline-none focus:ring-1 focus:ring-emerald-800/25"
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
                  className="block mb-1 text-sm font-semibold tracking-wide text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message here"
                  className="w-full px-4 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-800"
                  rows="4"
                ></textarea>
              </div>

              {/* Terms and Submit Button */}
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 border border-gray-300 rounded accent-primaryGreen focus:ring-emerald-800/50"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 text-sm tracking-wide text-gray-700"
                  >
                    I agree with <u>Terms of Use</u> and <u>Privacy Policy</u>
                  </label>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 text-sm font-semibold tracking-wide text-white transition duration-300 rounded-md bg-primary hover:bg-emerald-300 hover:text-emerald-950"
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
          src="https://maps.google.com/maps?width=1660&amp;height=500&amp;hl=en&amp;q=Toronto%20canada+(homi%20apartment%20rental)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
};

export default RentalDetail;
