"use client";
import React, { useEffect } from "react";
import { ModalVideo, useToggle } from "@baskvava/react-video-modal";
import { motion } from "framer-motion";
import picture from "../../images/picture.png";
import light from "../../images/light.jpg";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
function Head() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);



  return (
    <div
      className={`relative overflow-x-hidden `}
    >
         <div
          aria-hidden="true"
          class="flex absolute -top-96 start-3/4 transform -translate-x-1/2"
        >
          <div class="bg-gradient-to-r from-[#50e2d4]/70 to-purple-100 blur-3xl w-[55rem] h-[38rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
          <div class="bg-gradient-to-tl from-orange-100 via-orange-200 to-orange-100 blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] dark:from-orange-900/70 dark:via-orange-900/70 dark:to-orange-900/70"></div>
        </div>

      <section className="head py-12 mt-16 xl:py-24 lg:h-[84vh] relative flex min-h-full w-full flex-col sm:place-content-center px-4 dark:bg-none">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-primary rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              Join Us
            </span>{" "}
            <span className="text-sm font-medium text-white">
              Explore our vision and journey
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
          </a>
          <h1
            style={{
              fontFamily: "AgainstRegular",
              lineHeight: "70px",
            }}
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white"
          >
            YOU&apos;LL REMEMBER US, BECAUSE TEHY WILL REMEMBER YOU
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            At Tunir, we believe in the power of connection. We strive to
            create innovative media and web solutions that foster relationships
            and inspire lasting impact. Together, we build a future where every
            story matters.
          </p>
        </div>
        {/* <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div> */}
      </section>
    </div>
  );
}

export default Head;
