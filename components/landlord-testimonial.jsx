const LandlordTestimonial = () => {
  return (
    <div className="mb-[170px] px-4 py-10 sm:px-6 lg:px-20">
      <div className="mb-28 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
          What people say about us
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-10">
        {/* Testimonial 1 */}
        <div className="h-auto max-w-[370px] rounded-bl-3xl rounded-br-3xl bg-white p-4 shadow-xl lg:mt-44">
          <h4 className="mb-2 text-lg font-medium text-gray-700">
            Testimonial
          </h4>
          <hr className="mb-4 border-gray-300" />
          <div>
            <div className="flex gap-4">
              <img
                src="/Joshua.png"
                alt="Joshua"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="">
                <p className="font-medium text-gray-800">Joshua</p>
                <span className="text-sm text-gray-500">Just Now</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              "Listing my property on Homi was straightforward, and I started
              getting inquiries within hours. The in-app chat made tenant
              communication so easy and professional."
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative">
          <img
            src="/landlord_img.png"
            alt="Landlord"
            className="rounded-lg object-cover"
          />
          {/* Carousel Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
            <div className="bg-primaryGreen h-3 w-3 rounded-full"></div>
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <div className="h-3 w-3 rounded-full bg-white"></div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="h-auto max-w-[370px] rounded-bl-3xl rounded-br-3xl bg-white p-4 shadow-xl lg:mt-[-300px]">
          <h4 className="mb-2 text-lg font-medium text-gray-700">
            Testimonial
          </h4>
          <hr className="mb-4 border-gray-300" />
          <div>
            <div className="flex gap-4">
              <img
                src="/Nora.png"
                alt="Nora"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="">
                <p className="font-medium text-gray-800">Nora</p>
                <span className="text-sm text-gray-500">Just Now</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              "With Homi, I didn't just find tenants faster, I found the right
              tenants. The verification process gave me peace of mind, and
              payments were hassle-free."
            </p>
          </div>
        </div>
      </div>

      {/* Landlords Header */}
      <div className="mt-[-200px] flex justify-end">
        <h3 className="text-lg font-bold text-gray-800 sm:mr-[10%] md:mr-[20%] lg:mr-[25%]">
          Landlords
        </h3>
      </div>
    </div>
  );
};

export default LandlordTestimonial;
