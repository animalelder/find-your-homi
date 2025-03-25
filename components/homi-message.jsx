import Image from "next/image";

const HomiMessage = () => {
  return (
    <div className="mx-4 px-4 py-8 sm:mx-[10%]">
      <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
        {/* Text Section */}
        <div className="flex w-full flex-col space-y-4 md:w-1/2">
          <h3 className="mb-6 text-center text-3xl font-semibold md:text-left">
            Homi helps you find the right people and the right living space
          </h3>

          <div className="space-y-4">
            {/* Chatbox Messages */}
            <div className="flex justify-end">
              <div className="max-w-[60%] rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl bg-primaryBlue p-4 shadow-md">
                <p className="text-lg text-white">
                  Easy property listing, you can post and browse properties in
                  minutes, SOO LITT!!
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="max-w-[60%] rounded-br-3xl rounded-tl-3xl rounded-tr-3xl bg-black p-4 shadow-md">
                <p className="text-lg text-white">
                  Roommate Matching: Find roommates who share your vibe.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="max-w-[60%] rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl bg-primaryBlue p-4 shadow-md">
                <p className="text-lg text-white">
                  Online Lease Signing: Secure, paperless agreements you can
                  trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex w-full justify-center rounded-lg md:w-1/2">
          <Image
            src="assets/message.png"
            width={829}
            height={816}
            alt="Message Illustration"
            className="w-64 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomiMessage;
