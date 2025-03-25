import Image from "next/image";
import Link from "next/link";

const PropertyResults = () => {
  const listings = [
    {
      bg: "assets/home4.png",
      title: "Apartment in Toronto, Canada",
      description: "Region Home Apartment",
      price: "$5,300/m",
    },
    {
      bg: "assets/home5.png",
      title: "Condo in Toronto",
      description: "Resource Home apartment",
      price: "$8,500/m",
    },
    {
      bg: "assets/home6.png",
      title: "Duplex in Toronto, Canada",
      description: "Region Home apartment",
      price: "$8,300/m",
    },
    {
      bg: "assets/home7.png",
      title: "Duplex in Toronto, Canada",
      description: "Region Home apartment",
      price: "$8,300/m",
    },
    {
      bg: "assets/home8.png",
      title: "Duplex in Toronto, Canada",
      description: "Region Home apartment",
      price: "$8,300/m",
    },
    {
      bg: "assets/home9.png",
      title: "Condo in Toronto, Canada",
      description: "Region Home apartment",
      price: "$9,500/m",
    },
  ];

  return (
    <div className="min-h-screen bg-white bg-gradient-to-b from-cyan-400/40 via-sky-500/50 pb-12">
      <div className="mx-4 sm:mx-[10%]">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <h3 className="mb-2.5 text-6xl font-medium text-white drop-shadow">
            Search Results
          </h3>
          <p className="mb-10 text-lg text-gray-700">
            Based on your criteria, here are some properties that we think you
            will really love!
          </p>

          {/* Featured Properties */}
          <div className="grid grid-cols-3">
            {[
              "assets/property1.png",
              "assets/property2.png",
              "assets/property3.png",
            ].map((property, index) => (
              <div
                key={index}
                className="w-full max-w-sm space-y-5 rounded-lg bg-white p-4 shadow-md"
              >
                <Link href="/property-details">
                  <Image
                    src={property}
                    width={834}
                    height={1119}
                    alt={`Property ${index + 1}`}
                    className="w-full rounded-lg"
                  />
                </Link>
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
      </div>
    </div>
  );
};

export default PropertyResults;
