
"use client";
import React from "react";
import { Radar } from "./Radar";
import { IconContainer } from "./IconContainer";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsClipboardDataFill } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { HiMiniDocumentArrowUp } from "react-icons/hi";
import {AiFillAppstore, AiFillTool, AiFillCloud } from 'react-icons/ai';
import { FaServer, FaHandsHelping, FaLaptopCode } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { BsFillPaletteFill } from 'react-icons/bs'; 

export const Preview = () => {
  return (
    <div className="relative  flex h-[30rem] w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <div
          aria-hidden="true"
          class="flex absolute -top-96 start-3/4 transform -translate-x-1/2"
        >
          <div class="bg-gradient-to-r from-[#50e2d4]/70 to-purple-100 blur-3xl w-[55rem] h-[38rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
          <div class="bg-gradient-to-tl from-orange-100 via-orange-200 to-orange-100 blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] dark:from-orange-900/70 dark:via-orange-900/70 dark:to-orange-900/70"></div>
        </div>
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer text="Web Development" delay={0.2} />
          <IconContainer
            delay={0.4}
            text="Mobile apps"
            icon={<AiFillAppstore className="h-8 w-8 text-primary" />}
          />
          <IconContainer
            text="Designing"
            delay={0.3}
            icon={<BsFillPaletteFill className="h-8 w-8 text-primary" />}
          />
           {/* Web Deployment */}
      <IconContainer
        text="Web Deployment"
        delay={1.2}
        icon={<AiFillCloud className="h-8 w-8 text-primary" />}
      />
        </div>
      </div>
      <div className="mx-auto w-full max-w-md">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer
            text="Maintenance"
            delay={0.5}
            icon={<AiFillTool  className="h-8 w-8 text-primary" />}
          />
          <IconContainer
            text="Server management"
            icon={<FaServer  className="h-8 w-8 text-primary" />}
            delay={0.8}
          />
               <IconContainer
        text="Consulting"
        delay={1.0}
        icon={<FaHandsHelping className="h-8 w-8 text-primary" />}
      />
      
     
        </div>
      </div>
    

      <Radar className="absolute -bottom-12" />
      <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </div>
  );
};
