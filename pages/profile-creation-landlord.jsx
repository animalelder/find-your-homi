"use client";

import React, { useState } from "react";

const ProfileCreationLandLord = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState("create"); // "create" for sign-up, "sign-in" for login

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (mode === "create") {
        if (!isChecked) {
          alert("You must agree to the terms and conditions.");
          setLoading(false);
          return;
        }
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match!");
          setLoading(false);
          return;
        }

        const response = await fetch("https://backend-url/api/account/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Failed to create account.");
        alert("Account created successfully!");
      } else {
        const response = await fetch("https://backend-url/api/account/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        if (!response.ok) throw new Error("Sign-in failed.");
        alert("Signed in successfully!");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Background Image Section */}
      <div className="relative hidden w-1/2 lg:block">
        <img
          src="/home3.png"
          alt="Create Profile Background"
          className="h-full w-full object-cover"
        />
        <img
          src="/homi_logo.png"
          alt="Homi Logo"
          className="absolute left-10 top-10 w-32"
        />
        <div className="absolute bottom-0 left-0 h-[300px] w-full bg-black bg-opacity-70 p-4 text-white">
          <h3 className="w-[170px] pl-5 text-2xl font-semibold">
            Welcome to <span className="text-3xl font-bold">HOMI</span>
          </h3>
          <div className="flex items-center gap-2 pl-5">
            <p>Sign in or Create a new account with us.</p>
            <img
              src="/arrow-right-circle.png"
              alt="Arrow Right"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex w-full flex-1 items-center justify-center p-6">
        <form
          className="w-full max-w-md rounded-lg bg-white p-6"
          onSubmit={handleSubmit}
        >
          <h3 className="mb-2 text-center text-2xl font-bold">
            {mode === "create" ? "Create Landlord Account" : "Welcome Back"}
          </h3>

          {mode === "create" && (
            <>
              <label htmlFor="fullname" className="mb-1 block font-medium">
                Enter full name
              </label>
              <div className="mb-4 flex flex-col md:flex-row md:gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mb-4 w-full flex-1 rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-red-300 md:mb-0 md:w-1/2"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full flex-1 rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-red-300 md:w-1/2"
                />
              </div>
            </>
          )}

          <label htmlFor="email" className="mb-1 block font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mb-4 w-full rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-red-300"
          />

          <label htmlFor="password" className="mb-1 block font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={handleChange}
            className="mb-2 w-full rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-red-300"
          />

          {mode === "create" && (
            <>
              <label
                htmlFor="confirm-password"
                className="mb-1 mt-4 block font-medium"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mb-6 w-full rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-red-300"
              />
              <div className="mb-6 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <label className="text-sm text-gray-700">Remember</label>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-red-500"
            } rounded-xl px-4 py-2 font-medium text-white transition hover:bg-primaryBlue`}
          >
            {loading
              ? mode === "create"
                ? "Creating Account..."
                : "Signing In..."
              : mode === "create"
                ? "Create Account"
                : "Sign In"}
          </button>
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

          <div className="my-6 flex items-center justify-center">
            <hr className="w-[20%] border-gray-300" />
            <div className="px-4 text-sm text-gray-400">
              Or sign {mode === "create" ? "up" : "in"} with
            </div>
            <hr className="w-[20%] border-gray-300" />
          </div>

          <div className="flex justify-center gap-4">
            <button type="button">
              <img
                src="/facebook_logo.png"
                alt="Facebook"
                className="h-8 w-8"
              />
            </button>
            <button type="button">
              <img src="/google_logo.png" alt="Google" className="h-8 w-8" />
            </button>
          </div>

          <p className="mb-6 mt-5 text-center">
            {mode === "create" ? (
              <>
                Already a member?{" "}
                <span
                  className="text-primaryGreen cursor-pointer font-medium"
                  onClick={() => setMode("sign-in")}
                >
                  Sign in
                </span>
              </>
            ) : (
              <>
                New here?{" "}
                <span
                  className="cursor-pointer font-medium text-red-500"
                  onClick={() => setMode("create")}
                >
                  Create an account
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default ProfileCreationLandLord;
