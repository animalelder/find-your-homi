import Image from "next/image";

const PropertyFooter = () => {
  return (
    <div className="inset-x-0 mx-auto place-items-center border-t border-gray-700 pt-6 font-['Urbanist']">
      <div className="mx-auto flex w-full flex-col space-x-16 md:flex-row md:justify-center md:gap-32">
        <div className="basis-1/2">
          <h3 className="mb-4 text-3xl font-medium text-deepBlue">
            Start Your Real Estate Journey Today
          </h3>
          <p className="mb-6 w-full text-sm text-gray-600">
            Your dream property is just a click away. Whether you&apos;re
            looking for a new home, a strategic investment, or expert real
            estate advice, Estatein is here to assist you every step of the way.
            Take the first step towards your real estate goals and explore our
            available properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <div className="w-fit">
          <button className="w-fit text-nowrap rounded-md bg-primaryGreen px-5 py-3 text-deepBlue shadow-md hover:bg-primaryBlue">
            Explore Properties
          </button>
        </div>
      </div>
      <div className="mx-14 my-6 h-px w-full max-w-[1200px] border-y border-gray-300 bg-slate-800" />
      <div className="flex flex-col items-start gap-32 md:flex-row">
        <div className="flex flex-col items-start gap-7">
          <Image
            src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//homi_logo.png"
            width={392}
            height={143}
            alt="Homi Logo"
            className="h-auto w-[179px]"
          />
          <div className="relative w-full max-w-sm">
            <Image
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//email_iconSmall.png"
              width={40}
              height={40}
              alt="Email Icon"
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-primaryGreen"
            />
            <Image
              src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//send_icon.png"
              width={50}
              height={50}
              alt="Send Icon"
              className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform cursor-pointer"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-5">
          <div className="text-primaryGreen">
            <p className="mb-2 font-bold">Home</p>
            <ul className="space-y-4">
              <li>Hero Section</li>
              <li>Features</li>
              <li>Properties</li>
              <li>Testimonials</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="text-deepBlue">
            <p className="mb-2 text-gray-500">About Us</p>
            <ul className="space-y-4">
              <li>Our Story</li>
              <li>Our Works</li>
              <li>How it Works</li>
              <li>Our Team</li>
              <li>Our Clients</li>
            </ul>
          </div>
          <div className="text-deepBlue">
            <p className="mb-2 text-gray-500">Properties</p>
            <ul className="space-y-4">
              <li>Portfolio</li>
              <li>Categories</li>
            </ul>
          </div>
          <div className="text-deepBlue">
            <p className="mb-2 text-gray-500">Services</p>
            <ul className="space-y-4">
              <li>Valuation Mastery</li>
              <li>Strategic Marketing</li>
              <li>Negotiation Wizardry</li>
              <li>Closing Success</li>
              <li>Property Management</li>
            </ul>
          </div>
          <div className="text-deepBlue">
            <p className="mb-2 text-gray-500">Contact Us</p>
            <ul className="space-y-4">
              <li>Contact Form</li>
              <li>Our Offices</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 h-16 w-full bg-blue-700"></div>
    </div>
  );
};

export default PropertyFooter;
