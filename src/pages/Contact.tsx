
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-navy text-slate">
      <Navbar />
      <section className="py-20 px-6 md:px-20">
        <h2 className="section-heading">Contact</h2>
        <div className="max-w-2xl mx-auto space-y-8 section-content">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-light">Get In Touch</h3>
            <p className="text-lg">
              I'm currently available for freelance projects, collaborations, or full-time positions. 
              Feel free to reach out!
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-navy-light p-6 rounded-lg flex flex-col items-center text-center">
              <Mail className="text-mint mb-4 size-8" />
              <h4 className="text-slate-light font-semibold mb-2">Email</h4>
              <a href="mailto:contact@eugenesimpson.com" className="text-mint hover:text-mint-light transition-colors">
                contact@eugenesimpson.com
              </a>
            </div>

            <div className="bg-navy-light p-6 rounded-lg flex flex-col items-center text-center">
              <Phone className="text-mint mb-4 size-8" />
              <h4 className="text-slate-light font-semibold mb-2">Phone</h4>
              <a href="tel:+233123456789" className="text-mint hover:text-mint-light transition-colors">
                +233 123 456 789
              </a>
            </div>

            <div className="bg-navy-light p-6 rounded-lg flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
              <MapPin className="text-mint mb-4 size-8" />
              <h4 className="text-slate-light font-semibold mb-2">Location</h4>
              <p>Takoradi, Ghana</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
