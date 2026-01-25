"use client";
import React, { useState, useEffect } from "react";

import "aos/dist/aos.css";

// components
import Logo from "../components/Logo";
// import ThemeToggler from './ThemeToggler';
// import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import { usePathname } from "next/navigation";
const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     window.scrollY > 50 ? setHeader(true) : setHeader(false);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup event listener on component unmount
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      className={`${"bg-hero bg-no-repeat bg-bottom bg-cover"} overflow-x-hidden `}
    >
      <header
        className={`${
          header ? "py-4 shadow-lg backdrop-blur-lg" : "py-6 "
        }  fixed w-full top-0 z-50 transition-all '} `}
      >
        <div className="mx-auto max-w-[86rem] px-4">
          <div className="flex justify-between items-center ">
            <Logo />
            <div className="flex items-center gap-x-6">
              {/* nav */}
              {/* <Nav
                containerStyles="hidden xl:flex gap-x-8 items-center"
                linkStyles="relative hover:text-primary transition-all"
                underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
              /> */}
              {/* <ThemeToggler /> */}
              {/* mobile nav */}
              <div className="xl:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </header>
    




    </div>
  );
};

export default Header;
