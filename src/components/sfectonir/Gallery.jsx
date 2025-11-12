"use client";
import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import mom10 from "../../../public/galery/mom10.jpg";
import doudi from "../../../public/galery/doudi.jpg";
import mom1 from "../../../public/galery/mom1.jpg";
import mom2 from "../../../public/galery/mom2.jpg";
import mom3 from "../../../public/galery/mom3.jpg";
import mom4 from "../../../public/galery/mom4.jpg";
import mom5 from "../../../public/galery/mom5.jpeg";
import mom6 from "../../../public/galery/mom6.jpeg";
import mom7 from "../../../public/galery/mom7.jpeg";
import mom8 from "../../../public/galery/mom8.jpeg";
import mom9 from "../../../public/galery/mom9.jpeg";
import mom16 from "../../../public/galery/mom16.jpg";
import mom17 from "../../../public/galery/mom17.jpg";
import mom18 from "../../../public/galery/mom18.jpg";
import mom19 from "../../../public/galery/mom19.jpg";
import mom21 from "../../../public/galery/mom20.jpg";
import mom22 from "../../../public/galery/mom22.jpg";
import mom23 from "../../../public/galery/mom23.jpg";
import mom24 from "../../../public/galery/mom24.jpg";
import mom25 from "../../../public/galery/mom25.jpg";
import mom26 from "../../../public/galery/mom26.jpg";
import mom27 from "../../../public/galery/mom27.jpg";
import mom28 from "../../../public/galery/mom28.jpg";
import mom29 from "../../../public/galery/mom29.jpg";
import mom30 from "../../../public/galery/mom30.jpg";
import mom31 from "../../../public/galery/mom31.jpeg";
import mom32 from "../../../public/galery/mom32.jpeg";

const galleryImages = [
  mom10,
  doudi,
  mom1,
  mom2,
  mom3,
  mom4,
  mom5,
  mom6,
  mom7,
  mom8,
  mom9,
  mom16,
  mom17,
  mom18,
  mom19,
  
  mom21,
  mom22,
  mom23,
  mom24,
  mom25,
  mom26,
  mom27,
  mom28,
  mom29,
  mom30,
  mom31,
  mom32,
];

export default function SuccessfulMoments() {
  return (
    <section className="mx-auto xl:container md:container sm:container py-8 lg:py-24 px-4">
      <div className="text-center mb-12">
        <Heading tit1="Successful " tit2="Moments" />
        <p className="text-gray-600 dark:text-gray-400 mx-auto mt-4 ">
          A glimpse into some of our most memorable moments and achievements.
          From events to projects, here are the highlights that make us proud.
        </p>
      </div>

      {/* Masonry Gallery */}
      <div className="columns-2 md:columns-4 gap-4">
        {galleryImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Moment ${index + 1}`}
            className="mb-4 w-full rounded-lg object-cover break-inside"
          />
        ))}
      </div>
    </section>
  );
}
