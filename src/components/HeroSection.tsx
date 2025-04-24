
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-20">
      <p className="text-mint mb-5 font-mono opacity-0 animate-fade-in">
        Hi, my name is
      </p>
      <h1 className="text-4xl md:text-7xl font-bold text-slate-light mb-4 opacity-0 animate-fade-in animate-delay-100">
        John Doe.
      </h1>
      <h2 className="text-3xl md:text-6xl font-bold text-slate mb-6 opacity-0 animate-fade-in animate-delay-200">
        I build things for the web.
      </h2>
      <p className="max-w-xl text-slate mb-8 opacity-0 animate-fade-in animate-delay-300">
        I'm a full-stack developer specializing in building exceptional digital experiences.
        Currently, I'm focused on building accessible, human-centered products.
      </p>
      <div className="opacity-0 animate-fade-in animate-delay-400">
        <Button 
          className="border border-mint text-mint hover:bg-mint/10"
          variant="outline"
        >
          Resume
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
