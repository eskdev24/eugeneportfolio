
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  github?: string;
  liveDemo?: string;
  rightAligned?: boolean;
}

const projects: ProjectProps[] = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and a clean user interface.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    github: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses to track sales, inventory, and customer data. Features real-time data visualization and analytics.",
    techStack: ["Next.js", "MongoDB", "Express", "Node.js", "Chart.js"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    github: "https://github.com",
    liveDemo: "https://example.com",
    rightAligned: true,
  },
  {
    title: "Task Management App",
    description: "A full-featured task management application with drag-and-drop functionality, user authentication, and real-time updates.",
    techStack: ["React", "Firebase", "Redux", "Material UI"],
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    github: "https://github.com",
    liveDemo: "https://example.com",
  },
];

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { title, description, techStack, image, github, liveDemo, rightAligned } = project;
  
  return (
    <div className={`relative md:grid md:grid-cols-12 gap-4 my-20 ${rightAligned ? 'text-right' : 'text-left'}`}>
      {/* Project Image (positioned differently based on alignment) */}
      <div className={`md:col-span-7 ${rightAligned ? 'md:col-start-6' : 'md:col-start-1'} relative z-10`}>
        <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="block relative group">
          <div className="absolute inset-0 bg-mint/30 md:bg-mint/20 md:group-hover:bg-transparent transition-colors rounded overflow-hidden"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded shadow-lg"
          />
        </a>
      </div>
      
      {/* Project Info */}
      <div className={`md:col-span-6 ${rightAligned ? 'md:col-start-1' : 'md:col-start-7'} md:row-start-1 relative z-20`}>
        <div className="md:absolute md:top-0 md:w-full h-full flex flex-col justify-center p-6 md:p-0">
          <p className="text-mint font-mono text-sm mb-1">Featured Project</p>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          
          <Card className="mb-4 bg-navy-light text-slate shadow-lg">
            <CardContent className="p-6">
              <p>{description}</p>
            </CardContent>
          </Card>
          
          <ul className={`flex flex-wrap gap-2 mb-4 ${rightAligned ? 'justify-end' : 'justify-start'}`}>
            {techStack.map((tech) => (
              <li key={tech} className="text-xs font-mono text-slate-light">
                {tech}
              </li>
            ))}
          </ul>
          
          <div className={`flex gap-4 ${rightAligned ? 'justify-end' : 'justify-start'}`}>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                <Button variant="ghost" size="icon" className="text-slate-light hover:text-mint">
                  <Github size={20} />
                </Button>
              </a>
            )}
            {liveDemo && (
              <a href={liveDemo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                <Button variant="ghost" size="icon" className="text-slate-light hover:text-mint">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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
    <section id="projects" className="py-20 px-6 md:px-20">
      <h2 className="section-heading">Projects</h2>
      <div ref={sectionRef} className="section-content">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
