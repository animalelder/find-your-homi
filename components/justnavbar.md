"use client";

import { Link } from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger icon

const Navbar = () => {
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
<div className="absolute left-0 top-6 flex w-full items-center justify-center px-4 sm:px-12">
{/_ Navbar _/}
<nav className="z-50 flex w-full max-w-6xl items-center justify-between rounded-full bg-white px-6 py-4 shadow-lg">
{/_ Logo _/}
<div>
<Image src={logo} alt="Logo" className="h-10" />
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
          <Link to="/">
            <li
              className={`${
                pathname === "/" ? "bg-primaryGreen rounded-xl px-4 py-1" : ""
              } hover:bg-primaryGreen cursor-pointer hover:rounded-xl hover:px-4 hover:py-1 hover:text-gray-800`}
            >
              Home
            </li>
          </Link>
          <Link to="/properties">
            <li
              className={`${
                pathname === "/properties"
                  ? "bg-primaryGreen rounded-xl px-4 py-1"
                  : ""
              } hover:bg-primaryGreen cursor-pointer hover:rounded-xl hover:px-4 hover:py-1 hover:text-gray-800`}
            >
              Properties
            </li>
          </Link>
          <Link to="/profile">
            <li
              className={`${
                pathname === "/homi-match"
                  ? "bg-primaryGreen rounded-xl px-4 py-1"
                  : ""
              } hover:bg-primaryGreen cursor-pointer hover:rounded-xl hover:px-4 hover:py-1 hover:text-gray-800`}
            >
              Homi Match
            </li>
          </Link>
          <Link to="/about-us">
            <li
              className={`${
                pathname === "/about-us"
                  ? "bg-primaryGreen rounded-xl px-4 py-1"
                  : ""
              } hover:bg-primaryGreen cursor-pointer hover:rounded-xl hover:px-4 hover:py-1 hover:text-gray-800`}
            >
              About Us
            </li>
          </Link>
        </ul>

        {/* Desktop Login Button with Dropdown */}
        <div className="relative hidden space-x-4 sm:flex" ref={dropdownRef}>
          <button
            className="bg-primaryGreen cursor-pointer rounded-full px-6 py-2 text-gray-700 hover:bg-white"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Login
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-1 top-full z-50 mt-2 w-40 rounded-md bg-white shadow-lg">
              <ul className="space-y-2 text-sm text-gray-700">
                <Link to="/sign-in">
                  <li className="hover:bg-primaryGreen block cursor-pointer px-4 py-2 hover:rounded-full hover:text-white">
                    Tenant
                  </li>
                </Link>
                <Link to="/sign-up">
                  <li className="hover:bg-primaryGreen block cursor-pointer px-4 py-2 hover:rounded-full hover:text-white">
                    Landlord
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>

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
              <Link to="/">
                {" "}
                <li className="hover:text-primaryGreen cursor-pointer">Home</li>
              </Link>
              <Link to="/properties">
                {" "}
                <li className="hover:text-primaryGreen cursor-pointer">
                  Properties
                </li>
              </Link>
              <Link to="/homi-match">
                <li className="hover:text-primaryGreen cursor-pointer">
                  Homi Match
                </li>
              </Link>
              <li className="hover:text-primaryGreen cursor-pointer">
                About Us
              </li>
            </ul>
            <div className="relative">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="bg-primaryGreen cursor-pointer rounded-full px-6 py-3 text-lg text-white hover:bg-primaryLight"
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
                    <Link to="/sign-in">
                      {" "}
                      <li className="hover:bg-primaryGreen block cursor-pointer px-4 py-2 hover:rounded-full hover:text-white">
                        Rental
                      </li>
                    </Link>
                    <Link to="/sign-up">
                      {" "}
                      <li className="hover:bg-primaryGreen block cursor-pointer px-4 py-2 hover:rounded-full hover:text-white">
                        Landlord
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>

);
};

export default Navbar;
