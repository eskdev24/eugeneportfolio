import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  const socialLinks = [{
    icon: <Github size={20} />,
    url: "https://github.com",
    label: "GitHub"
  }, {
    icon: <Linkedin size={20} />,
    url: "https://linkedin.com",
    label: "LinkedIn"
  }, {
    icon: <Mail size={20} />,
    url: "mailto:hello@example.com",
    label: "Email"
  }];
  return <footer className="py-6 px-6 text-center">
      <div className="flex justify-center space-x-5 mb-4">
        {socialLinks.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-slate hover:text-mint transition-colors">
            {link.icon}
          </a>)}
      </div>
      <p className="text-slate-dark text-sm font-mono">Designed & Built by Eugene Simpson</p>
    </footer>;
};
export default Footer;