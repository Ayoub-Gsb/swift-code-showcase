
import React, { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll(".fadeup-animation");
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("appear");
              }, index * 100);
            });
          }
        });
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
    <section id="home" ref={sectionRef} className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 py-24 mt-16">
        <div className="max-w-3xl">
          <p className="text-primary font-medium mb-2 fadeup-animation">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 fadeup-animation">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground/80 mb-6 fadeup-animation">
            Front-End Developer | Hackathon Enthusiast
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl fadeup-animation">
            I build exceptional, responsive websites and web applications that
            provide intuitive user experiences while maintaining clean code.
          </p>
          <div className="flex flex-wrap gap-4 mb-12 fadeup-animation">
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Let's Collaborate</a>
            </Button>
          </div>
          <div className="flex gap-4 fadeup-animation">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-10 animate-bounce">
        <a href="#skills" aria-label="Scroll to Skills Section">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
