
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-card text-card-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-center md:text-left">
              <span className="font-bold">Portfolio</span>{" "}
              <span className="text-foreground/60">© {new Date().getFullYear()} Bennadir Saber Ayoub</span>
            </p>
            <p className="text-sm text-foreground/60 mt-1 text-center md:text-left">
              Designed & Built with 💖 for Hackathons
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="mailto:saber_ayoub.bennadir@g.enp.edu.dz"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Ayoub-Gsb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/saber-ayoub-bennadir/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
