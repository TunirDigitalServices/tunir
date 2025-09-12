"use client";

import React from "react";
import { Preview } from "@/components/web/Preview";
import { BackgroundAnim } from "@/components/web/BackgroundAnim";
import { GlobeDemo } from "@/components/web/GlobeDemo";
import { TimelineDemo } from "@/components/web/TimelineDemo";
import { WavyBackground } from "@/components/web/WavyBackground";

import Services from "@/components/home/Services";

export default function page() {
  return (
    <>
      {/* <GlobeDemo /> */}
      <section class="relative w-full h-full pb-24 ">
        <main class=" w-full h-full relative ">
          <div class="flex flex-wrap  ">
            <section class="w-full lg:w-[50%] flex flex-col  @md:px-2  dark:bg-[#5BC4C7]">
              <section class="w-full  flex-col-reverse  bg-amber-100">
                <main class="w-full h-[90%] relative flex-col items-start mx-auto pt-24">
                  <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                 

                    {/* Content */}
                    <p
                      href="#"
                      className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-primary rounded-full  dark:text-white"
                      role="alert"
                    >
                      <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                        Join Us
                      </span>
                      <span className="text-sm font-medium text-white">
                        Explore our services and journey
                      </span>
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="white"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                    <h1
                      style={{
                        fontFamily: "AgainstRegular",
                        lineHeight:"62px"
                   
                      }}
                      className="mb-4 text-xl  uppercase font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl dark:text-white"
                    >
                      <span className="inline-block mr-2">Unlock</span>
                      <span className="inline-block">international</span>
                      <span className="bg-primary px-3 py-1 lg:py-2 rounded-xl text-white mr-2">
                        opportunities
                      </span>
                      by developing applications that
                      <span className="text-primary px-3">
                        reach customers everywhere
                      </span>
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">
                      At Tunirise, we craft web solutions that open up global
                      opportunities, helping your business connect with clients
                      everywhere. Our digital strategies drive growth and expand
                      your reach, ensuring your success on a global scale.
                    </p>
                  </div>
                </main>
              </section>
            </section>

            <section class="relative w-full lg:w-[50%] hidden lg:flex">
              <GlobeDemo />
            </section>
          </div>
        </main>
      </section>
      <Services isWeb={true} />
      <TimelineDemo />
      {/* <div className="relative">
        <WavyBackground backgroundFill="#ffffff" />
      </div> */}
    </>
  );
}
