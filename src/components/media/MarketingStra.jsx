"use client";
import React from "react";
import Heading from "../Heading";
import Lottie from "lottie-react";
import marketing from "../../../public/media/marketing.json";
export default function MarketingStra() {
  return (
    <div className="pb-48 overflow-hidden px-4 backdrop-blur-md">
      <div className="relative sm:px-[6.3rem]">
        <div className="mt-24 mb-16">
          <Heading tit1="Marketing strategie" tit2="" />
        </div>
        <div class="flex relative flex-col mt-20 ">
          <div class="relative flex flex-col md:flex-row z-40 md:space-x-5  space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 w-full border border-white bg-white">
            <div class="bg-white z-60 grid place-items-center">
              <Lottie
                animationData={marketing}
                loop={true}
                className="rounded-xl md:w-64 z-60"
              />
            </div>
            <div class="w-full bg-white flex flex-col space-y-2 p-3">
              <div class="flex justify-between items-center my-4">
                <p class="text-gray-500 font-medium hidden md:block">
                  Strategic Media Production
                </p>
                <div class="bg-[#FE6E3320] px-3 py-1 rounded-full text-xs font-medium text-primary hidden md:block">
                  Proven Results
                </div>
              </div>
              <h3 class="font-black text-gray-800 md:text-3xl text-xl">
                Amplify Your Brand&apos;s Impact with Targeted Media Campaigns
              </h3>
              <p class="md:text-lg text-gray-500 text-base">
                Tunir crafts effective media strategies that expand your
                audience and boost brand visibility, creating authentic
                connections and sustainable engagement across all platforms.
              </p>
              <div class="flex space-x-4 my-4">
                <div className="flex items-center text-gray-600 my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#9333ea", stopOpacity: 1 }}
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M12 2a10 10 0 110 20 10 10 0 010-20zM10.5 7h3a1 1 0 110 2h-1.5v8a1 1 0 11-2 0V9H10a1 1 0 010-2zm-4 5h2a1 1 0 010 2h-2a1 1 0 010-2zm10 0h2a1 1 0 010 2h-2a1 1 0 010-2z"
                      fill="url(#gradient)"
                    />
                  </svg>
                  <p className="ml-1 text-sm">Tailored Campaigns</p>
                </div>

                <div class="flex items-center text-gray-600 my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.51 3.5h17a1 1 0 110 2H14v7.89A3.49 3.49 0 1110.5 14H7v2.5h3.5a5.5 5.5 0 104.5-2.12V5.5h-9.5v9H4.5v-9h-1a1 1 0 110-2z" />
                  </svg>
                  <p class="ml-1 text-sm">Expert Strategy & Execution</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full  -bottom-2 z-40 left-[0.5rem] text-secondary opacity-2 h-full sound-wave opacity-50 animate-pulse"></div>
          
        </div>
      </div>
    </div>
  );
}
