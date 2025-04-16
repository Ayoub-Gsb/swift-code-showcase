
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
                alt="Person working on code"
                className="w-full"
              />
            </div>
          </div>
          <div className="md:w-3/5">
            <h2 className="text-3xl font-bold mb-4 fadeup-animation">About Me</h2>
            <div className="space-y-4">
              <p className="text-foreground/80 fadeup-animation">
                👋 Hi, I'm Bennadir Saber Ayoub
              </p>
              <p className="text-foreground/80 fadeup-animation">
                I'm a first-year student at the École Nationale Supérieure Polytechnique (ENSP) with a passion for web development and software engineering. Currently diving deep into JavaScript and React, I'm building a solid foundation in front-end development.
              </p>
              <p className="text-foreground/80 fadeup-animation">
                Alongside web technologies, I also have strong skills in C and C++, which help me understand programming fundamentals and write efficient code. I love creating websites and working on real-world projects that challenge me to learn and grow.
              </p>
              <p className="text-foreground/80 fadeup-animation">
                Welcome to my portfolio
              </p>
              <div className="fadeup-animation pt-4">
                <h3 className="font-semibold text-xl mb-2">My Development Philosophy</h3>
                <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                  <li>Building clean, maintainable code</li>
                  <li>Creating intuitive user experiences</li>
                  <li>Continuous learning and growth</li>
                  <li>Solving real-world problems with technology</li>
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
