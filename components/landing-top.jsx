"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LandingTop = () => {
  const pathname = usePathname(); // Get the current location

  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-top"
        style={{
          backgroundImage:
            "url('https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/home/hero_img.png')",
        }}
      >
        <div className="absolute left-0 top-6 flex w-full items-center justify-center gap-5 px-4 font-['Urbanist'] text-lg font-medium tracking-wider sm:px-12">
          {/* Navbar */}
          <nav className="z-50 flex w-full max-w-6xl items-center justify-between rounded-full border-2 border-[#fafcfe] bg-white px-6 py-4 shadow-lg">
            {/* Logo */}
            <div>
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//logo.png"
                width={40}
                height={40}
                alt="Logo"
                className="object-scale-down"
              />
            </div>

            {/* Navigation as */}
            <ul className="flex space-x-8 text-gray-700">
              <li
                className={`${
                  pathname === "/" ? "bg-altGreen" : ""
                } cursor-pointer rounded-xl px-4 py-2 hover:bg-primaryGreen hover:text-white`}
              >
                <Link href="/">Home</Link>
              </li>

              <li
                className={`${
                  pathname === "/properties" ? "bg-altGreen" : ""
                } cursor-pointer rounded-xl px-4 py-2 hover:bg-primaryGreen hover:text-white`}
              >
                <Link href="/properties">Properties</Link>
              </li>

              <li
                className={`${
                  pathname === "/homi-match" ? "bg-altGreen" : ""
                } cursor-pointer rounded-xl px-4 py-2 hover:bg-primaryGreen hover:text-white`}
              >
                Homi Match
              </li>
              <li
                className={`${
                  pathname === "/about-us" ? "bg-altGreen" : ""
                } cursor-pointer rounded-xl px-4 py-2 hover:bg-primaryGreen hover:text-white`}
              >
                About Us
              </li>
            </ul>
            <Link href="/sign-in">
              <button
                className={`cursor-pointer rounded-full bg-altGreen px-4 py-2 hover:bg-primaryGreen hover:text-white`}
              >
                Sign In
              </button>
            </Link>
          </nav>

          {/* Post a Rental Button */}
          <button className="z-50 cursor-pointer whitespace-nowrap rounded-full bg-gray-200 px-8 py-5 text-gray-800 transition-colors duration-300 hover:bg-primaryGreen hover:text-white sm:block">
            Post a Rental
          </button>
        </div>

        {/* Hero Content */}
        <div className="backdrop-brightness-50/80 absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-neutral-50 backdrop-blur-[1.125px]">
          <div className="h-44 w-192"></div>
          <h1 className="max-w-2xl text-7xl font-bold leading-relaxed tracking-normal drop-shadow-md">
            Welcome to{" "}
            <span className="font-['Urbanist'] font-extrabold text-teal-400 drop-shadow-md">
              HOMI
            </span>
          </h1>
          <div className="h-11"></div>
          <h2 className="text-5xl">
            <div className="py-1">Renting made</div>
            <div className="py-1">
              <span className="playfair-display-italic tracking-wider drop-shadow-2xl">
                Simple
              </span>{" "}
              and{" "}
              <span className="playfair-display-italic tracking-wider drop-shadow-2xl">
                Seamless
              </span>
            </div>
          </h2>
          <div className="h-44 w-192"></div>
          <button className="mt-6 cursor-pointer rounded-full bg-primaryGreen px-6 py-3 text-lg font-semibold tracking-wider text-neutral-50 transition-colors duration-300 hover:bg-[#00f0d5] hover:text-gray-900">
            Find Your Home
          </button>
        </div>
      </div>

      {/* Featured Image */}
      <div className="flex w-full justify-center py-8">
        <Image
          src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/home/featuredbrands.png"
          width={624}
          height={95}
          alt="Featured"
          className="h-auto max-w-[624px]"
        />
      </div>
    </div>
  );
};

export default LandingTop;
