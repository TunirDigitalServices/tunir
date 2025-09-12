import Hero from "@/components/media/Hero";
import Services from "@/components/media/Services";
import Scrol from "@/components/media/Scrol";
import Podcast from "@/components/media/Podcast";
import MarketingStra from "@/components/media/MarketingStra";

export default function page() {
  return (
    <div>
      <Hero />
      <Services />
      <div className="relative">
      <Podcast />
      <MarketingStra />
      <div
        aria-hidden="true"
        class="md:flex absolute top-80 start-3/4 z-20 transform -translate-x-1/2 hidden "
      >
        <div class="bg-gradient-to-tl from-orange-100 via-orange-200 to-orange-100 blur-3xl md:w-[55rem] h-[35rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] dark:from-orange-900/20 dark:via-orange-900/70 dark:to-orange-900/70"></div>
        <div class="bg-gradient-to-r from-[#50e2d4]/20 to-purple-100 blur-3xl md:w-[95rem] h-[20rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
      </div>
      </div>
    </div>
  );
}
