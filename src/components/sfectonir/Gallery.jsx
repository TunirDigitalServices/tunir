'use client';
import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import afef from "../../../public/galery/afef.jpeg";
import doudi from "../../../public/galery/doudi.jpg";

const galleryImages = [
  afef,
  doudi
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
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
