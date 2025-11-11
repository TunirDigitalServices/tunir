"use client";
import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Heading from "../Heading";
import { Video, Monitor, BarChart } from "lucide-react"; // icons for Media, IT, Management
import AOS from "aos";
import "aos/dist/aos.css";

export default function LabsSection() {
  const labsData = [
    {
      icon: <Video size={72} strokeWidth={0.8} />,
      title: "Media Lab",
      description:
        "A creative space for content creators. Students explore photography, videography, and social media marketing to bring ideas to life.",
    },
    {
      icon: <Monitor size={72} strokeWidth={0.8} />,
      title: "IT Lab",
      description:
        "Dive into coding, web development, and tech projects. Students gain hands-on experience with real-world client projects.",
    },
    {
      icon: <BarChart size={72} strokeWidth={0.8} />,
      title: "Management Lab",
      description:
        "Learn project planning, leadership, and teamwork skills. Prepare for real professional environments while managing projects.",
    },
  ];

  useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: "ease-in-sine", delay: 100 });
    AOS.refresh();
  }, []);

  return (
    <section
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw]  py-20 lg:py-28"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Heading tit1="Our Labs" tit2="Our Labs" />
        <p className="text-gray-700 dark:text-gray-300 mt-4 mx-auto leading-relaxed">
          Sfectonir offers three specialized labs to blend creativity, technology, and leadership. Each lab allows students to explore, create, and grow through hands-on experience.
        </p>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {labsData.map((lab, index) => (
            <Card
              key={index}
              className="w-full transform transition-transform duration-300 hover:scale-105 md:max-w-[324px] md:h-[250px] flex flex-col md:pt-16 md:pb-10 justify-center items-center relative max-w-[320px] h-[180px] pt-10 pb-6"
            >
              <CardHeader className="text-primary absolute -top-[35px] lg:-top-[65px]">
                <div className="lg:w-[140px] lg:h-[80px] bg-white dark:bg-background flex justify-center items-center w-[50px] h-[20px]">
                  {lab.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="md:mb-4 mb-2 mt-14 md:mt-12 text-xl md:text-2xl font-bold text-neutral-500 dark:text-neutral-500">
                  {lab.title}
                </CardTitle>
                <CardDescription className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  {lab.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
