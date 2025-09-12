"use client"

import React from 'react'
import Lottie  from "lottie-react";


export default function Heading({tit1,tit2,withLottie}) {
  return (
    <div className={`flex mx-4 z-40 ${tit1 === "MEDIA SERVICES" ? "ml-8":"" }  flex-col md:flex-row justify-between items-center ${tit1 !== "ABOUT US" ? "mb-12 ":"" }xl:mb-12 `}>
          <h2
            className="section-title text-sm text-center md:text-left lg:text-4xl xl:text-5xl z-40"
            style={{
              fontFamily: "AgainstRegular",
            }}
          >
            {tit1}
          {withLottie &&  <Lottie animationData={withLottie} loop={true}  className={`${withLottie !=="media" ? "xl:w-[6rem] mb-[1.5rem] lg:w-[5rem] md:w-[4rem] sm:w-[3rem] w-[3rem]":"xl:w-[1rem] mb-[1.5rem] lg:w-[3rem] md:w-[2rem] sm:w-[1rem] w-[1rem]"}`} />} 

          </h2>

          <h2
            className={`opacity-20 z-40  ${tit1==="OUR TEAM" ? "mx-12":""} text-[1.4rem] leading-[32.5px]  lg:text-4xl xl:text-5xl`}
            style={{
              fontFamily: "AgainstRegular",

            }}
          >
            {tit2}
          </h2>
        </div>
  )
}
