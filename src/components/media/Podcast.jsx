
"use client"
import React from "react";
import Heading from "../Heading";
import mic from "../../../public/media/mic.json"
export default function Podcast() {
  return (
    <div className="xl:pb-48 lg:pb-32 md:pb-24 sm:pb-16 pb-12 overflow-hidden mx-4 ">
      <div className="relative sm:px-[6.3rem]">
        <div className="mt-24 mb-16">
          <Heading tit1="PODCAST studio" tit2="PRODUCTION" withLottie={mic} />
        </div>
        <div class="flex relative flex-col  ">
          <div class="relative flex flex-col md:flex-row-reverse z-40 md:space-x-5  space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 w-full border border-white bg-white">
          <div class="bg-white z-60 relative grid place-items-center">
              <img
                src="/media/podcast.png"
                alt="podcast service logo"
                class="rounded-xl md:w-64 z-60"
              />
            </div>
            <div class="w-full bg-white flex flex-col space-y-2 p-3">
              <div class="flex justify-between item-center my-4 ">
                <p class="text-gray-500 font-medium hidden  md:block">
                  Podcast Production
                </p>
                <div class="bg-[#FE6E3320] px-3 py-1 rounded-full text-xs font-medium text-primary  md:block">
                  Satisfaction Guaranteed
                </div>
              </div>
              <h3 class="font-black text-gray-800 md:text-3xl text-xl">
                Elevate Your Brand&apos;s Voice with Professional Podcasts
              </h3>
              <p class="md:text-lg text-gray-500 text-base">
                Tunir provides full podcast production, managing everything
                from concept to distribution. Our team ensures your message
                resonates with your audience while maximizing your brand&apos;s reach
                through effective marketing.
              </p>
              <div class="flex space-x-4 my-12">
                <div class="flex items-center text-gray-600 my-4">
                  <img src="/media/sound.png" className="xl:w-[20rem] lg:w-[15rem] md:w-[10rem] sm:w-[10rem] w-[5rem]" />
     
                  {/* <Lottie animationData={animationData} loop={true}  className="xl:w-[20rem] lg:w-[15rem] md:w-[10rem] sm:w-[10rem] w-[5rem]" speed={0.1}/> */}
            
                  <p class="ml-2 text-sm">High-Quality Audio</p>
                </div>
                <div class="flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6zm0 2h12v16H6V4zm2 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" />
                  </svg>
                  <p class="ml-1 text-sm">Customizable Packages</p>
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
