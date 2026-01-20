'use client';

import React from "react";
import Heading from "../Heading";
import Image from "next/image"; // <-- Import Next.js Image component
import sfectonirLogo from "../../images/sfectonirLogo.png";

export default function AboutSfect() {
  // const handleScroll = () => {
  //   const formSection = document.getElementById("pre-register-form");
  //   formSection?.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <section className="mx-auto xl:container md:container sm:container ">
      <div className="lg:mb-12">
        <Heading tit1="ABOUT US" tit2="ABOUT US" />
      </div>

      {/* Main Section */}
      <div className="bg-white dark:bg-neutral-900 py-8">
        <div className="max-w-7xl  mx-auto px-4 md:px-0  ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[500px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={sfectonirLogo}
                alt="Sfectonir Labs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent"></div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-medium text-[#FE6E33] uppercase tracking-wide">
                About Us
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Welcome to Sfectonir
              </h2>
              <p className="mt-4 text-gray-700 dark:text-neutral-300">
                Sfectonir is a unique internship space where students can learn
                and gain real-world experience through client projects. Here,
                students engage in high-quality studies while actively
                participating in practical, real-world assignments.
              </p>

              {/* Achievements */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Real Projects",
                    desc: "Work on actual client projects and gain hands-on experience.",
                  },
                  {
                    title: "Laboratories",
                    desc: "Choose between Management, Media, or IT labs.",
                  },
                  {
                    title: "Expert Support",
                    desc: "Guidance from mentors to support every student.",
                  },
                  {
                    title: "Easy Pre-Registration",
                    desc: "Sign up and select your preferred lab.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-[#FE6E3310]/10 p-2 rounded-lg">
                      <svg
                        className="w-6 h-6 text-[#FE6E33]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </p>
                      <p className="text-gray-600 dark:text-neutral-400 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
             <div className="mt-8">
  <button
    // onClick={handleScroll}
    className="inline-block px-6 py-3 bg-[#FE6E33] text-white rounded-lg shadow hover:bg-[#e65a1c] transition"
  >
    Pre-Register Now
  </button>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
