"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For desktop dropdown
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // For mobile nav
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // For mobile login dropdown
  const dropdownRef = useRef(null); // Ref for the desktop dropdown menu
  const mobileDropdownRef = useRef(null); // Ref for the mobile dropdown menu

  const pathname = usePathname(); // Get the current location

  // Close the dropdown menu when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the mobile dropdown menu when clicking outside (mobile)
  useEffect(() => {
    const handleClickOutsideMobile = (event) => {
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setIsMobileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMobile);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMobile);
    };
  }, []);

  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero_img.png')" }}
      >
        <div className="absolute left-0 top-6 flex w-full items-center justify-center gap-5 px-4 sm:px-12">
          {/* Navbar */}
          <nav className="z-50 flex w-full max-w-6xl items-center justify-between rounded-full border-2 border-[#fafcfe] bg-white px-6 py-4 shadow-lg">
            {/* Logo */}
            <div>
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//logo.png"
                width={80}
                height={80}
                alt="Logo"
                className="size-10"
              />
            </div>

            {/* Navigation as */}
            <ul className="hidden space-x-8 text-lg text-gray-700 sm:flex">
              <li
                className={`${
                  pathname === "/" ? "bg-altGreen" : ""
                } cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-gray-800`}
              >
                <Link href="/">Home</Link>
              </li>

              <li
                className={`${
                  pathname === "/properties" ? "bg-altGreen" : ""
                } cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-gray-800`}
              >
                <Link href="/properties">Properties</Link>
              </li>

              <li
                className={`${
                  pathname === "/homi-match" ? "bg-altGreen" : ""
                } cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-gray-800`}
              >
                Homi Match
              </li>
              <li
                className={`${
                  pathname === "/about-us" ? "bg-altGreen" : ""
                } cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-gray-800`}
              >
                About Us
              </li>
            </ul>

            {/* Desktop Login Button with Dropdown */}
            <div
              className="relative hidden space-x-4 sm:flex"
              ref={dropdownRef}
            >
              <button
                className="cursor-pointer rounded-full bg-primaryGreen px-6 py-2 text-gray-700 hover:text-white hover:ring-2 hover:ring-altGreen"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Login
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-1 top-full z-50 mt-2 w-40 rounded-md bg-white shadow-lg">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <a href="/sign-in">
                      <li className="block cursor-pointer px-4 py-2 hover:bg-primaryGreen hover:text-white">
                        Tenant
                      </li>
                    </a>
                    <a href="/sign-up">
                      <li className="block cursor-pointer px-4 py-2 hover:bg-primaryGreen hover:text-white">
                        Landlord
                      </li>
                    </a>
                  </ul>
                </div>
              )}
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden">
              {isMobileNavOpen ? (
                <button
                  onClick={() => setIsMobileNavOpen(false)}
                  className="text-2xl text-gray-700"
                >
                  &times; {/* Close Icon */}
                </button>
              ) : (
                <button
                  onClick={() => setIsMobileNavOpen(true)}
                  className="text-2xl text-gray-700"
                >
                  &#9776; {/* Hamburger Icon */}
                </button>
              )}
            </div>
          </nav>

          {/* Mobile Nav as */}
          {isMobileNavOpen && (
            <div className="absolute left-0 top-0 z-40 flex h-[60vh] w-full flex-col items-center justify-center bg-white">
              <ul className="mb-8 space-y-6 text-lg text-gray-700">
                {" "}
                <li className="cursor-pointer hover:text-primaryGreen">
                  <Link href="/">Home</Link>
                </li>{" "}
                <Link>
                  <li className="cursor-pointer hover:text-primaryGreen">
                    Properties
                  </li>
                </Link>
                <a href="/profile">
                  <li className="cursor-pointer hover:text-primaryGreen">
                    Homi Match
                  </li>
                </a>
                <li className="cursor-pointer hover:text-primaryGreen">
                  About Us
                </li>
              </ul>
              <div className="relative">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="cursor-pointer rounded-full bg-primaryGreen px-6 py-3 text-lg text-white hover:bg-primaryLight"
                >
                  Login
                </button>

                {/* Mobile Dropdown Menu */}
                {isMobileDropdownOpen && (
                  <div
                    className="absolute left-0 top-full z-50 mt-2 w-40 rounded-md bg-white shadow-lg"
                    ref={mobileDropdownRef}
                  >
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="block cursor-pointer px-4 py-2 hover:rounded-full hover:bg-primaryGreen hover:text-white">
                        Rental
                      </li>
                      <li className="block cursor-pointer px-4 py-2 hover:rounded-full hover:bg-primaryGreen hover:text-white">
                        Landlord
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Post a Rental Button */}
          <button className="z-50 cursor-pointer whitespace-nowrap rounded-full bg-gray-200 px-8 py-5 text-gray-800 transition-colors duration-300 hover:bg-primaryGreen hover:text-white sm:block">
            Post a Rental
          </button>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h2 className="max-w-2xl text-3xl font-bold leading-relaxed tracking-normal drop-shadow-lg sm:text-5xl md:text-6xl">
            Welcome to{" "}
            <span className="text-primaryGreen drop-shadow">HOMI</span>
            <div className="py-1">Renting made</div>
            <div className="py-1 drop-shadow-lg">
              <span className="playfair-display-italic tracking-wide">
                Simple
              </span>{" "}
              and{" "}
              <span className="playfair-display-italic tracking-wider drop-shadow-xl">
                Seamless
              </span>
            </div>
          </h2>
          <button className="mt-6 cursor-pointer rounded-full bg-primaryGreen px-6 py-3 text-lg text-green-950 hover:bg-primaryLight hover:text-gray-700">
            Find Your Home
          </button>
        </div>
      </div>

      {/* Featured Image */}
      <div className="flex w-full justify-center py-8">
        <Image
          src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//featured.png"
          width={1046}
          height={95}
          alt="Featured"
          className="w-11/12 max-w-5xl rounded-lg"
        />
      </div>
    </div>
  );
}
