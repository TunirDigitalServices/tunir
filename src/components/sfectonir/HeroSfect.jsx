"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import sm from "../../../public/partnaires/SMART.png";
import je from "../../../public/partnaires/je.png";
import dm from "../../../public/reviews/domiciliation.tn-logo.webp";
import teach from "../../../public/reviews/teach.png";
import smart_soft_pro_logo from "../../../public/partnaires/sspro.png";
import tunir from "../../../public/partnaires/org.png";

export default function HeroSfect() {
  // const handleScroll = () => {
  //   const formSection = document.getElementById("pre-register-form");
  //   formSection?.scrollIntoView({ behavior: "smooth" });
  // };
  const partners = [
    {
      name: "SMARTFARM",
      logo: sm,
    },
    {
      name: "Junior Entreprise Tunisie",
      logo: je,
    },
    {
      name: "Tunir",
      logo: tunir,
    },
    {
      name: "Domiciliation",
      logo: dm,
    },
   
    {
      name: "SSPro",
      logo: smart_soft_pro_logo,
    },
     {
      name: "TeachCode",
      logo: teach,
    },
    
  ];

  return (
    <div className="relative overflow-x-hidden pb-8 lg:pb-32">
      {/* Background gradients */}
      <div
        aria-hidden="true"
        className="absolute -top-96 start-3/4 flex transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-[#50e2d4]/70 to-purple-100 blur-3xl w-[55rem] h-[38rem] rotate-[-60deg] -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
        <div className="bg-gradient-to-tl from-orange-100 via-orange-200 to-orange-100 blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] dark:from-orange-900/70 dark:via-orange-900/70 dark:to-orange-900/70"></div>
      </div>

      {/* Head Section */}
      <section className="head py-12 mt-16 xl:py-24 lg:h-[84vh] relative flex flex-col min-h-full w-full justify-center px-4 dark:bg-none">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          {/* Join Us Alert */}
          <a
            href="#pre-register-form"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-primary rounded-full dark:bg-gray-800 dark:text-white transition-colors hover:bg-[#ACE9EC]"
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              Join Us
            </span>
            <span className="text-sm font-medium text-white">
              Discover Sfectonir & Start Your Learning Journey
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

          {/* Main Heading */}

          <h1
            style={{ fontFamily: "AgainstRegular", lineHeight: "1.9" }} // reduced line height
            className="mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            LEARN & GROW WITH SFECTONIR
          </h1>

          {/* Description */}

          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            At Sfectonir, students explore high-quality studies while
            collaborating on real client projects. Our labs in Management,
            Media, and IT empower students to learn, experiment, and grow
            professionally.
          </p>

          <div className="flex justify-center mb-12">
            <Button className="gap-x-2 text-white" 
            // onClick={handleScroll}
            >
              {" "}
              Pre-register Now
            </Button>
          </div>
        </div>
        <section className="py-12 bg-orange-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12 items-center justify-center">
  {partners.map((partner, index) => (
    <div
      key={index}
      className="flex justify-center items-center h-24 md:h-28 w-full"
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        className={`object-contain filter grayscale hover:grayscale-0 transition duration-300
          ${partner.name === "TeachCode" || partner.name === "SSPro" ? "h-16 md:h-16" : "h-20 md:h-22"}
        `}
        width={130}
        height={60}
      />
    </div>
  ))}
</div>


          </div>
        </section>
      </section>
    </div>
  );
}
