const PropertyListing = () => {
  const listings = [
    {
      bg: "/home4.png",
      title: "Apartment in Toronto, Canada",
      description: "Region Home Apartment",
      price: "$5,300/m",
    },
    {
      bg: "/home5.png",
      title: "Condo in Toronto",
      description: "Resource Home apartment",
      price: "$8,500/m",
    },
    {
      bg: "/home6.png",
      title: "Duplex in Toronto, Canada",
      description: "Region Home apartment",
      price: "$8,300/m",
    },
    {
      bg: "/home7.png",
      title: "Duplex in Toronto, Canada",
      description: "Region Home apartment",
      price: "$8,300/m",
    },
    {
      bg: "/home8.png",
      title: "Duplex in Toronto, Canada",
      description: "Region Home apartment",
      price: "$8,300/m",
    },
    {
      bg: "/home9.png",
      title: "Condo in Toronto, Canada",
      description: "Region Home apartment",
      price: "$9,500/m",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-skyBlue">
      <div className="mx-4 sm:mx-[10%]">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <h3 className="text-primaryGreen mb-4 text-2xl font-semibold sm:text-3xl">
            Discover a World of Possibilities
          </h3>
          <p className="mb-8 text-sm text-gray-600">
            Our portfolio of properties is as diverse as your dreams. Explore
            the following categories to find the perfect property that resonates
            with your vision of home.
          </p>

          {/* Featured Properties */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["/property1.png", "/property2.png", "/property3.png"].map(
              (property, index) => (
                <div
                  key={index}
                  className="w-full max-w-sm rounded-lg bg-white p-4 shadow-md"
                >
                  <img
                    src={property}
                    alt={`Property ${index + 1}`}
                    className="w-full rounded-lg"
                  />
                  <p className="bg-primaryGreen mt-2 inline-block rounded-full px-2 py-1 text-[14px]">
                    {index === 0
                      ? "Urban Living - Heart of Toronto"
                      : index === 1
                        ? "Urban Oasis - Life in the Heart of the City"
                        : "City Charm - Enjoy the City's Lights"}
                  </p>
                  <h4 className="mt-3 text-lg font-bold">
                    {index === 0
                      ? "Toronto Modern Apartment"
                      : index === 1
                        ? "Metropolitan Haven"
                        : "Rustic Retreat Cottage"}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    {index === 0
                      ? "Experience the vibrant city life with this beautifully designed modern apartment located in the heart of Toronto..."
                      : index === 1
                        ? "Immerse yourself in the energy of the city. This modern apartment in the heart..."
                        : "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills..."}
                    <a href="#" className="ml-1 text-primaryBlue">
                      Read More
                    </a>
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-400">Price</span>
                      <p className="text-lg font-bold">$1,250</p>
                    </div>
                    <button className="bg-primaryGreen rounded-lg px-4 py-2 hover:bg-primaryLight">
                      View Property Details
                    </button>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <hr className="mx-auto my-6 h-[1px] w-[80%] border-t border-red-600" />

        {/* Listings Section */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((item, index) => (
              <div
                key={index}
                className="relative w-full cursor-pointer overflow-hidden rounded-lg bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url(${item.bg})`, height: "400px" }}
              >
                <img
                  src="/Live_Listing.png"
                  alt="Live Listing"
                  className="absolute left-4 top-[-60px] h-48 w-48 object-contain"
                />
                <div className="absolute bottom-4 left-1/2 w-[90%] -translate-x-1/2 transform rounded-2xl bg-white p-4">
                  <p className="font-semibold">{item.title}</p>
                  <span className="block text-sm text-gray-600">
                    {item.description}
                  </span>
                  <span className="block font-bold">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
