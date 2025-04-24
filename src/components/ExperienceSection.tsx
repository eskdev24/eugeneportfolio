
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface JobExperience {
  company: string;
  title: string;
  range: string;
  duties: string[];
}

const experiences: JobExperience[] = [
  {
    company: "Acme Corporation",
    title: "Senior Software Engineer",
    range: "January 2022 - Present",
    duties: [
      "Led the development of a microservices architecture that improved system response time by 40%",
      "Architected and implemented a real-time analytics dashboard using React and WebSockets",
      "Mentored junior developers through code reviews and pair programming sessions",
      "Collaborated with the product team to define and prioritize new features"
    ]
  },
  {
    company: "Tech Innovators Inc.",
    title: "Full Stack Developer",
    range: "March 2020 - December 2021",
    duties: [
      "Developed RESTful APIs using Node.js and Express, serving data to React frontends",
      "Implemented user authentication and authorization using JWT and OAuth 2.0",
      "Optimized PostgreSQL database queries, resulting in 35% faster page loads",
      "Participated in agile development processes, including daily standups and sprint planning"
    ]
  },
  {
    company: "StartUp Labs",
    title: "Frontend Developer",
    range: "June 2018 - February 2020",
    duties: [
      "Built responsive web applications using React and Redux",
      "Implemented UI components following design specifications and ensuring pixel-perfect designs",
      "Integrated third-party APIs and services to enhance application functionality",
      "Collaborated with UX designers to improve user experience and accessibility"
    ]
  },
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);
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

  return (
    <section id="experience" className="py-20 px-6 md:px-20">
      <h2 className="section-heading">Where I've Worked</h2>
      <div ref={sectionRef} className="section-content">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Tabs for mobile/tablet view */}
          <div className="flex overflow-x-auto md:hidden mb-6">
            {experiences.map((experience, idx) => (
              <Button 
                key={idx}
                onClick={() => setActiveTab(idx)}
                variant="ghost"
                className={cn(
                  "min-w-fit border-b-2 rounded-none text-sm whitespace-nowrap px-4",
                  activeTab === idx 
                    ? "border-mint text-mint" 
                    : "border-transparent text-slate hover:border-slate/30"
                )}
              >
                {experience.company}
              </Button>
            ))}
          </div>

          {/* Vertical tabs for desktop */}
          <div className="hidden md:flex md:flex-col border-l border-secondary min-w-[200px]">
            {experiences.map((experience, idx) => (
              <Button 
                key={idx}
                onClick={() => setActiveTab(idx)}
                variant="ghost"
                className={cn(
                  "justify-start rounded-none border-l-2 -ml-[2px] text-sm py-3",
                  activeTab === idx 
                    ? "border-mint text-mint bg-mint/5" 
                    : "border-transparent text-slate hover:border-slate/30 hover:text-slate-light"
                )}
              >
                {experience.company}
              </Button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-1">
              {experiences[activeTab].title}{" "}
              <span className="text-mint">@ {experiences[activeTab].company}</span>
            </h3>
            <p className="text-slate-dark mb-4 font-mono text-sm">
              {experiences[activeTab].range}
            </p>
            <ul className="space-y-4">
              {experiences[activeTab].duties.map((duty, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-mint mr-2 mt-1">▹</span>
                  <span>{duty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
