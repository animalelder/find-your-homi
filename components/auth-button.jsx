import { signOut } from "@/app/signout";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="relative flex items-center gap-4">
      <form action={signOut}>
        <button className="hover:outline-spacing-1 rounded-full bg-primaryGreen px-6 py-2 text-gray-950 hover:bg-primaryGreen/80 hover:outline hover:outline-primaryGreen">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/sign-in"
      className="rounded-full bg-primaryGreen px-6 py-2 text-gray-950 hover:border-spacing-1 hover:border hover:border-primaryGreen hover:bg-primaryGreen/50"
    >
      Login
    </Link>
  );
}
