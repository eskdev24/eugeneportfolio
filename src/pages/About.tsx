
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-navy text-slate">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
