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
      <div className="hidden md:block">
        <img 
          src="/lovable-uploads/e5b90462-ee3e-4b45-a303-2b5e00e41159.png" 
          alt="Eugene Simpson" 
          className="w-[300px] h-[300px] rounded-full object-cover opacity-0 animate-fade-in animate-delay-500" 
        />
      </div>
    </section>;
};

export default HeroSection;
