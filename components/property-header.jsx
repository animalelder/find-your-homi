import Image from "next/image";
import NavBar from "./navbar";

const PropertyHeader = () => {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/property_bg.png')` }}
      >
        {/* Navbar */}
        <div className="absolute left-0 top-0 flex w-full items-center justify-center px-4 sm:px-12">
          <NavBar />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          {/* Search Input and Find Property Button */}
          <div className="flex w-full max-w-lg">
            <div className="relative w-full rounded-lg bg-gray-100 p-2">
              <input
                type="text"
                placeholder="Search for a Property"
                className="w-full rounded-lg border px-4 py-2 pr-20"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-lg bg-primaryBlue px-4 py-1 text-white">
                Find Property
              </button>
            </div>
          </div>

          {/* Other Input Fields */}
          <div className="mt-3 hidden gap-2 rounded-lg bg-gray-100 p-2 lg:flex">
            {/* Location Input */}
            <div className="relative flex w-full max-w-xs items-center">
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//location_img.png"
                width={40}
                height={40}
                alt="Location"
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full rounded-lg border py-2 pl-10 pr-4"
              />
            </div>

            {/* Property Type Input */}
            <div className="relative flex w-full max-w-xs items-center">
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//home_img.png"
                width={40}
                height={40}
                alt="Home"
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform"
              />
              <input
                type="text"
                placeholder="Property Type"
                className="w-full rounded-lg border py-2 pl-10 pr-10"
              />
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//chevron_button.png"
                width={40}
                height={40}
                alt="Chevron"
                className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform"
              />
            </div>

            {/* Pricing Range Input */}
            <div className="relative flex w-full max-w-xs items-center">
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//pricing_icon.png"
                width={40}
                height={40}
                alt="Pricing"
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform"
              />
              <input
                type="text"
                placeholder="Pricing Range"
                className="w-full rounded-lg border py-2 pl-10 pr-10"
              />
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//chevron_button.png"
                width={40}
                height={40}
                alt="Chevron"
                className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform"
              />
            </div>

            {/* Property Size Input */}
            <div className="relative flex w-full max-w-xs items-center">
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//property_size.png"
                width={40}
                height={40}
                alt="Property Size"
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform"
              />
              <input
                type="text"
                placeholder="Property Size"
                className="w-full rounded-lg border py-2 pl-10 pr-10"
              />
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//chevron_button.png"
                width={40}
                height={40}
                alt="Chevron"
                className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform"
              />
            </div>

            {/* Build Year Input */}
            <div className="relative flex w-full max-w-xs items-center">
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//calendar_icon.png"
                width={40}
                height={40}
                alt="Calendar"
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform"
              />
              <input
                type="text"
                placeholder="Build Year"
                className="w-full rounded-lg border py-2 pl-10 pr-10"
              />
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//chevron_button.png"
                width={40}
                height={40}
                alt="Chevron"
                className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
