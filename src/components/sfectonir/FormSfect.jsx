"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import khalil from "../../../public/team/khalilAvatar.png";

export default function PreRegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",       // 🆕
    phone: "",       // 🆕
    age: "",
    ville: "",
    lab: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      toast.success(data.message || "Pre-registration successful!");

      // reset
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        ville: "",
        lab: "",
        note: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Error submitting pre-registration");
    }
  };

  return (
    <section className="relative bg-gradient-to-bl from-orange-100 via-transparent dark:from-orange-950 dark:via-transparent">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div>
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              Preline: Pre-registration 2025
            </p>

            <div className="mt-4 md:mb-12 max-w-2xl">
              <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                Secure your spot in our upcoming program
              </h1>
              <p className="text-gray-600 dark:text-neutral-400">
                Fill in your details to pre-register and receive all updates
                about the program.
              </p>
            </div>

            <blockquote className="hidden md:block relative max-w-sm">
              <svg
                className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-neutral-800"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3Z"
                  fill="currentColor"
                />
              </svg>

              <div className="relative z-10">
                <p className="text-xl italic text-gray-800 dark:text-white">
                  Participants love our program — quick, easy, and reliable.
                </p>
              </div>

              <footer className="mt-3">
                <div className="flex items-center gap-x-4">
                  <Image
                    src={khalil}
                    alt="Avatar"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-neutral-200">
                      Khalil KRAIEM
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-500">
                      CEO TUNIR
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Right Column - Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="lg:w-full lg:mx-auto lg:me-0 ms-auto"
            >
              <div className="p-6 sm:p-8 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Pre-Registration Form
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    Fields marked with <span className="text-[#FE6E33]">*</span>{" "}
                    are required.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { name: "firstName", label: "First Name *", type: "text" },
                    { name: "lastName", label: "Last Name *", type: "text" },
                    { name: "email", label: "Email *", type: "email" }, // 🆕
                    { name: "phone", label: "Phone Number *", type: "tel" }, // 🆕
                    { name: "age", label: "Age", type: "number" },
                    { name: "ville", label: "City", type: "text" },
                  ].map(({ name, label, type }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                        {label}
                      </label>
                      <input
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        type={type}
                        required={label.includes("*")}
                        className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-white dark:bg-neutral-800 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#FE6E33]"
                      />
                    </div>
                  ))}

                  <select
                    name="lab"
                    value={formData.lab}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-white dark:bg-neutral-800 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#FE6E33]"
                  >
                    <option value="">Select Lab *</option>
                    <option value="IT">IT</option>
                    <option value="Media">Media</option>
                    <option value="Management">Management</option>
                  </select>

                  <textarea
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="Additional Notes"
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-white dark:bg-neutral-800 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#FE6E33]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full py-3 px-4 bg-[#FE6E33] text-white font-medium rounded-lg hover:bg-[#e35d21] focus:outline-none focus:ring-2 focus:ring-[#A2EAE9]"
                >
                  Pre-Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
