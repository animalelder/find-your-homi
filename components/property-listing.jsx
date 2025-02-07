import Image from "next/image";

const PropertyListing = () => {
  const listings = [
    {
      bg: "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//home4.png",
      title: "Apartment in Toronto, Canada",
      description: "Region Home Apartment",
      price: "$5,300/m",
    },
    {
      bg: "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//home5.png",
      title: "Condo in Toronto",
      description: "Resource Home apartment",
      price: "$8,500/m",
    },
    {
      bg: "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//home6.png",
      title: "Duplex in Toronto, Canada",
      description: "Region Home apartment",
      price: "$8,300/m",
    },
    {
      bg: "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//home7.png",
      title: "Duplex in Toronto, Canada",
      description: "Region Home apartment",
      price: "$8,300/m",
    },
    {
      bg: "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//home8.png",
      title: "Duplex in Toronto, Canada",
      description: "Region Home apartment",
      price: "$8,300/m",
    },
    {
      bg: "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//home9.png",
      title: "Condo in Toronto, Canada",
      description: "Region Home apartment",
      price: "$9,500/m",
    },
  ];

  return (
    <div className="min-h-screen bg-white bg-gradient-to-b from-sky-300/25 via-sky-500/50 pb-12">
      <div className="mx-4 sm:mx-[10%]">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <h3 className="mb-4 font-['Urbanist'] text-4xl font-semibold text-primaryGreen">
            Discover a World of Possibilities
          </h3>
          <p className="mb-8 font-['Urbanist'] text-sm text-gray-600">
            Our portfolio of properties is as diverse as your dreams. Explore
            the following categories to find the perfect property that resonates
            with your vision of home.
          </p>

          {/* Featured Properties */}
          <div className="grid grid-cols-3">
            {[
              "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//property1.png",
              "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//property2.png",
              "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//property3.png",
            ].map((property, index) => (
              <div
                key={index}
                className="w-full max-w-sm space-y-5 rounded-lg bg-white p-4 shadow-md"
              >
                <Image
                  src={property}
                  width={834}
                  height={1119}
                  alt={`Property ${index + 1}`}
                  className="w-full rounded-lg"
                />
                <p className="mt-3 inline-block rounded-full bg-primaryGreen px-3 py-1 text-[14px]">
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
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                  {index === 0
                    ? "Experience the vibrant city in a beautiful modern apartment located in the heart of Toronto..."
                    : index === 1
                      ? "Immerse yourself in the energy of the city. This modern apartment in the heart..."
                      : "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills..."}
                  <a href="#" className="ml-1 text-primaryBlue">
                    Read More
                  </a>
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-400">Price</span>
                    <p className="text-lg font-bold">$3,000</p>
                  </div>
                  <button className="rounded-lg bg-primaryGreen px-4 py-2 hover:bg-primaryLight">
                    View Property Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="mx-auto my-6 h-[1px] w-[80%] border-t border-red-600" />

        {/* Listings Section */}
        <div className="mx-auto min-w-fit max-w-screen-xl px-4 pb-20">
          <div className="grid grid-cols-3 gap-5">
            {listings.map((item, index) => (
              <div
                key={index}
                className="relative w-full max-w-sm cursor-pointer overflow-hidden rounded-lg bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url(${item.bg})`, height: "400px" }}
              >
                <Image
                  src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/livelisting/badge.png"
                  width={249}
                  height={43}
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
