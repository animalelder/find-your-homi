const HomiMatch = () => {
  return (
    <div className="mx-4 px-4 py-8 sm:mx-[10%]">
      <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/match_btn.png"
            alt="Match with Roommate"
            className="h-auto w-full"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h3 className="text-primaryGreen mb-4 text-3xl font-bold">
            Match with your ideal roommate effortlessly
          </h3>
          <p className="mb-6 text-gray-600">
            Find roommates that fit your lifestyle and budget seamlessly, making
            shared living comfortable and stress-free.
          </p>
          <button className="bg-primaryGreen mb-6 rounded-full px-6 py-3">
            Get Started
          </button>
          <div className="flex justify-center lg:justify-end">
            <img src="/match_btn.png" alt="Get Started Button" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomiMatch;
