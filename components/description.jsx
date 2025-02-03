import React from "react";

const Description = () => {
  return (
<div className="mt-60 bg-gradient-to-b from-white to-[#FEF5F4] p-4 md:p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-4 lg:w-7/12">
          <h3 className="text-2xl font-semibold">Description</h3>
          <p className="text-sm text-gray-500">
            Discover your own piece of paradise with the Seaside Serenity Villa.
            With an open floor plan, breathtaking ocean views from every room,
            and direct access to a pristine sandy beach, this property is the
            epitome of coastal living.
          </p>

          <hr className="border border-gray-700" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* First Item */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <img src="/bedroom_icon.png" alt="" className="w-5 h-5" />
                <p className="text-gray-600">Bedrooms</p>
              </div>
              <p className="text-gray-900 font-medium">04</p>
            </div>

            {/* Border + Second Item in One Flex Container */}
            <div className="flex">
              <div className="border-r-2 border-gray-800 self-stretch"></div>
              <div className="flex flex-col pl-2">
                <div className="flex items-center gap-1">
                  <img src="/bathroom_icon.png" alt="" className="w-5 h-5" />
                  <p className="text-gray-600">Bathrooms</p>
                </div>
                <p className="text-gray-900 font-medium">03</p>
              </div>
            </div>

            {/* Border + Third Item in One Flex Container */}
            <div className="flex">
              <div className="border-r-2 border-gray-800 self-stretch"></div>
              <div className="flex flex-col pl-2">
                <div className="flex items-center gap-1">
                  <img src="/area_icon.png" alt="" className="w-5 h-5" />
                  <p className="text-gray-600">Area</p>
                </div>
                <p className="text-gray-900 font-medium">2,500 Square Feet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 text-gray-700">d
        <h3 className="text-2xl font-semibold mb-4">Key Features and Amenities</h3>
        <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1 text-white bg-gradient-to-r from-[#FF5757] to-[#FF9897] p-2 rounded-lg ">

                  <img src="/feature_icon.png" alt="" className="w-5 h-5" />
                  <p className="text-[14px] font-semibold">Expansive oceanfront terrace for outdoor entertaining</p>
                </div>
                <div className="flex items-center gap-1 text-white bg-gradient-to-r from-[#FF5757] to-[#FF9897] p-2 rounded-lg">

                  <img src="/feature_icon.png" alt="" className="w-5 h-5" />
                  <p className="text-[14px] font-semibold">Expansive oceanfront terrace for outdoor entertaining</p>
                </div>
                <div className="flex items-center gap-1 text-white bg-gradient-to-r from-[#FF5757] to-[#FF9897] p-2 rounded-lg">

                  <img src="/feature_icon.png" alt="" className="w-5 h-5" />
                  <p className="text-[14px] font-semibold">Expansive oceanfront terrace for outdoor entertaining</p>
                </div>
                <div className="flex items-center gap-1 text-white bg-gradient-to-r from-[#FF5757] to-[#FF9897] p-2 rounded-lg">

                  <img src="/feature_icon.png" alt="" className="w-5 h-5" />
                  <p className="text-[14px] font-semibold">Expansive oceanfront terrace for outdoor entertaining</p>
                </div>
                <div className="flex items-center gap-1 text-white bg-gradient-to-r from-[#FF5757] to-[#FF9897] p-2 rounded-lg">

                  <img src="/feature_icon.png" alt="" className="w-5 h-5" />
                  <p className="text-[14px] font-semibold">Expansive oceanfront terrace for outdoor entertaining</p>
                </div>
                </div>
        </div>
      </div>
      <div className="w-full mt-5">
  <h3 className="text-2xl font-semibold text-center md:text-left mb-6">Property Details</h3>
  <p className="text-gray-700 text-sm md:text-base text-center md:text-left mt-3">
    At Homi, transparency is key. We want you to have a clear understanding of all costs 
    associated with your property investment. Below, we break down the pricing for 
    Seaside Serenity Villa to help you make an informed decision.
  </p>

  {/* Note Box */}
  <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4 bg-white border border-gray-700 rounded-lg p-3 mt-4">
    <p className="text-sm md:text-base font-semibold">Note</p>
    <div className="border-r-2 border-gray-800 h-full hidden md:block"></div>
    <p className="text-sm md:text-base text-gray-600">
      The figures provided above are estimates and may vary depending on the property, 
      location, and individual circumstances.
    </p>
  </div>
</div>

    </div>
  );
};

export default Description;
