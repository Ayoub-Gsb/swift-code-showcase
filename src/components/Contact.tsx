
import React, { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  };

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
    <section id="contact" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center fadeup-animation">Get In Touch</h2>
        <p className="text-foreground/70 mb-12 max-w-2xl mx-auto text-center fadeup-animation">
          Interested in collaborating on a project or want to chat about web development? 
          Feel free to reach out through the form below or via social media.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 fadeup-animation">
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        Sending... <Send className="ml-2 h-4 w-4 animate-pulse" />
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-1/2 fadeup-animation">
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>
                  Let's connect on social media or via email.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a 
                        href="mailto:saber_ayoub.bennadir@g.enp.edu.dz" 
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        saber_ayoub.bennadir@g.enp.edu.dz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <a 
                        href="https://github.com/Ayoub-Gsb" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        github.com/Ayoub-Gsb
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/saber-ayoub-bennadir/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        linkedin.com/in/saber-ayoub-bennadir
                      </a>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-medium mb-2">Available For</h3>
                    <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                      <li>Web Development Projects</li>
                      <li>Hackathon Collaborations</li>
                      <li>Open Source Contributions</li>
                      <li>Learning Opportunities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
