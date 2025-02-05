import { NavBar } from "@/components/nav-bar";

export default function Page() {
  return (
    <div className="relative flex min-h-screen w-full shrink-0 flex-col items-center">
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
        <div className="w-8 items-center justify-center gap-y-14 lg:flex lg:flex-col lg:items-center">
          <img
            src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/home_icon.png"
            alt="Home"
            className="h-6 w-6 cursor-pointer hover:bg-gray-100 sm:h-7 sm:w-7"
          />
          <img
            src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/message_icon.png"
            alt="Message"
            className="h-6 w-6 cursor-pointer hover:bg-primaryLight sm:h-7 sm:w-7"
          />
          <img
            src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/add_icon.png"
            alt="Add"
            className="h-6 w-6 cursor-pointer hover:bg-primaryLight sm:h-7 sm:w-7"
          />
          <img
            src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/setting_icon.png"
            alt="Settings"
            className="h-6 w-6 cursor-pointer hover:bg-primaryLight sm:h-7 sm:w-7"
          />
          <img
            src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/profile_icon.png"
            alt="Profile"
            className="h-6 w-6 cursor-pointer hover:bg-primaryLight sm:h-7 sm:w-7"
          />
        </div>

        {/* Tenant Information */}
        <div className="relative mx-auto -mt-48 min-h-fit pt-16">
          <div className="min-h-fit w-auto rounded-tl-full rounded-tr-full bg-white p-4">
            <div className="flex h-[503px] w-[400px] flex-col items-center justify-around gap-4 space-y-1.5 rounded-tl-full rounded-tr-full border border-[#242760] border-opacity-30 bg-white pb-5 pt-7 text-center shadow-lg">
              <div className="size-56 justify-items-center rounded-full">
                <img
                  src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/tenant_img.png"
                  alt="Tenant"
                  className="h-auto min-w-60 rounded-full"
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
              <p className="text-lg text-gray-700">Interior Designer</p>
              <div className="inline-flex h-fit w-full justify-around gap-3 px-4 py-5">
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
          <div className="600 mb-4 flex justify-around">
            <h1 className="text-2xl font-bold text-black underline">
              Rental List
            </h1>
            <h1 className="text-2xl font-semibold text-gray-500/75">Favs</h1>
            <div className="w-40"></div>
          </div>
          <div className="mx-auto grid w-[1000px] grid-cols-4 pl-7">
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rental1.png"
              alt="Rental 1"
              className="rounded-lg"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rental2.png"
              alt="Rental 2"
              className="rounded-lg"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rental3.png"
              alt="Rental 3"
              className="rounded-lg"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rental4.png"
              alt="Rental 4"
              className="rounded-lg"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rental5.png"
              alt="Rental 5"
              className="rounded-lg"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rental6.png"
              alt="Rental 6"
              className="rounded-lg"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rental7.png"
              alt="Rental 7"
              className="rounded-lg"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rental8.png"
              alt="Rental 8"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
