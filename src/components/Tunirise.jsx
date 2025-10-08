import React from "react";
import Image from 'next/image';
// import logoUni from '../images/logounivers.png';
export default function Tunirise({containerStyles,triseSize,unSize}) {
  return (
    <div className={`${containerStyles}`}>
      {/* <span className={`cursor-pointer text-primary  HammersmithOne ${triseSize}`} >
        T
      </span>
      <span className={`cursor-pointer text-primary MonumentExtended ${unSize}`}>
        un
      </span>
      <span className={`ursor-pointer text-primary  HammersmithOne  ${triseSize}`}>
        iRise
      </span> */}
            {/* <Image src={logoUni} width={"100%"} height={"100%"} alt='logo univers' /> */}

    </div>
    // <div className={`${containerStyles}`}>
    //   <span className="cursor-pointer text-primary ml-3 HammersmithOne text-3xl">
    //     T
    //   </span>
    //   <span className="cursor-pointer text-primary MonumentExtended text-2xl">
    //     un
    //   </span>
    //   <span className="cursor-pointer text-primary  HammersmithOne text-3xl">
    //     iRise
    //   </span>
    // </div>
  );
}
