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
    <div className="absolute top-6 left-0 w-full px-4 sm:px-12 flex items-center justify-center">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-6 bg-white rounded-full shadow-lg w-full max-w-6xl z-50">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-10" />
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
        <ul className="hidden sm:flex space-x-8 text-lg text-gray-700">
          <Link to="/">
            <li
              className={`${
                pathname === "/" ? "bg-primary  rounded-xl px-4 py-1" : ""
              } hover:text-gray-800 hover:bg-primary hover:rounded-xl hover:px-4 hover:py-1 cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link to="/properties">
            <li
              className={`${
                pathname === "/properties"
                  ? "bg-primary rounded-xl px-4 py-1"
                  : ""
              } hover:text-gray-800 hover:bg-primary hover:rounded-xl hover:px-4 hover:py-1 cursor-pointer`}
            >
              Properties
            </li>
          </Link>
          <Link to="/profile">
            <li
              className={`${
                pathname === "/homi-match"
                  ? "bg-primary rounded-xl px-4 py-1"
                  : ""
              } hover:text-gray-800 hover:bg-primary hover:rounded-xl hover:px-4 hover:py-1 cursor-pointer`}
            >
              Homi Match
            </li>
          </Link>
          <Link to="/about-us">
            <li
              className={`${
                pathname === "/about-us"
                  ? "bg-primary rounded-xl px-4 py-1"
                  : ""
              } hover:text-gray-800 hover:bg-primary hover:rounded-xl hover:px-4 hover:py-1 cursor-pointer`}
            >
              About Us
            </li>
          </Link>
        </ul>

        {/* Desktop Login Button with Dropdown */}
        <div className="relative hidden sm:flex space-x-4" ref={dropdownRef}>
          <button
            className="bg-primary hover:bg-white text-gray-700 px-6 py-2 rounded-full cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Login
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 right-1 bg-white shadow-lg rounded-md w-40 z-50">
              <ul className="space-y-2 text-sm text-gray-700">
                <Link to="/sign-in">
                  <li className="cursor-pointer block px-4 py-2 hover:bg-primary hover:rounded-full hover:text-white">
                    Tenant
                  </li>
                </Link>
                <Link to="/sign-up">
                  <li className="cursor-pointer block px-4 py-2 hover:bg-primary hover:rounded-full hover:text-white">
                    Landlord
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Nav Links */}
        {isMobileNavOpen && (
          <div className="absolute top-0 left-0 w-full h-[60vh] bg-white z-40 flex flex-col items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileNavOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-700"
            >
              <FaTimes />
            </button>
            <ul className="space-y-6 text-lg text-gray-700 mb-8">
              <Link to="/">
                {" "}
                <li className="hover:text-primary cursor-pointer">Home</li>
              </Link>
              <Link to="/properties">
                {" "}
                <li className="hover:text-primary cursor-pointer">
                  Properties
                </li>
              </Link>
              <Link to="/homi-match">
                <li className="hover:text-primary cursor-pointer">
                  Homi Match
                </li>
              </Link>
              <li className="hover:text-primary cursor-pointer">About Us</li>
            </ul>
            <div className="relative">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="bg-primary hover:bg-primaryLight text-white px-6 py-3 rounded-full text-lg cursor-pointer"
              >
                Login
              </button>

              {/* Mobile Dropdown Menu */}
              {isMobileDropdownOpen && (
                <div
                  className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-md w-40 z-50"
                  ref={mobileDropdownRef}
                >
                  <ul className="space-y-2 text-sm text-gray-700">
                    <Link to="/sign-in">
                      {" "}
                      <li className="cursor-pointer block px-4 py-2 hover:bg-primary hover:rounded-full hover:text-white">
                        Rental
                      </li>
                    </Link>
                    <Link to="/sign-up">
                      {" "}
                      <li className="cursor-pointer block px-4 py-2 hover:bg-primary hover:rounded-full hover:text-white">
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
