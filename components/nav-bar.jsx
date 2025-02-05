import AuthButton from "@/components/auth-button";
import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <div className="relative inset-x-0">
      <div className="absolute left-1/2 top-6 flex w-full -translate-x-1/2 items-center justify-center px-4 sm:px-12">
        {/* Navbar */}
        <nav className="z-50 flex w-full max-w-6xl items-center justify-between rounded-full bg-white px-6 py-4 shadow-lg">
          {/* Logo */}
          <div>
            <Image
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//logo.png"
              width={40}
              height={40}
              alt="Logo"
              className="h-10"
            />
          </div>

          {/* Navigation Links */}
          <ul className="hidden space-x-8 text-lg text-gray-700 sm:flex">
            <li
              className={`cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-gray-800`}
            >
              Home
            </li>
            <Link href="/properties">
              <li
                className={`cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-gray-800`}
              >
                Properties
              </li>
            </Link>
            <li
              className={`cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-gray-800`}
            >
              Homi Match
            </li>
            <Link href="/profile">
              <li
                className={`cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-gray-800`}
              >
                Profile
              </li>
            </Link>
          </ul>

          <AuthButton />
        </nav>
      </div>
    </div>
  );
}
