import { Bath, BedDouble, LandPlot, Zap } from "lucide-react";

const Description = () => {
  return (
    <div className="mt-10 bg-gradient-to-b from-transparent via-red-50 to-white p-4 md:p-8 lg:p-12">
      <div className="flex flex-row gap-10">
        {/* Left Section */}
        <div className="mx-10 flex h-fit flex-1 flex-col justify-between space-y-4">
          <div className="flex-row">
            <h3 className="mb-7 text-2xl font-semibold">Description</h3>
            <p className="text-sm text-neutral-700">
              Discover your own piece of paradise with <b>Metropolitan Haven</b>
              . With an open floor plan, breathtaking downtown views from every
              room, and a wraparound balcony, this property is the epitome of
              urban living.
            </p>
          </div>

          <div className="space-x-3 space-y-5">
            <hr className="border border-gray-700" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* First Item */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <BedDouble className="size-5" />
                  <p className="text-gray-600">Bedrooms</p>
                </div>
                <p className="mt-3 font-medium text-gray-900">04</p>
              </div>

              {/* Border + Second Item in One Flex Container */}
              <div className="flex">
                <div className="self-stretch border-r-2 border-gray-800"></div>
                <div className="flex flex-col pl-2">
                  <div className="flex items-center gap-1">
                    <Bath className="size-5" />
                    <p className="text-gray-600">Bathrooms</p>
                  </div>
                  <p className="mt-3 font-medium text-gray-900">03</p>
                </div>
              </div>

              {/* Border + Third Item in One Flex Container */}
              <div className="flex">
                <div className="self-stretch border-r-2 border-gray-800"></div>
                <div className="flex flex-col pl-2">
                  <div className="flex items-center gap-1">
                    <LandPlot className="size-5" />
                    <p className="text-gray-600">Area</p>
                  </div>
                  <p className="mt-3 font-medium text-gray-900">
                    2,500 Square Feet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-gray-700 lg:w-6/12">
          <h3 className="mb-4 text-2xl font-semibold">
            Key Features and Amenities
          </h3>
          <div className="flex flex-col gap-6 font-medium text-white">
            <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#FF5757] from-50% to-red-50/25 to-90% p-2 py-4 text-white">
              <Zap className="size-5 fill-white" />
              <p className="text-[14px] font-semibold">
                Expansive private balcony terrace for outdoor entertaining
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#FF5757] from-50% to-red-50/25 to-90% p-2 py-4 text-white">
              <Zap className="size-5 fill-white" />
              <p className="text-[14px] font-semibold">
                Gourmet kitchen with top-of-the-line appliances
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#FF5757] from-50% to-red-50/25 to-90% p-2 py-4 text-white">
              <Zap className="size-5 fill-white" />
              <p className="text-nowrap text-[14px] font-semibold">
                Master suite with a spa-inspired bathroom and private balcony
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#FF5757] from-50% to-red-50/25 to-90% p-2 py-4 text-white">
              <Zap className="size-5 fill-white" />
              <p className="text-[14px] font-semibold">
                Private garage and ample storage space
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#FF5757] from-50% to-red-50/25 to-90% p-2 py-4 text-white">
              <Zap className="size-5 fill-white" />
              <p className="text-[14px] font-semibold">
                Close to all the downtown Toronto culture and life
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-auto mt-5 space-y-8 pr-60">
        <h3 className="text-justift mb-6 text-4xl font-semibold">
          Property Details
        </h3>
        <p className="mt-3 w-[900px] text-justify leading-tight text-black md:text-base">
          At Homi, transparency is key. We want you to have a clear
          understanding of all costs associated with your property investment.
          Below, we break down the pricing for <b>Metropolitan Haven</b> to help
          you make an informed decision.
        </p>

        {/* Note Box */}
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-lg border border-gray-700 bg-white p-3 md:flex-nowrap md:gap-4">
          <p className="text-sm font-semibold uppercase md:text-lg">Note</p>
          <div className="hidden h-full border-r-2 border-gray-800 md:block"></div>
          <p className="text-sm text-gray-900 md:text-base">
            The figures provided above are estimates and may vary depending on
            the property, location, and individual circumstances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
