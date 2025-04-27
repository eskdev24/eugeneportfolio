import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
const HeroSection = () => {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Eugene Simpson";
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);
  return <section id="home" className="min-h-screen flex items-center justify-between py-20 px-6 md:px-20">
      <div className="flex flex-col max-w-2xl">
        <p className="text-mint mb-5 font-mono opacity-0 animate-fade-in text-2xl">
          Hi, my name is
        </p>
        <h1 className="text-4xl mb-4 text-cyan-600 font-bold flex items-center md:text-5xl">
          {displayedName}
          <span className="animate-cursor-blink ml-1">|</span>
        </h1>
        <h2 className="text-3xl font-bold text-slate mb-6 opacity-0 animate-fade-in animate-delay-200 md:text-5xl">
          I build things for the web.
        </h2>
        <p className="max-w-xl text-slate mb-8 opacity-0 animate-fade-in animate-delay-300 text-xl">
          I'm a full-stack developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="opacity-0 animate-fade-in animate-delay-400">
          <Button className="border border-mint text-mint hover:bg-mint/10" variant="outline">
            Resume
          </Button>
        </div>
      </div>
      <div className="hidden md:block ml-20">
        <div className="relative group rounded-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-mint via-cyan-500 to-mint rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <img alt="Eugene Simpson" src="/lovable-uploads/11a4b51a-d8a9-47a2-8d8d-bcbb9439cdca.jpg" className="relative w-[500px] h-[500px] rounded-full opacity-0 animate-fade-in animate-delay-500 object-cover" />
        </div>
      </div>
    </section>;
};
export default HeroSection;