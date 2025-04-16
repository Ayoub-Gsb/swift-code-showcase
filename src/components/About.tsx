
import React, { useEffect, useRef } from "react";

const About: React.FC = () => {
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
    <section id="about" ref={sectionRef} className="bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5 fadeup-animation">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80"
                alt="John Doe working on code"
                className="w-full"
              />
            </div>
          </div>
          <div className="md:w-3/5">
            <h2 className="text-3xl font-bold mb-4 fadeup-animation">About Me</h2>
            <div className="space-y-4">
              <p className="text-foreground/80 fadeup-animation">
                I'm a passionate front-end developer with a knack for creating beautiful, 
                functional, and accessible web experiences. My journey in web development 
                started 4 years ago, and I've been hooked ever since.
              </p>
              <p className="text-foreground/80 fadeup-animation">
                I love participating in hackathons because they push me to think creatively,
                solve problems efficiently, and collaborate effectively with diverse teams.
                The energy and innovation at these events fuel my passion for coding and
                continuously expanding my skill set.
              </p>
              <p className="text-foreground/80 fadeup-animation">
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or sharing my knowledge through blog posts and
                mentoring junior developers.
              </p>
              <div className="fadeup-animation pt-4">
                <h3 className="font-semibold text-xl mb-2">My Hackathon Philosophy</h3>
                <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                  <li>Collaboration over competition</li>
                  <li>Learning is more valuable than winning</li>
                  <li>Build solutions that solve real problems</li>
                  <li>Code quality matters, even in a time crunch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
