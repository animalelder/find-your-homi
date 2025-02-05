import AuthButton from "@/components/auth-button";
import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  // const pathname = usePathname(); // Get the current location
  // const supabase = createClient();
  // const [session, setSession] = useState(null);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
  //   });

  //   const { data } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });

  //   return () => data.subscription.unsubscribe();
  // }, []);

  // const rentalButton = pathname === "/" ? "block" : "hidden";

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
            <Link href="/">
              <li
                className={`cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-gray-800`}
              >
                Home
              </li>
            </Link>
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
            <li
              className={`cursor-pointer rounded-xl px-4 py-1 hover:bg-primaryGreen hover:text-gray-800`}
            >
              Profile
            </li>
          </ul>

          <AuthButton />
        </nav>

        {/* Post a Rental Button */}
        <button
          className={`z-50 ml-4 cursor-pointer whitespace-nowrap rounded-full bg-gray-200 px-8 py-5 text-gray-800 transition-colors duration-300 hover:bg-primaryGreen hover:text-white`}
        >
          Post a Rental
        </button>
      </div>
    </div>
  );
}
