import Navbar from "@/components/navbar";

const Profile = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="/profile_bg.png" alt="Profile Background" className="w-full" />
      {/* Navbar */}
      <div className="absolute -top-5 left-0 flex w-full items-center justify-center px-4 sm:px-12">
        <Navbar />
      </div>
      <div className="flex w-full flex-col gap-4 p-4 lg:flex-row">
        {/* Sidebar Icons */}
        <div className="hidden w-full items-center justify-center gap-4 lg:flex lg:w-[250px] lg:flex-col lg:items-start">
          <img
            src="/home_icon.png"
            alt="Home"
            className="h-6 w-6 cursor-pointer hover:rounded-full hover:bg-gray-100 sm:h-7 sm:w-7"
          />
          <img
            src="/message_icon.png"
            alt="Message"
            className="h-6 w-6 cursor-pointer hover:rounded-3xl hover:bg-primaryLight sm:h-7 sm:w-7"
          />
          <img
            src="/add_icon.png"
            alt="Add"
            className="h-6 w-6 cursor-pointer hover:rounded-3xl hover:bg-primaryLight sm:h-7 sm:w-7"
          />
          <img
            src="/setting_icon.png"
            alt="Settings"
            className="h-6 w-6 cursor-pointer hover:rounded-3xl hover:bg-primaryLight sm:h-7 sm:w-7"
          />
          <img
            src="/profile_bg.png"
            alt="Profile"
            className="h-6 w-6 cursor-pointer hover:rounded-3xl hover:bg-primaryLight sm:h-7 sm:w-7"
          />
        </div>

        {/* Tenant Information */}
        <div className="relative mx-auto -mt-10 pt-16 md:-mt-40">
          <div className="flex min-h-[360px] w-[260px] flex-col items-center gap-4 rounded-tl-full rounded-tr-full border bg-white pt-7 text-center shadow-sm sm:min-h-[400px] sm:w-[300px]">
            <div className="h-36 w-36 rounded-full sm:h-40 sm:w-40">
              <img
                src="/tenant_img.png"
                alt="Tenant"
                className="h-full w-full rounded-full"
              />
            </div>
            <h4 className="text-lg font-semibold sm:text-xl">Amy Peters</h4>
            <p className="text-sm text-gray-700">Interior Designer</p>
            <div className="flex items-center gap-2 text-gray-500">
              <img
                src="/location_icon.png"
                alt="Location"
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <p className="text-xs sm:text-sm">Toronto, Canada</p>
            </div>
            <div className="flex w-full gap-4 px-4">
              <button className="w-full rounded-lg bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600 sm:text-base">
                Edit Profile
              </button>
              <button className="w-full rounded-lg bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600 sm:text-base">
                Add HOMI
              </button>
            </div>
          </div>
        </div>

        {/* Rental Images */}
        <div className="flex-2 w-full lg:w-auto">
          <div className="mb-4 flex flex-wrap justify-between gap-6 text-gray-600">
            <p className="font-semibold">Rental List</p>
            <p className="font-semibold text-gray-400">FAVS</p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            <img src="/rental1.png" alt="Rental 1" className="rounded-lg" />
            <img src="/rental2.png" alt="Rental 2" className="rounded-lg" />
            <img src="/rental3.png" alt="Rental 3" className="rounded-lg" />
            <img src="/rental4.png" alt="Rental 4" className="rounded-lg" />
            <img src="/rental5.png" alt="Rental 5" className="rounded-lg" />
            <img src="/rental6.png" alt="Rental 6" className="rounded-lg" />
            <img src="/rental7.png" alt="Rental 7" className="rounded-lg" />
            <img src="/rental8.png" alt="Rental 8" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
