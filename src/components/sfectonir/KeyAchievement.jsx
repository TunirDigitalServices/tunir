import React from "react";
import Heading from "../Heading";

export default function MilestonesTimeline() {
  const milestones = [
    {
      title: "SOCIAL MEDIA SUCCESS",
      desc: "Grew Sfectonir's social media presence from 500 to over 10,000 followers through consistent storytelling and digital engagement.",
      color: "#FE6E33",
    },
    {
      title: "TRAINING INITIATIVES",
      desc: "Launched training programs for web development and media production. Empowered over 50 students and interns with practical digital skills.",
      color: "#A3E9E8",
    },
    {
      title: "CLIENT COLLABORATIONS",
      desc: "Partnered with real-world clients, giving students direct experience in professional projects across various industries.",
      color: "#FE6E33",
    },
    {
      title: "INNOVATION & IMPACT",
      desc: "Encouraged creative thinking and real innovation by integrating technology and media to solve real challenges.",
      color: "#A3E9E8",
    },
  ];

  return (
    <section className="mx-auto xl:container md:container sm:container py-16 px-4">
      <div className="text-center mb-12">
        <Heading tit1="Milestones" tit2="Milestones" />
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Our journey highlights how Sfectonir empowers learners to grow, innovate, 
          and make a lasting impact through real-world experience.
        </p>
      </div>

      <div className="relative flex flex-col sm:flex-row sm:items-center">
        {/* Horizontal line for desktop */}
        <div className="hidden sm:block absolute top-3.5 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>

        {milestones.map((milestone, index) => (
          <div key={index} className="relative flex flex-col sm:flex-1 items-center sm:text-center mb-10 sm:mb-0 z-10">
            {/* Circle */}
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: milestone.color }}
            >
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>

            {/* Content */}
            <div className="mt-4 sm:mt-6 max-w-[220px]">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {milestone.title}
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-1">
                {milestone.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
