import { NavBar } from "@/components/nav-bar";
import {
  CirclePlus,
  CircleUserRound,
  MapPin,
  MessageSquareText,
  Settings,
} from "lucide-react";
import Link from "next/link";

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
          <Link href="/chat">
            <MessageSquareText className="size-8 animate-[bounce_2s_infinite] cursor-pointer fill-primaryGreen delay-150 hover:fill-deepGreen" />
          </Link>
          <CirclePlus className="size-8 cursor-pointer hover:fill-primaryGreen" />
          <Settings className="size-8 cursor-pointer hover:fill-primaryGreen" />
          <CircleUserRound color="#31B994" className="size-8" />
        </div>

        {/* Tenant Information */}
        <div className="relative mx-auto -mt-48 min-h-fit pt-16">
          <div className="min-h-fit w-auto rounded-tl-full rounded-tr-full bg-white p-4">
            <div className="flex h-[553px] w-[400px] flex-col items-center justify-around gap-4 space-y-1.5 rounded-tl-full rounded-tr-full border border-x-2 border-indigo-800 border-opacity-30 bg-white pb-5 pt-7 text-center shadow-lg">
              <div className="size-56 justify-items-center rounded-full">
                <img
                  src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/tenant_img.png"
                  alt="Tenant"
                  className="h-auto min-w-52 rounded-full"
                />
              </div>
              <h4 className="text-3xl font-semibold">Amy Peters</h4>
              <div className="flex items-center gap-2 text-gray-950">
                <MapPin className="size-6 fill-[#ff5757]" />
                <p className="text-lg font-medium text-gray-600">
                  Toronto, Canada
                </p>
              </div>
              <p className="font-['Urbanist'] text-xl font-semibold text-black">
                Marketing Analyst
              </p>
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
          <div className="600 mb-4 flex justify-around tracking-wide">
            <h1 className="text-2xl font-semibold text-black underline underline-offset-8">
              Suggested Properties
            </h1>
            <h1 className="text-2xl font-semibold text-gray-500/75 underline-offset-8 hover:text-black hover:underline">
              Saved Favorites
            </h1>
            <div className="w-40"></div>
          </div>
          <div className="mx-auto grid w-[1000px] grid-cols-4 gap-2 pl-7">
            <Link href="/property-details">
              <img
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals0.png"
                alt="Rental 1"
                className="h-full cursor-pointer rounded-lg object-cover hover:opacity-90 hover:shadow-inner hover:drop-shadow-md"
              />
            </Link>
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals5.png"
              alt="Rental 2"
              className="h-full cursor-pointer rounded-lg object-cover"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals1.png"
              alt="Rental 3"
              className="h-full cursor-pointer rounded-lg object-cover"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals3.png"
              alt="Rental 4"
              className="h-full cursor-pointer rounded-lg object-cover"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals6.png"
              alt="Rental 5"
              className="h-full cursor-pointer rounded-lg object-cover"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals4.png"
              alt="Rental 6"
              className="h-full cursor-pointer rounded-lg object-cover"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals2.png"
              alt="Rental 7"
              className="h-full cursor-pointer rounded-lg object-cover"
            />
            <img
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/profile/rentals7.png"
              alt="Rental 8"
              className="h-full cursor-pointer rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
