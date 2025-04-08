
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-400/5 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 text-center staggered-fade-in">
        <span className="inline-block text-sm md:text-base font-semibold text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10">
          Information Science & Engineering Student
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hey, I'm <span className="gradient-text">Sanmay S R</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          A passionate programmer, AI enthusiast, and leader with a focus on building 
          impactful solutions through coding and innovation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">View My Projects</a>
          </Button>
          
          <Button variant="outline" size="lg" asChild>
            <a href="/resume.pdf" download="Sanmay_SR_Resume.pdf">
              Download Resume
            </a>
          </Button>
        </div>

        <a 
          href="#about" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Learn More</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
