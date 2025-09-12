"use client";
import {
  LayoutDashboard,
  Code2,
  Phone,
  Server,
  Monitor,
  Smartphone,
  Video,
  Megaphone,
  BarChart,
  Palette,
  StepForward,
  Camera,
  Lightbulb,
  Wrench,
  UserCheck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import media from "../../../public/media/media.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Heading from "../Heading";

// Web Development Services
const servicesData = [
  {
    icon: <Code2 size={72} strokeWidth={0.8} />,
    title: "Custom Web Development",
    description:
      "We create modern, high-performance websites and custom web applications tailored specifically to your business needs.",
  },
  {
    icon: <Phone size={72} strokeWidth={0.8} />,
    title: "Mobile Development",
    description:
      "We design innovative mobile applications for iOS and Android, focused on enhancing user experience .",
  },
  {
    icon: <Monitor size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "We develop visually appealing and ergonomic designs, ensuring an optimal user experience on your websites.",
  },
  {
    icon: <Server size={72} strokeWidth={0.8} />,
    title: "Web Deployment",
    description:
      "We manage the deployment of your web applications, ensuring performance, security, and online availability.",
  },
  {
    icon: <Lightbulb size={72} strokeWidth={0.8} />,
    title: "Consulting",
    description:
      "We offer expert consulting services to help you define your digital strategy and make informed decisions for your web projects.",
  },
  {
    icon: <Wrench size={72} strokeWidth={0.8} />,
    title: "Website Maintenance",
    description:
      "We provide ongoing website maintenance services to ensure your site remains up-to-date, secure, and performing optimally.",
  },
];

// Media Services (unchanged)
const mediaServicesData = [
  {
    icon: <Video size={72} strokeWidth={0.8} />,
    title: "Video Production",
    description:
      "We produce professional videos, including podcasts and reels, to enhance your online visibility and engage your audience.",
  },
  {
    icon: <Megaphone size={72} strokeWidth={0.8} />,
    title: "Social Media Management",
    description:
      "We manage your social media accounts, creating organic content strategies that have helped our clients significantly increase their follower count.",
  },
  {
    icon: <BarChart size={72} strokeWidth={0.8} />,
    title: "Advertising Campaigns",
    description:
      "We design advertising campaigns on social media, optimizing your return on investment through in-depth analysis and precise targeting.",
  },
  {
    icon: <Camera size={72} strokeWidth={0.8} />,
    title: "Photography",
    description:
      "Our experienced photographers capture captivating images to enhance your visual presence and tell your story.",
  },
  {
    icon: <Palette size={72} strokeWidth={0.8} />,
    title: "Graphic Design",
    description:
      "We offer graphic design services, creating impactful visual materials that effectively communicate your message.",
  },
  {
    icon: <UserCheck size={72} strokeWidth={0.8} />,
    title: "Marketing Strategies",
    description:
      "We develop tailored marketing strategies that align with your business goals, enhancing your brand visibility and driving growth.",
  },
];

const Services = ({ isMedia, fromMedia, isWeb }) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="z-40" data-aos="fade-right">
      <div className="mx-auto sm:container z-40">
        <div className="mb-[3rem]">
          <Heading
            tit1={
              isMedia
                ? "MEDIA SERVICES"
                : isWeb
                ? "WEB DEVELOPMENT"
                : "OUR SERVICES"
            }
            tit2={
              isMedia ? "MEDIA SERVICES" : isWeb ? "SERVICES" : "OUR SERVICES"
            }
            withLottie={fromMedia ? media : undefined}
          />
        </div>
        <div className="mx-4">
          <Tabs defaultValue="company-info">
            <div className="flex justify-center">
              {!isMedia && !isWeb && (
                <TabsList className="w-full xl:grid xl:grid-cols-2 xl:max-w-[520px] border">
                  <TabsTrigger
                    className="w-[230px] xl:w-auto"
                    value="secteur-d'activité"
                  >
                    MEDIA
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-[230px] xl:w-auto"
                    value="company-info"
                  >
                    DÉVELOPPEMENT WEB
                  </TabsTrigger>
                </TabsList>
              )}
            </div>

            {/* Web Development Services */}
            {isWeb ? (
              <TabsContent value="company-info">
                <div className="grid  lg:grid-cols-3 sm:grid-cols-2 gap-12 lg:pt-12 md:gap-x-8 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8 mx-[2rem]">
                  {servicesData.map((item, index) => (
                    <Card
                      className="w-full transform transition-transform duration-300 hover:scale-105 
                          md:max-w-[324px] md:h-[250px] flex flex-col md:pt-16 md:pb-10 justify-center items-center relative 
                        max-w-[320px] h-[180px] pt-10 pb-6 md:hover:scale-102"
                      key={index}
                    >
                      <CardHeader className="text-primary absolute -top-[35px] lg:-top-[65px]">
                        <div className="lg:w-[140px] lg:h-[80px] bg-white dark:bg-background flex justify-center items-center w-[50px] h-[20px]">
                          {item.icon}
                        </div>
                      </CardHeader>
                      <CardContent className="text-center">
                        <CardTitle className="md:mb-4 mb-2  mt-14 md:mt-12 text-xl  md:text-2xl font-bold text-neutral-500 dark:text-neutral-500">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ) : (
              !isMedia && (
                <TabsContent value="company-info">
                  <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-12 py-24 md:gap-x-4 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8 mx-[2rem]">
                    {servicesData.map((item, index) => (
                        <Card
                        className="w-full transform transition-transform duration-300 hover:scale-105 
                            md:max-w-[324px] md:h-[250px] flex flex-col md:pt-16 md:pb-10 justify-center items-center relative 
                          max-w-[320px] h-[180px] pt-10 pb-6 md:hover:scale-102"
                        key={index}
                      >
                        <CardHeader className="text-primary absolute -top-[35px] lg:-top-[65px]">
                          <div className="lg:w-[140px] lg:h-[80px] bg-white dark:bg-background flex justify-center items-center w-[50px] h-[20px]">
                            {item.icon}
                          </div>
                        </CardHeader>
                        <CardContent className="text-center">
                          <CardTitle className="md:mb-4 mb-2  mt-14 md:mt-12 text-xl  md:text-2xl font-bold text-neutral-500 dark:text-neutral-500">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                            {item.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              )
            )}

            {/* Media Services */}
            {isMedia ? (
              <div className="grid mx-[2rem] z-40 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 lg:py-12 justify-center gap-y-12 xl:gap-y-24 md:gap-x-4 xl:gap-x-8">
                {mediaServicesData.map((item, index) => (
                 <Card
                 className="w-full transform transition-transform duration-300 hover:scale-105 
                     md:max-w-[324px] md:h-[250px] flex flex-col md:pt-16 md:pb-10 justify-center items-center relative 
                   max-w-[320px] h-[180px] pt-10 pb-6 md:hover:scale-102"
                 key={index}
               >
                 <CardHeader className="text-primary absolute -top-[35px] lg:-top-[65px]">
                   <div className="lg:w-[140px] lg:h-[80px] bg-white dark:bg-background flex justify-center items-center w-[50px] h-[20px]">
                     {item.icon}
                   </div>
                 </CardHeader>
                 <CardContent className="text-center">
                   <CardTitle className="md:mb-4 mb-2  mt-14 md:mt-12 text-xl  md:text-2xl font-bold text-neutral-500 dark:text-neutral-500">
                     {item.title}
                   </CardTitle>
                   <CardDescription className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                     {item.description}
                   </CardDescription>
                 </CardContent>
               </Card>
                ))}
              </div>
            ) : (
              <TabsContent value="secteur-d'activité">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-12 py-24 md:gap-x-4 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8 mx-[2rem]">
                  {mediaServicesData.map((item, index) => (
                    <Card
                    className="w-full transform transition-transform duration-300 hover:scale-105 
                        md:max-w-[324px] md:h-[250px] flex flex-col md:pt-16 md:pb-10 justify-center items-center relative 
                      max-w-[320px] h-[180px] pt-10 pb-6 md:hover:scale-102"
                    key={index}
                  >
                    <CardHeader className="text-primary absolute -top-[35px] lg:-top-[65px]">
                      <div className="lg:w-[140px] lg:h-[80px] bg-white dark:bg-background flex justify-center items-center w-[50px] h-[20px]">
                        {item.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardTitle className="md:mb-4 mb-2  mt-14 md:mt-12 text-xl  md:text-2xl font-bold text-neutral-500 dark:text-neutral-500">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                  ))}
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Services;
