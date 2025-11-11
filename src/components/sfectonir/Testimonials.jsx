'use client';

import React, { useState } from "react";
import Heading from "../Heading";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, ABC Inc.",
    initials: "JD",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
  },
  {
    id: 2,
    name: "Winter Doe",
    role: "CTO, XYZ Corp.",
    initials: "WD",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
  },
  {
    id: 3,
    name: "John Wick",
    role: "Product Manager, Fake Corp.",
    initials: "JW",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(2);

  const prev = () => setActive(active === 1 ? 3 : active - 1);
  const next = () => setActive(active === 3 ? 1 : active + 1);

  const currentTestimonial = testimonials.find(t => t.id === active);

  return (
    <section className="w-full bg-[#FE6E33] dark:bg-[#2A1B0A] ">
        
      <div className="flex flex-col md:flex-row max-w-full mx-auto overflow-hidden">
        
        {/* Left Side */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center py-16 md:py-24 text-[#FFF8F0]">
          {/* <div className="absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60 bg-[#FFD2B3] rounded-full opacity-30"></div> */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight z-20 text-center px-6">
            <span className="block">What Our Students  </span>
            <span className="block"> Are Saying About Their</span>
            <span className="block">Journey With Sfectonir!</span>
          </h2>

          {/* Arrows */}
          <div className="absolute bottom-4 right-4 hidden md:flex space-x-2">
            <button onClick={prev} className="rounded-l-full border-r bg-[#FFF8F0]/50 text-[#FE6E33] font-bold w-12 h-10 hover:bg-[#FFF8F0]">
              &#8592;
            </button>
            <button onClick={next} className="rounded-r-full bg-[#FFF8F0]/50 text-[#FE6E33] font-bold w-12 h-10 hover:bg-[#FFF8F0]">
              &#8594;
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-[#FFF8F0] dark:bg-[#3C2B1F] flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 items-center text-center">
          
          {/* Avatar */}
          <img 
            src={currentTestimonial.avatar} 
            alt={currentTestimonial.name} 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#FE6E33] mb-6 shadow-lg"
          />

          {/* Testimonial Text */}
          <p className="text-gray-800 dark:text-[#FFEBD3] font-serif italic text-lg md:text-xl mb-8 transition-all duration-500">
            {currentTestimonial.text}
          </p>

          {/* Initial Buttons */}
          <div className="flex justify-center mb-6">
            {testimonials.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`font-bold mx-2 rounded-full transition-all duration-300 
                  ${active === t.id ? "h-16 w-16 bg-[#FE6E33] text-white opacity-100" : "h-12 w-12 bg-[#FFD2B3] text-[#FE6E33] opacity-70"}`}
              >
                {t.initials}
              </button>
            ))}
          </div>

          {/* Name & Role */}
          <div className="text-center">
            <h2 className="font-bold text-gray-900 dark:text-[#FFEBD3]">{currentTestimonial.name}</h2>
            <small className="text-gray-700 dark:text-[#FFD2B3]">{currentTestimonial.role}</small>
          </div>
        </div>
      </div>
    </section>
  );
}
