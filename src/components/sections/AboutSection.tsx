
import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, BookOpen, Award, Bot, Database, Layers, Eye, Github, Terminal } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Programming",
      description: "Python, TypeScript, JavaScript",
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "React, Tailwind CSS, Vite",
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Backend",
      description: "Supabase, WebSockets, REST APIs",
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Computer Vision",
      description: "OpenCV, Image Processing, Object Detection",
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI & ML",
      description: "Deep Learning, Neural Networks, Machine Learning",
    },
    {
      icon: <Terminal className="h-8 w-8 text-primary" />,
      title: "Development Tools",
      description: "Git, GitHub, VS Code, Docker",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Education",
      description: "B.E. Info Science & Engineering at RVITM",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Certifications",
      description: "HarvardX Python, Digital Marketing",
    },
  ];

  return (
    <section id="about" className="section-container">
      <SectionHeading
        title="About Me"
        subtitle="An investment in knowledge pays the best interest. – Benjamin Franklin"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">My Story</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm Sanmay S R, a third-year Information Science and Engineering student at 
              RV Institute of Technology and Management (RVITM) with a passion for coding 
              and AI-driven innovation.
            </p>
            <p>
              With proficiency in Python and Deep Learning, I delivered a real-time IRIS-PUPIL 
              ratio detection system during my Machine Learning Internship at Aytasense 
              Technologies, earning recognition from the CEO for impactful results.
            </p>
            <p>
              As President of RVITM Cubing Association, I've coded tools in Python to streamline 
              events like Bangalore Cube Open 2024—India's largest cubing competition of 2024—showcasing 
              my blend of tech and leadership. My NCC Lance Corporal experience honed my analytical 
              skills under pressure, and I thrive on turning ideas into code that delivers.
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Education & Background</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-semibold">RV Institute of Technology and Management</h4>
              <p className="text-sm text-muted-foreground">
                Bachelor of Engineering - BE, Information science and engineering
              </p>
              <p className="text-sm text-muted-foreground">December 2022 - December 2026</p>
            </div>
            
            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-semibold">Nalanda Achievers Ascent PU College</h4>
              <p className="text-sm text-muted-foreground">PUC, PCMB</p>
              <p className="text-sm text-muted-foreground">April 2020 - April 2022</p>
            </div>
            
            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-semibold">Kunigal Valley International Residential School</h4>
              <p className="text-sm text-muted-foreground">ICSE</p>
              <p className="text-sm text-muted-foreground">March 2016 - March 2020</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-6 text-center">Skills & Expertise</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1">{skill.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg">{skill.title}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
