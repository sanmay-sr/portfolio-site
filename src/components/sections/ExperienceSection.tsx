
import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award, Users, Medal } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Aytasense Technologies Private Limited",
      period: "August 2024 - February 2025",
      description: "Worked on the research and development of \"Detection of IRIS-PUPIL Ratio in Real-Time\" using Machine Learning techniques. Applied OpenCV, Python, and Deep Learning to create an effective computer vision solution.",
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      location: "Bangalore Urban, Karnataka, India",
      highlights: ["Computer Vision", "Python", "OpenCV", "Real-time processing"],
    },
    {
      title: "President",
      company: "RVITM Cubing Association",
      period: "February 2023 - Present",
      description: "Leading the college cubing club and organizing competitions, including Bangalore Cube Open 2024—India's largest cubing competition of 2024. Developed Python tools to streamline event management and improve participant experience.",
      icon: <Users className="h-10 w-10 text-primary" />,
      location: "Bengaluru, Karnataka, India",
      highlights: ["Leadership", "Event Management", "Python Development", "Team Coordination"],
    },
    {
      title: "WCA Advisory Council member",
      company: "World Cube Association",
      period: "June 2024 - August 2024",
      description: "Served as an advisor for the global speedcubing governing body, contributing to policy development and technical improvements for competition management systems.",
      icon: <Award className="h-10 w-10 text-primary" />,
      location: "Los Angeles, California, United States",
      highlights: ["International Collaboration", "Policy Development", "Technical Advisory"],
    },
    {
      title: "Lance Corporal",
      company: "NATIONAL CADET CORPS - India",
      period: "January 2023 - Present",
      description: "Active member of the NCC with Regt No: KA2023SDA032838, Unit: 3KAR, Group: A, Directorate: KARNATAKA & GOA. Developed leadership, discipline, and teamwork skills through various training programs and activities.",
      icon: <Medal className="h-10 w-10 text-primary" />,
      location: "Karnataka, India",
      highlights: ["Leadership", "Discipline", "Team Management", "Strategic Thinking"],
    },
  ];

  return (
    <section id="experience" className="section-container">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey and leadership roles that have shaped my skills and expertise."
      />

      <div className="space-y-10">
        {experiences.map((experience, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center justify-center bg-muted rounded-full p-4 h-20 w-20 flex-shrink-0 mx-auto md:mx-0">
                  {experience.icon}
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <p className="text-primary font-medium">{experience.company}</p>
                    </div>
                    <div className="text-muted-foreground text-sm mt-2 md:mt-0 text-center md:text-right">
                      <p>{experience.period}</p>
                      <p>{experience.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 mt-2">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.highlights.map((highlight, i) => (
                      <Badge key={i} variant="outline">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
