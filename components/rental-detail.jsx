import Footer from '@/components/footer';
import React from "react";

const RentalDetail = () => {
  // Options for different features
  const laundryOptions = ["In-Unit", "On-site", "None"];
  const petOptions = ["Yes", "No"];
  const leaseOptions = ["Short-term", "Long-term", "Month-to-month"];
  const genderOptions = ["male", "female", "non-binary"];
  const smokingOptions = ["smoking", "non-smoking"];
  const securityOptions = ["gate", "concierge", "camera"];
  const outdoorOptions = ["balcony", "patio", "yard"];

  return (
    <div>
    <div className="bg-gradient-to-b from-white via-[#aeefdc] to-[#fbfbfb] min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row">
        <div className="p-4 lg:w-1/4">
          <p className="text-[10px] text-gray-600">Listing Price</p>
          <p className="text-2xl font-bold text-gray-900">$1,250</p>
        </div>

        <div className="flex flex-col space-y-6 lg:w-3/4">
          {/* Rental Details Section */}
          <div className="border border-gray-700 rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Rental Details</h3>
              <button className="cursor-pointer border border-gray-700 bg-white hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
            <hr className="border border-gray-700 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">Bedrooms</p>
                <p className="text-gray-900 font-medium">04</p>
              </div>
              <div className="flex">
                <div className="border-r-2 border-gray-800 self-stretch"></div>
                <div className="flex flex-col pl-2">
                  <p className="text-gray-600 text-sm">Bathrooms</p>
                  <p className="text-gray-900 font-medium">03</p>
                </div>
              </div>
            </div>
            <hr className="border border-gray-700 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">Square Feet</p>
                <p className="text-gray-900 font-medium">05</p>
              </div>
              <div className="flex">
                <div className="border-r-2 border-gray-800 self-stretch"></div>
                <div className="flex flex-col pl-2">
                  <p className="text-gray-600 text-sm">Laundry</p>
                  <div className="flex flex-wrap gap-2">
                    {laundryOptions.map((option, index) => (
                      <p
                        key={index}
                        className="text-gray-600 border border-gray-700 px-4 py-2 rounded-full bg-white hover:bg-primary hover:text-white transition duration-300"
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-gray-700 mb-4" />
            <div>
              <p className="text-gray-600 text-sm">Pet friendly</p>
              <div className="flex flex-wrap gap-2">
                {petOptions.map((option, index) => (
                  <p
                    key={index}
                    className="text-gray-600 border border-gray-700 px-4 py-2 rounded-full bg-white hover:bg-primary hover:text-white transition duration-300"
                  >
                    {option}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Lease Details Section */}
          <div className="border border-gray-700 rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Lease Details</h3>
              <button className="cursor-pointer border border-gray-700 bg-white hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
            <hr className="border border-gray-700 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">Move in Date</p>
                <div className="flex space-x-2">
                  <p className="text-gray-900 font-medium">MM/DD/YYYY</p>
                  <p className="px-4 py-2 bg-white border border-gray-800 rounded-2xl">
                    Available January 30 2025
                  </p>
                </div>
              </div>
            </div>
            <hr className="border border-gray-700 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-1">
                <p className="text-gray-600">Leasing Type</p>
                <div className="flex flex-wrap gap-2">
                  {leaseOptions.map((option, index) => (
                    <p
                      key={index}
                      className="border border-gray-700 px-4 py-2 rounded-full bg-white hover:bg-primary cursor-pointer"
                    >
                      {option}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Room Matching Section */}
          <div className="border border-gray-700 rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Room Matching</h3>
              <button className="cursor-pointer border border-gray-700 bg-white hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
            <hr className="border border-gray-700 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">Roommate Gender Preference</p>
                <div className="flex flex-wrap gap-2">
                  {genderOptions.map((option, index) => (
                    <p
                      key={index}
                      className="text-gray-600 border border-gray-700 px-4 py-2 rounded-full bg-white hover:bg-primary hover:text-white transition duration-300"
                    >
                      {option}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex">
                <div className="border-r-2 border-gray-800 self-stretch"></div>
                <div className="flex flex-col pl-2">
                  <p className="text-gray-600 text-sm">Smoking preference</p>
                  <div className="flex flex-wrap gap-2">
                    {smokingOptions.map((option, index) => (
                      <p
                        key={index}
                        className="text-gray-600 border border-gray-700 px-4 py-2 rounded-full bg-white hover:bg-primary hover:text-white transition duration-300"
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-gray-700 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">Deposit Payment</p>
                <div className="flex space-x-2">
                  <p className="text-gray-900 font-medium">$500</p>
                  <p className="px-4 py-2 bg-white border border-gray-800 rounded-2xl">
                    20%
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="border-r-2 border-gray-800 self-stretch"></div>
                <div className="flex flex-col pl-2">
                  <p className="text-gray-600 text-sm">Credit Check/Background Check</p>
                  <div className="flex flex-wrap gap-2">
                    <p className="text-gray-600 border border-gray-700 px-4 py-2 rounded-full bg-white hover:bg-primary hover:text-white transition duration-300">
                      Approved
                    </p>
                    <p className="text-gray-600 border border-gray-700 px-4 py-2 rounded-full bg-white hover:bg-primary hover:text-white transition duration-300">
                      Denied
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Building Features Section */}
          <div className="border border-gray-700 rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Building Features</h3>
              <button className="cursor-pointer border border-gray-700 bg-white hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
            <hr className="border border-gray-700 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">Security Feature</p>
                <div className="flex flex-wrap gap-2">
                  {securityOptions.map((option, index) => (
                    <p
                      key={index}
                      className="text-gray-600 border border-gray-700 px-4 py-2 rounded-full bg-white hover:bg-primary hover:text-white transition duration-300"
                    >
                      {option}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex">
                <div className="border-r-2 border-gray-800 self-stretch"></div>
                <div className="flex flex-col pl-2">
                  <p className="text-gray-600 text-sm">Utilities included</p>
                  <div className="flex flex-wrap gap-2">
                    {securityOptions.map((option, index) => (
                      <p
                        key={index}
                        className="text-gray-600 border border-gray-700 px-4 py-2 rounded-full bg-white hover:bg-primary hover:text-white transition duration-300"
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-gray-700 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <p className="text-gray-600 text-sm">Outdoor space</p>
                <div className="flex flex-wrap gap-2">
                  {outdoorOptions.map((option, index) => (
                    <p
                      key={index}
                      className="text-gray-600 border border-gray-700 px-4 py-2 rounded-full bg-white hover:bg-primary hover:text-white transition duration-300"
                    >
                      {option}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex">
                <div className="border-r-2 border-gray-800 self-stretch"></div>
                <div className="flex flex-col pl-2">
                  <p className="text-gray-600 text-sm">Property Insurance</p>
                  <div className="flex space-x-2">
                    <p className="text-gray-900 font-medium">$100</p>
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
      </div>
      <Footer/>
    </div>
  );
};

export default RentalDetail;