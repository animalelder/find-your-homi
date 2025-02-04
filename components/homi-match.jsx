import match_btn from "https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//match_btn.png";
import Image from "next/image";

const HomiMatch = () => {
  return (
    <div className="mx-4 mb-40 block px-4 sm:mx-[10%]">
      <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src={match_btn}
            width={310}
            height={232}
            alt="Match with Roommate"
            className="h-auto w-full"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h3 className="mb-4 text-3xl font-bold text-primaryGreen">
            Match with your ideal roommate effortlessly
          </h3>
          <p className="mb-6 text-gray-600">
            Find roommates that fit your lifestyle and budget seamlessly, making
            shared living comfortable and stress-free.
          </p>
          <button className="mb-6 rounded-full bg-primaryGreen px-6 py-3">
            Get Started
          </button>
          <div className="flex justify-center lg:justify-end">
            <Image
              src={match_btn}
              width={310}
              height={232}
              alt="Get Started Button"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomiMatch;
