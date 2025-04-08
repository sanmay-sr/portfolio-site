
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Sanmay S R
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="outline" size="sm" asChild>
              <a 
                href="/resume.pdf" 
                download="Sanmay_SR_Resume.pdf"
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="outline" size="sm" asChild className="w-full">
                <a 
                  href="/resume.pdf" 
                  download="Sanmay_SR_Resume.pdf"
                  className="flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </a>
              </Button>
              
              <div className="flex items-center space-x-4 pt-4 border-t border-muted">
                <a 
                  href="https://github.com/sanmay-sr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary"
                  aria-label="GitHub profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sanmay-sr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:itssanmay@gmail.com" 
                  className="text-foreground hover:text-primary"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
