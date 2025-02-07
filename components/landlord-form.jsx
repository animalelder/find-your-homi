const LandlordForm = () => {
  return (
    <form action="" className="space-y-6 p-9">
      {/* Name Fields */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <label
            htmlFor="fname"
            className="mb-1 block text-sm font-semibold tracking-wide text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="fname"
            placeholder="Enter first name"
            className="w-full rounded-md border border-gray-800 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-800"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label
            htmlFor="Lname"
            className="mb-1 block text-sm font-semibold tracking-wide text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="Lname"
            placeholder="Enter last name"
            className="w-full rounded-md border border-gray-800 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-800"
          />
        </div>
      </div>

      {/* Email and Phone Fields */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-semibold tracking-wide text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-800 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-800"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-semibold tracking-wide text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter phone number"
            className="w-full rounded-md border border-gray-800 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-800"
          />
        </div>
      </div>

      {/* Property Selection */}
      <div>
        <p className="mb-2 text-sm font-bold tracking-wide text-black">
          Selected property:
        </p>
        <select
          name="property"
          id="property"
          disabled
          className="w-full rounded-md bg-white px-4 py-2 caret-white focus:outline-none focus:ring-1 focus:ring-emerald-800/25"
        >
          <option value="Downtown Condo, Toronto Canada">
            Metropolitan Haven
          </option>
          <option value="Mansion in Regina. Canada">
            Mansion in Regina. Canada
          </option>
          <option value="Apartment in Toronto">Apartment in Toronto</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-semibold tracking-wide text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="Enter your message here"
          className="w-full rounded-md border border-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-800"
          rows="4"
        ></textarea>
      </div>

      {/* Terms and Submit Button */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 rounded border border-gray-300 accent-primaryGreen focus:ring-emerald-800/50"
          />
          <label
            htmlFor="terms"
            className="ml-2 text-sm tracking-wide text-gray-700"
          >
            I agree with <u>Terms of Use</u> and <u>Privacy Policy</u>
          </label>
        </div>
        <button
          type="submit"
          className="rounded-md bg-primary px-6 py-2 text-sm font-semibold tracking-wide text-white transition duration-300 hover:bg-emerald-300 hover:text-emerald-950"
        >
          Send Your Message
        </button>
      </div>
    </form>
  );
};

export default LandlordForm;
