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
      <div className="min-h-screen bg-gradient-to-b from-white via-[#aeefdc] to-[#fbfbfb] p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row">
          <div className="p-4 lg:w-1/4">
            <p className="text-[10px] text-gray-600">Listing Price</p>
            <p className="text-2xl font-bold text-gray-900">$1,250</p>
          </div>

          <div className="flex flex-col space-y-6 lg:w-3/4">
            {/* Rental Details Section */}
            <div className="rounded-xl border border-gray-700 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Rental Details</h3>
                <button className="cursor-pointer rounded-lg border border-gray-700 bg-white px-4 py-2 transition duration-300 hover:bg-primaryGreen hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-gray-600">Bedrooms</p>
                  <p className="font-medium text-gray-900">04</p>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-gray-600">Bathrooms</p>
                    <p className="font-medium text-gray-900">03</p>
                  </div>
                </div>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-gray-600">Square Feet</p>
                  <p className="font-medium text-gray-900">05</p>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-gray-600">Laundry</p>
                    <div className="flex flex-wrap gap-2">
                      {laundryOptions.map((option, index) => (
                        <p
                          key={index}
                          className="rounded-full border border-gray-700 bg-white px-4 py-2 text-gray-600 transition duration-300 hover:bg-primaryGreen hover:text-white"
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
                <p className="text-sm text-gray-600">Pet friendly</p>
                <div className="flex flex-wrap gap-2">
                  {petOptions.map((option, index) => (
                    <p
                      key={index}
                      className="rounded-full border border-gray-700 bg-white px-4 py-2 text-gray-600 transition duration-300 hover:bg-primaryGreen hover:text-white"
                    >
                      {option}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Lease Details Section */}
            <div className="rounded-xl border border-gray-700 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Lease Details</h3>
                <button className="cursor-pointer rounded-lg border border-gray-700 bg-white px-4 py-2 transition duration-300 hover:bg-primaryGreen hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-gray-600">Move in Date</p>
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
                  <p className="text-gray-600">Leasing Type</p>
                  <div className="flex flex-wrap gap-2">
                    {leaseOptions.map((option, index) => (
                      <p
                        key={index}
                        className="cursor-pointer rounded-full border border-gray-700 bg-white px-4 py-2 hover:bg-primaryGreen"
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Room Matching Section */}
            <div className="rounded-xl border border-gray-700 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Room Matching</h3>
                <button className="cursor-pointer rounded-lg border border-gray-700 bg-white px-4 py-2 transition duration-300 hover:bg-primaryGreen hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-gray-600">
                    Roommate Gender Preference
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {genderOptions.map((option, index) => (
                      <p
                        key={index}
                        className="rounded-full border border-gray-700 bg-white px-4 py-2 text-gray-600 transition duration-300 hover:bg-primaryGreen hover:text-white"
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-gray-600">Smoking preference</p>
                    <div className="flex flex-wrap gap-2">
                      {smokingOptions.map((option, index) => (
                        <p
                          key={index}
                          className="rounded-full border border-gray-700 bg-white px-4 py-2 text-gray-600 transition duration-300 hover:bg-primaryGreen hover:text-white"
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
                  <p className="text-sm text-gray-600">Deposit Payment</p>
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
                    <p className="text-sm text-gray-600">
                      Credit Check/Background Check
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <p className="rounded-full border border-gray-700 bg-white px-4 py-2 text-gray-600 transition duration-300 hover:bg-primaryGreen hover:text-white">
                        Approved
                      </p>
                      <p className="rounded-full border border-gray-700 bg-white px-4 py-2 text-gray-600 transition duration-300 hover:bg-primaryGreen hover:text-white">
                        Denied
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Building Features Section */}
            <div className="rounded-xl border border-gray-700 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Building Features</h3>
                <button className="cursor-pointer rounded-lg border border-gray-700 bg-white px-4 py-2 transition duration-300 hover:bg-primaryGreen hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-gray-600">Security Feature</p>
                  <div className="flex flex-wrap gap-2">
                    {securityOptions.map((option, index) => (
                      <p
                        key={index}
                        className="rounded-full border border-gray-700 bg-white px-4 py-2 text-gray-600 transition duration-300 hover:bg-primaryGreen hover:text-white"
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-gray-600">Utilities included</p>
                    <div className="flex flex-wrap gap-2">
                      {securityOptions.map((option, index) => (
                        <p
                          key={index}
                          className="rounded-full border border-gray-700 bg-white px-4 py-2 text-gray-600 transition duration-300 hover:bg-primaryGreen hover:text-white"
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
                  <p className="text-sm text-gray-600">Outdoor space</p>
                  <div className="flex flex-wrap gap-2">
                    {outdoorOptions.map((option, index) => (
                      <p
                        key={index}
                        className="rounded-full border border-gray-700 bg-white px-4 py-2 text-gray-600 transition duration-300 hover:bg-primaryGreen hover:text-white"
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-gray-600">Property Insurance</p>
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
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default RentalDetail;
