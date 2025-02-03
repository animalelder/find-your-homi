import Navbar from "@/components/navbar";

const PropertyHeader = () => {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url('/property_bg.png')` }}
      >
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full px-4 sm:px-12 flex items-center justify-center">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          {/* Search Input and Find Property Button */}
          <div className="flex w-full max-w-lg">
            <div className="relative w-full bg-gray-100 rounded-lg p-2">
              <input
                type="text"
                placeholder="Search for a Property"
                className="w-full border rounded-lg py-2 px-4 pr-20"
              />
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primaryBlue text-white py-1 px-4 rounded-lg">
                Find Property
              </button>
            </div>
          </div>

          {/* Other Input Fields */}
          <div className="hidden lg:flex gap-2 mt-3 bg-gray-100 rounded-lg p-2">
            {/* Location Input */}
            <div className="relative flex items-center w-full max-w-xs">
              <img
                src="/location_img.png"
                alt="Location"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full border rounded-lg py-2 pl-10 pr-4"
              />
            </div>

            {/* Property Type Input */}
            <div className="relative flex items-center w-full max-w-xs">
              <img
                src="/home_img.png"
                alt="Home"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Property Type"
                className="w-full border rounded-lg py-2 pl-10 pr-10"
              />
              <img
                src="/chevron_button.png"
                alt="Chevron"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>

            {/* Pricing Range Input */}
            <div className="relative flex items-center w-full max-w-xs">
              <img
                src="/pricing_icon.png"
                alt="Pricing"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Pricing Range"
                className="w-full border rounded-lg py-2 pl-10 pr-10"
              />
              <img
                src="/chevron_button.png"
                alt="Chevron"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>

            {/* Property Size Input */}
            <div className="relative flex items-center w-full max-w-xs">
              <img
                src="/property_size.png"
                alt="Property Size"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Property Size"
                className="w-full border rounded-lg py-2 pl-10 pr-10"
              />
              <img
                src="/chevron_button.png"
                alt="Chevron"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>

            {/* Build Year Input */}
            <div className="relative flex items-center w-full max-w-xs">
              <img
                src="/calendar_icon.png"
                alt="Calendar"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Build Year"
                className="w-full border rounded-lg py-2 pl-10 pr-10"
              />
              <img
                src="/chevron_button.png"
                alt="Chevron"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
