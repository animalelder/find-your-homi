"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger icon

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For desktop dropdown
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // For mobile nav
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // For mobile login dropdown
  const dropdownRef = useRef(null); // Ref for the desktop dropdown menu
  const mobileDropdownRef = useRef(null); // Ref for the mobile dropdown menu

  const pathname = usePathname(); // Get the current location

  const rentalButton = pathname === "/" ? "block" : "hidden";

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
    <div className="absolute left-0 top-6 flex w-full items-center justify-center px-4 sm:px-12">
      {/* Navbar */}
      <nav className="z-50 flex w-full max-w-6xl items-center justify-between rounded-full bg-white px-6 py-4 shadow-lg">
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="text-2xl text-gray-700"
          >
            <FaBars />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="hidden space-x-8 text-lg text-gray-700 sm:flex">
          <li
            className={`${
              pathname === "/" ? "rounded-xl bg-primary px-4 py-1" : ""
            } cursor-pointer hover:rounded-xl hover:bg-primary hover:px-4 hover:py-1 hover:text-gray-800`}
          >
            <a href="/">Home</a>
          </li>
          <li
            className={`${
              pathname === "/properties"
                ? "rounded-xl bg-primary px-4 py-1"
                : ""
            } cursor-pointer hover:rounded-xl hover:bg-primary hover:px-4 hover:py-1 hover:text-gray-800`}
          >
            <Link href="/properties">Properties</Link>
          </li>
          <li
            className={`${
              pathname === "/homi-match"
                ? "rounded-xl bg-primary px-4 py-1"
                : ""
            } cursor-pointer hover:rounded-xl hover:bg-primary hover:px-4 hover:py-1 hover:text-gray-800`}
          >
            <Link href="/homi-match">Homi Match</Link>
          </li>
          <li
            className={`${
              pathname === "/about-us" ? "rounded-xl bg-primary px-4 py-1" : ""
            } cursor-pointer hover:rounded-xl hover:bg-primary hover:px-4 hover:py-1 hover:text-gray-800`}
          >
            <Link href="/about-us">About Us</Link>
          </li>
        </ul>

        {/* Desktop Login Button with Dropdown */}
        <div className="relative hidden space-x-4 sm:flex" ref={dropdownRef}>
          <button
            className="cursor-pointer rounded-full bg-primary px-6 py-2 text-gray-700 hover:bg-white"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Login
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-1 top-full z-50 mt-2 w-40 rounded-md bg-white shadow-lg">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="block cursor-pointer px-4 py-2 hover:rounded-full hover:bg-primary hover:text-white">
                  <Link href="/sign-in">Tenant</Link>
                </li>
                <li className="block cursor-pointer px-4 py-2 hover:rounded-full hover:bg-primary hover:text-white">
                  <Link href="/sign-up">Landlord</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Nav Links */}
      {isMobileNavOpen && (
        <div className="absolute left-0 top-0 z-40 flex h-[60vh] w-full flex-col items-center justify-center bg-white">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileNavOpen(false)}
            className="absolute right-4 top-4 text-2xl text-gray-700"
          >
            <FaTimes />
          </button>
          <ul className="mb-8 space-y-6 text-lg text-gray-700">
            {" "}
            <li className="cursor-pointer hover:text-primary">
              <Link href="/">Home</Link>
            </li>{" "}
            <li className="cursor-pointer hover:text-primary">
              <Link href="/properties">Properties</Link>
            </li>
            <li className="cursor-pointer hover:text-primary">
              <Link href="/homi-match">Homi Match</Link>
            </li>
            <li className="cursor-pointer hover:text-primary">
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
          <div className="relative">
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="hover:bg-primaryLight cursor-pointer rounded-full bg-primary px-6 py-3 text-lg text-white"
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
                  {" "}
                  <li className="block cursor-pointer px-4 py-2 hover:rounded-full hover:bg-primary hover:text-white">
                    <Link href="/sign-in">Rental</Link>
                  </li>{" "}
                  <li className="block cursor-pointer px-4 py-2 hover:rounded-full hover:bg-primary hover:text-white">
                    <Link href="/sign-up">Landlord</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Post a Rental Button */}
      <button
        className={`${rentalButton} z-50 cursor-pointer whitespace-nowrap rounded-full bg-gray-200 px-8 py-5 text-gray-800 transition-colors duration-300 hover:bg-primary hover:text-white`}
      >
        Post a Rental
      </button>
    </div>
  );
}
