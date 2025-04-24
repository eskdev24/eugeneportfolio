
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', path: '/about' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'experience', label: 'Experience', path: '/#experience' },
    { id: 'contact', label: 'Contact', path: '/#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled ? "bg-navy/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-mint font-heading font-bold text-2xl">
          Portfolio
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <Link 
              key={item.id}
              to={item.path}
            >
              <Button 
                variant="ghost" 
                className={cn(
                  "text-slate hover:text-mint transition-colors",
                  "opacity-0 animate-fade-in",
                )}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <span className="text-mint mr-1 text-xs">{`0${index + 1}.`}</span>
                {item.label}
              </Button>
            </Link>
          ))}
          <Button 
            className="ml-4 opacity-0 animate-fade-in border border-mint text-mint hover:bg-mint/10"
            style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
            variant="outline"
          >
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-mint"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-navy-dark/95 flex flex-col items-center justify-center z-40 transition-all duration-300",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <nav className="flex flex-col items-center space-y-6">
          {navItems.map((item, index) => (
            <Link 
              key={item.id}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button 
                variant="ghost" 
                className="text-slate-light hover:text-mint text-lg"
              >
                <span className="text-mint mb-1 block text-sm">{`0${index + 1}.`}</span>
                {item.label}
              </Button>
            </Link>
          ))}
          <Button 
            className="mt-4 border border-mint text-mint hover:bg-mint/10"
            variant="outline"
          >
            Resume
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
