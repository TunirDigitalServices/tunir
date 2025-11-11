import React from "react";
import HeroSfect from "@/components/sfectonir/HeroSfect";
import FormSfect from "@/components/sfectonir/FormSfect";
import AboutSfect from "@/components/sfectonir/AboutSfect";
import Labs from "@/components/sfectonir/Labs";
import KeyAchievement from "@/components/sfectonir/KeyAchievement";
import Gallery from "@/components/sfectonir/Gallery";
import Partners from "@/components/sfectonir/Partners";
import Testimonials from "@/components/sfectonir/Testimonials";
import Heading from "@/components/Heading";
export default function page() {
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
          <Testimonials />
        </div>
      </section>
    </>
  );
}
