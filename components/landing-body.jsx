import Image from "next/image";

const LandingBody = () => {
  const listings = [
    {
      bg: "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//home1.png",
      title: "Apartment in Toronto",
      description: "Region Home apartment",
      price: "$1,300/m",
    },
    {
      bg: "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//home2.png",
      title: "Condo in Toronto",
      description: "Resource Home apartment",
      price: "$2,500/m",
    },
    {
      bg: "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//home3.png",
      title: "Condo in Toronto",
      description: "Region Home apartment",
      price: "$2,300/m",
    },
  ];

  return (
    <div className="w-full flex-col items-center justify-start bg-white">
      <div id="find-home" className="w-full bg-primaryLight px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-1">
          <h2 className="mb-4 pt-6 text-center text-5xl font-bold">
            Find your home with{" "}
            <span className="font-['Urbanist'] font-black text-primaryGreen">
              HOMI
            </span>
          </h2>
          <h3 className="pb-8 text-center text-xl font-medium text-gray-800">
            Discover the ease of finding your perfect living arrangement with
            Homi.
          </h3>
          <p className="w-[700px] text-pretty pb-6 text-left indent-9 text-base text-gray-950">
            Whether you&apos;re searching for a cozy apartment, the ideal
            roommate-or both-our platform connects you with trusted listings,
            tailored matches with verified users, and seamless communication-all
            in one place. <b>Your next home is just a few clicks away!</b>
          </p>
        </div>
        <div className="my-8 flex items-center justify-center gap-5">
          <button className="mb-8 rounded-lg bg-buttonRed px-6 py-2 text-xl text-white hover:bg-red-500">
            Browse Now
          </button>
        </div>

        {/* Display Listings */}
        <div className="flex items-center justify-center gap-5">
          <Image
            src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/livelisting/1.png"
            alt="Details card for rental 1"
            width={363}
            height={480}
          />
          <Image
            src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/livelisting/2.png"
            alt="Details card for rental 2"
            width={362}
            height={480}
          />
          <Image
            src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/livelisting/3.png"
            alt="Details card for rental 3"
            width={363}
            height={480}
          />
        </div>

        {/* Carousel Dots */}
        <div className="mt-4 flex justify-center">
          {listings.map((_, index) => (
            <button
              key={index}
              className={`mx-2 h-3 w-3 rounded-full ${index === 1 ? "bg-primaryGreen" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
      <div
        id="match"
        className="grid min-h-fit w-full grid-cols-1 place-items-center gap-12 space-y-11 px-11 py-20"
      >
        <Image
          unoptimized
          src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/home/homihelps.svg"
          alt="Homi helps you find the right people and the right living space"
          width={1287}
          height={544}
          className="mx-auto h-auto w-fit object-scale-down"
        />
        <Image
          unoptimized
          src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/home/match.svg"
          alt="Homi helps you find the right people and the right living space"
          width={1170}
          height={543}
          className="mx-auto h-auto w-fit object-scale-down"
        />
      </div>
      <div
        id="testimonials"
        className="mb-auto block px-4 pt-10 sm:px-6 lg:px-20"
      >
        <div className="mb-28 w-full text-center">
          <h1 className="text-6xl font-bold text-gray-950 drop-shadow">
            What people say about us
          </h1>
        </div>
        <div className="flex items-center justify-between gap-6 bg-[url('https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//landlord_img.png')] bg-[size:630px_auto] bg-bottom bg-no-repeat px-10 lg:flex-row lg:gap-10">
          {/* Testimonial 1 */}
          <div className="h-auto max-w-[370px] rounded-bl-3xl rounded-br-3xl bg-white p-4 shadow-xl lg:my-44">
            <h4 className="mb-2 text-lg font-medium text-black">Testimonial</h4>
            <hr className="mb-4 border-gray-300" />
            <div>
              <div className="flex gap-4">
                <Image
                  src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//Joshua.png"
                  width={58}
                  height={58}
                  alt="Joshua"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="">
                  <p className="font-medium text-gray-950">Joshua</p>
                  <span className="text-sm text-black/50">Just Now</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-950">
                Listing my property on Homi was straightforward, and I started
                getting inquiries within hours. The in-app chat made tenant
                communication so easy and professional.
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="h-auto max-w-[370px] rounded-bl-3xl rounded-br-3xl bg-white p-4 shadow-xl lg:mt-[-300px]">
            <h4 className="mb-2 text-lg font-medium text-black">Testimonial</h4>
            <hr className="mb-4 border-gray-300" />
            <div>
              <div className="flex gap-4">
                <Image
                  src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//Nora.png"
                  width={58}
                  height={58}
                  alt="Nora"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="">
                  <p className="font-medium text-gray-950">Nora</p>
                  <span className="text-sm text-black/50">Just Now</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-950">
                With Homi, I didn&apos;t just find tenants faster, I found the
                right tenants. The verification process gave me peace of mind,
                and payments were hassle-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBody;
