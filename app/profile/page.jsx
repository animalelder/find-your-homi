import { NavBar } from "@/components/nav-bar";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen shrink-0">
      <img
        src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/profile_bg.png"
        alt="Profile Background"
        className="w-full"
      />
      {/* Navbar */}
      <div className="absolute inset-x-0 left-0 px-4 sm:px-12">
        <NavBar />
      </div>
      <div className="flex w-full gap-2 p-4 lg:flex-row">
        {/* Sidebar Icons */}
        <div className="items-center justify-center w-8 gap-y-14 lg:flex lg:flex-col lg:items-center">
          <img
            src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/message_icon.png"
            alt="Message"
            className="w-6 h-6 cursor-pointer hover:bg-primaryLight sm:h-7 sm:w-7"
          />
          <img
            src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/add_icon.png"
            alt="Add"
            className="w-6 h-6 cursor-pointer hover:bg-primaryLight sm:h-7 sm:w-7"
          />
          <img
            src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/setting_icon.png"
            alt="Settings"
            className="w-6 h-6 cursor-pointer hover:bg-primaryLight sm:h-7 sm:w-7"
          />
          <img
            src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/profile_icon.png"
            alt="Profile"
            className="w-6 h-6 cursor-pointer hover:bg-primaryLight sm:h-7 sm:w-7"
          />
        </div>

        {/* Tenant Information */}
        <div className="relative pt-16 mx-auto -mt-48 min-h-fit">
          <div className="w-auto p-4 bg-white rounded-tl-full rounded-tr-full min-h-fit">
            <div className="flex h-[503px] w-[400px] flex-col items-center justify-around gap-4 space-y-1.5 rounded-tl-full rounded-tr-full border border-[#242760] border-opacity-30 bg-white pb-5 pt-7 text-center shadow-lg">
              <div className="rounded-full size-56 justify-items-center">
                <img
                  src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/tenant_img.png"
                  alt="Tenant"
                  className="h-auto rounded-full min-w-52"
                />
              </div>
              <h4 className="text-lg font-semibold sm:text-xl">Amy Peters</h4>
              <div className="flex items-center gap-2 text-gray-950">
                <img
                  src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/location_icon.png"
                  alt="Location"
                  className="size-5"
                />
                <p className="text-lg font-semibold text-black sm:text-lg">
                  Toronto, Canada
                </p>
              </div>
              <p className="text-lg text-gray-700">Marketing Analyst</p>
              <div className="inline-flex justify-around w-full gap-3 px-4 py-5 h-fit">
                <button className="w-auto min-w-[160px] rounded-lg bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-600 sm:text-base">
                  Edit Profile
                </button>
                <button className="w-auto min-w-[160px] rounded-lg bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-600 sm:text-base">
                  Add HOMI
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Rental Images */}
        <div className="flex-1">
          <div className="flex justify-around mb-4 600">
            <h1 className="text-2xl font-bold text-black underline">
              Suggested Properties
            </h1>
            <h1 className="text-2xl font-semibold text-gray-500/75">Favs</h1>
            <div className="w-40"></div>
          </div>
          <div className="mx-auto grid w-[1000px] grid-cols-4 gap-2 pl-7">
            <Link href="/property-details">
              <img
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals0.png"
                alt="Rental 1"
                className="object-cover h-full rounded-lg cursor-pointer"
              />
            </Link>
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals5.png"
              alt="Rental 2"
              className="object-cover h-full rounded-lg cursor-pointer"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals1.png"
              alt="Rental 3"
              className="object-cover h-full rounded-lg cursor-pointer"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals3.png"
              alt="Rental 4"
              className="object-cover h-full rounded-lg cursor-pointer"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals6.png"
              alt="Rental 5"
              className="object-cover h-full rounded-lg cursor-pointer"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals4.png"
              alt="Rental 6"
              className="object-cover h-full rounded-lg cursor-pointer"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals2.png"
              alt="Rental 7"
              className="object-cover h-full rounded-lg cursor-pointer"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals7.png"
              alt="Rental 8"
              className="object-cover h-full rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
