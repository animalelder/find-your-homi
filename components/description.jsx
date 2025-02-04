import Image from "next/image";
import bedroom_icon from "./bedroom_icon.png";
import feature_icon from "./feature_icon.png";

const Description = () => {
  return (
    <div className="mt-60 bg-gradient-to-b from-white to-[#FEF5F4] p-4 md:p-8 lg:p-12">
      <div className="flex flex-col gap-10 lg:flex-row">
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* First Item */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <Image
                  src={bedroom_icon}
                  alt="bedroom icon"
                  className="h-5 w-5"
                />
                <p className="text-gray-600">Bedrooms</p>
              </div>
              <p className="font-medium text-gray-900">04</p>
            </div>

            {/* Border + Second Item in One Flex Container */}
            <div className="flex">
              <div className="self-stretch border-r-2 border-gray-800"></div>
              <div className="flex flex-col pl-2">
                <div className="flex items-center gap-1">
                  <Image src="/bathroom_icon.png" alt="" className="h-5 w-5" />
                  <p className="text-gray-600">Bathrooms</p>
                </div>
                <p className="font-medium text-gray-900">03</p>
              </div>
            </div>

            {/* Border + Third Item in One Flex Container */}
            <div className="flex">
              <div className="self-stretch border-r-2 border-gray-800"></div>
              <div className="flex flex-col pl-2">
                <div className="flex items-center gap-1">
                  <Image src="/area_icon.png" alt="" className="h-5 w-5" />
                  <p className="text-gray-600">Area</p>
                </div>
                <p className="font-medium text-gray-900">2,500 Square Feet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-gray-700 lg:w-1/3">
          d
          <h3 className="mb-4 text-2xl font-semibold">
            Key Features and Amenities
          </h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-[#FF5757] to-[#FF9897] p-2 text-white">
              <Image
                src={feature_icon}
                alt="icon for feature"
                className="h-5 w-5"
              />
              <p className="text-[14px] font-semibold">
                Expansive oceanfront terrace for outdoor entertaining
              </p>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-[#FF5757] to-[#FF9897] p-2 text-white">
              <Image
                src={feature_icon}
                alt="icon for feature"
                className="h-5 w-5"
              />
              <p className="text-[14px] font-semibold">
                Expansive oceanfront terrace for outdoor entertaining
              </p>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-[#FF5757] to-[#FF9897] p-2 text-white">
              <Image
                src={feature_icon}
                alt="icon for feature"
                className="h-5 w-5"
              />
              <p className="text-[14px] font-semibold">
                Expansive oceanfront terrace for outdoor entertaining
              </p>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-[#FF5757] to-[#FF9897] p-2 text-white">
              <Image
                src={feature_icon}
                alt="icon for feature"
                className="h-5 w-5"
              />
              <p className="text-[14px] font-semibold">
                Expansive oceanfront terrace for outdoor entertaining
              </p>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-[#FF5757] to-[#FF9897] p-2 text-white">
              <Image
                src={feature_icon}
                alt="icon for feature"
                className="h-5 w-5"
              />
              <p className="text-[14px] font-semibold">
                Expansive oceanfront terrace for outdoor entertaining
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full">
        <h3 className="mb-6 text-center text-2xl font-semibold md:text-left">
          Property Details
        </h3>
        <p className="mt-3 text-center text-sm text-gray-700 md:text-left md:text-base">
          At Homi, transparency is key. We want you to have a clear
          understanding of all costs associated with your property investment.
          Below, we break down the pricing for Seaside Serenity Villa to help
          you make an informed decision.
        </p>

        {/* Note Box */}
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-lg border border-gray-700 bg-white p-3 md:flex-nowrap md:gap-4">
          <p className="text-sm font-semibold md:text-base">Note</p>
          <div className="hidden h-full border-r-2 border-gray-800 md:block"></div>
          <p className="text-sm text-gray-600 md:text-base">
            The figures provided above are estimates and may vary depending on
            the property, location, and individual circumstances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
