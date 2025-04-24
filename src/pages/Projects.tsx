
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-navy text-slate">
      <Navbar />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Projects;
