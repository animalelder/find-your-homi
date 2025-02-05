import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOutAction = async () => {
    "use server";

    const supabase = await createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return user ? (
    <div className="relative flex items-center gap-4">
      <form action={signOutAction}>
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
