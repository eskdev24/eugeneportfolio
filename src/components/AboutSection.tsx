
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    ["JavaScript (ES6+)", "TypeScript", "React", "Next.js"],
    ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    ["Tailwind CSS", "Docker", "AWS", "Git"]
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-20">
      <h2 className="section-heading">About Me</h2>
      <div ref={sectionRef} className="section-content grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="mb-4">
            Hello! I'm John, a full-stack developer based in San Francisco, CA. I enjoy creating things that live on the internet, whether that's websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
          </p>
          <p className="mb-4">
            Shortly after graduating from <span className="text-mint">University of California</span>, I joined the engineering team at a small startup where I work on a wide variety of interesting and meaningful projects on a daily basis.
          </p>
          <p className="mb-8">
            Here are a few technologies I've been working with recently:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
            {skills.map((skillGroup, groupIndex) => (
              <ul key={groupIndex} className="space-y-2">
                {skillGroup.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <span className="text-mint mr-2">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        
        <div className="relative group">
          <div className="relative w-full max-w-xs mx-auto md:mx-0">
            {/* Profile image wrapper with overlay */}
            <div className="relative overflow-hidden rounded-md">
              <div className="absolute inset-0 bg-mint/20 mix-blend-multiply group-hover:opacity-0 transition-opacity z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="John Doe" 
                className="w-full rounded-md grayscale group-hover:grayscale-0 transition-all" 
              />
            </div>
            <div className="absolute -inset-1.5 border border-mint rounded-md -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
