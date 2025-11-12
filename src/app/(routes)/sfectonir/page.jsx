"use client";
import React, { useState } from "react";
import HeroSfect from "@/components/sfectonir/HeroSfect";
import FormSfect from "@/components/sfectonir/FormSfect";
import AboutSfect from "@/components/sfectonir/AboutSfect";
import Labs from "@/components/sfectonir/Labs";
import KeyAchievement from "@/components/sfectonir/KeyAchievement";
import Gallery from "@/components/sfectonir/Gallery";
import Partners from "@/components/sfectonir/Partners";
import Testimonials from "@/components/sfectonir/Testimonials";
import Heading from "@/components/Heading";
import ProfessionalTestimonials from "@/components/sfectonir/ProfessionalTestimonials"; 
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
export default function page() {
   const [tab, setTab] = useState("students");


  return (
    <>
      <HeroSfect />
      <AboutSfect />
      <Labs />
      <KeyAchievement />
      {/* <Partners/> */}
      <Gallery />
      <div id="pre-register-form">
          <section className="mx-auto xl:container md:container sm:container py-8 lg:py-24 px-4">
       
         <Heading
          tit1="Join Our "
          tit2={"Upcoming Program"}
          // tit2="Pre-register today and be the first to experience innovation, collaboration, and growth."
        />
        <FormSfect />
       
      </section>
      </div>
        <section className="mx-auto xl:container md:container sm:container py-8 lg:py-24 px-4">
      <div className="text-center mb-12">
        <Heading tit1="Testimonials" tit2="What They Say About Us" />

        {/* Tabs */}
        <Tabs defaultValue="students">
          <div className="flex justify-center my-8">
            <TabsList className="border rounded-xl w-full max-w-[400px]">
              <TabsTrigger value="students" className="w-1/2">
                Students
              </TabsTrigger>
              <TabsTrigger value="professionals" className="w-1/2">
                Professionals
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Contents */}
          <TabsContent value="students">
            <Testimonials />
          </TabsContent>
          <TabsContent value="professionals">
            <ProfessionalTestimonials />
          </TabsContent>
        </Tabs>
      </div>
    </section>
    </>
  );
}
