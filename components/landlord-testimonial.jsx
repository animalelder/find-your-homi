import Image from "next/image";

const LandlordTestimonial = () => {
  return (
    <div className="mb-auto block px-4 pt-10 sm:px-6 lg:px-20">
      <div className="mb-28 w-full text-center">
        <h1 className="text-6xl font-bold text-gray-800 drop-shadow-lg max-sm:text-3xl">
          What people say about us
        </h1>
      </div>
      <div className="flex items-center justify-between gap-6 bg-[url('https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets//landlord_img.png')] bg-contain bg-bottom bg-no-repeat lg:flex-row lg:gap-10">
        {/* Testimonial 1 */}
        <div className="h-auto max-w-[370px] rounded-bl-3xl rounded-br-3xl bg-white p-4 shadow-xl lg:my-44">
          <h4 className="mb-2 text-lg font-medium text-gray-700">
            Testimonial
          </h4>
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
                <p className="font-medium text-gray-800">Joshua</p>
                <span className="text-sm text-gray-500">Just Now</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Listing my property on Homi was straightforward, and I started
              getting inquiries within hours. The in-app chat made tenant
              communication so easy and professional.
            </p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="h-auto max-w-[370px] rounded-bl-3xl rounded-br-3xl bg-white p-4 shadow-xl lg:mt-[-300px]">
          <h4 className="mb-2 text-lg font-medium text-gray-700">
            Testimonial
          </h4>
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
                <p className="font-medium text-gray-800">Nora</p>
                <span className="text-sm text-gray-500">Just Now</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              With Homi, I didn&apos;t just find tenants faster, I found the
              right tenants. The verification process gave me peace of mind, and
              payments were hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordTestimonial;
