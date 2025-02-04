import Image from "next/image";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-stretch lg:flex-row">
      {/* Background Image Section */}
      <div className="relative hidden w-1/2 lg:block">
        <Image
          src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//home3.png"
          width={532}
          height={714}
          alt="Create Profile Background"
          className="h-full w-full object-cover"
        />
        <Image
          src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//homi_logo.png"
          alt="Homi Logo"
          width={392}
          height={143}
          className="absolute left-10 top-10 w-32"
        />
        <div className="absolute bottom-0 left-0 h-[300px] w-full bg-black bg-opacity-70 p-4 text-white">
          <h3 className="w-[170px] pl-5 text-2xl font-semibold">
            Welcome to <span className="text-3xl font-bold">HOMI</span>
          </h3>
          <div className="flex items-center gap-2 pl-5">
            <p>Sign in or Create a new account with us.</p>
            <Image
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//arrow-right-circle.png"
              width={24}
              height={24}
              alt="Arrow Right"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
      <div className="h-full w-1/2">{children}</div>
    </div>
  );
}
