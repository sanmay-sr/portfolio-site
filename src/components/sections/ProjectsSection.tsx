import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website built with modern web technologies showcasing my projects, skills, and experience.",
      image: "/portfolio-screenshot.png",
      imageAlt: "Screenshot of my personal portfolio website with a modern, clean design",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      demoLink: "/",
      repoLink: "https://github.com/sanmay-sr/portfolio-site",
      hasDemoAvailable: true,
    },
    {
      title: "OpenPad",
      description:
        "A collaborative text editor and note-taking application with real-time synchronization and markdown support.",
      image: "/openpad-screenshot.png",
      imageAlt: "Screenshot of OpenPad collaborative text editor interface",
      tags: ["Python", "React", "Firebase", "WebSockets"],
      demoLink: "https://openpad-gamma.vercel.app/",
      repoLink: "#",
      repoText: "Codebase available on demand",
      hasDemoAvailable: true,
    },
    {
      title: "IRIS-PUPIL Ratio Detection",
      description:
        "Real-time detection system for measuring IRIS-PUPIL ratio using computer vision and machine learning techniques.",
      image: "/iris-detection-screenshot.svg",
      imageAlt: "Visualization of eye tracking and pupil detection technology",
      tags: ["Computer Vision", "Python", "OpenCV", "Deep Learning"],
      demoLink: "#",
      repoLink: "https://github.com/sanmay-sr/IrisPupilTracker",
      hasDemoAvailable: false,
    },
  ];

  return (
    <section id="projects" className="section-container bg-secondary/50">
      <SectionHeading
        title="Projects"
        subtitle="A showcase of my technical skills, creativity, and problem-solving abilities."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden flex flex-col h-full bg-card hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    {project.repoText || "Code"}
                  </a>
                </Button>
                {project.hasDemoAvailable ? (
                  <Button size="sm" asChild>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                ) : (
                  <Button size="sm" variant="secondary" disabled className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    Demo Unavailable
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;