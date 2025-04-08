import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary">Sanmay S R</h2>
            <p className="text-muted-foreground mt-2">
              B.E. (Info. Sci. Engg.) @ RVITM
            </p>
          </div>

          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-12">
            <div>
              <h3 className="font-semibold mb-2">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-muted-foreground hover:text-primary">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/sanmay-sr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="GitHub profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanmay-sr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:itssanmay@gmail.com"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://drive.google.com/file/d/15dS2xW3M61DeRvqbQu0W9xA1siA93fjY/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="View Resume"
                >
                  <FileText size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted-foreground/10 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sanmay S R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
