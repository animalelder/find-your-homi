import AuthButton from "@/components/auth-button";
import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <div className="relative inset-x-0">
      <div className="absolute left-1/2 top-6 flex w-full -translate-x-1/2 items-center justify-center px-4 sm:px-12">
        {/* Navbar */}
        <nav className="group z-50 flex w-full max-w-6xl items-center justify-between rounded-full bg-white px-6 py-4 font-['Urbanist'] text-lg font-medium tracking-widest shadow-white hover:shadow-lg hover:outline hover:outline-primaryGreen/65">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//logo.png"
                width={40}
                height={40}
                alt="Logo"
                className="h-10"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="hidden space-x-8 text-lg text-gray-700 sm:flex">
            <Link href="/">
              <li
                className={`cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-white`}
              >
                Home
              </li>
            </Link>
            <Link href="/properties">
              <li
                className={`cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-white`}
              >
                Properties
              </li>
            </Link>
            <Link href="/chat">
              <li
                className={`cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-white`}
              >
                Homi Match
              </li>
            </Link>
            <Link href="/profile">
              <li
                className={`cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-white`}
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
