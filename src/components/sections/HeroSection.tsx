
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Decorative circles - smaller on mobile */}
      <div className="absolute top-20 left-5 md:left-10 w-40 md:w-64 h-40 md:h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-5 md:right-10 w-48 md:w-80 h-48 md:h-80 rounded-full bg-blue-400/5 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center staggered-fade-in">
        <span className="inline-flex text-xs md:text-sm font-semibold text-primary mb-3 md:mb-4 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/10">
          Information Science & Engineering Student
        </span>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
          Hey, I'm <span className="gradient-text">Sanmay S R</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8">
          A passionate programmer, AI enthusiast, and leader with a focus on building 
          impactful solutions through coding and innovation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <Button asChild size={isMobile ? "default" : "lg"} className="w-full sm:w-auto">
            <a href="#projects">View My Projects</a>
          </Button>
          
          <Button variant="outline" size={isMobile ? "default" : "lg"} asChild className="w-full sm:w-auto mt-3 sm:mt-0">
            <a 
              href="https://drive.google.com/file/d/15dS2xW3M61DeRvqbQu0W9xA1siA93fjY/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Button>
        </div>

        <a 
          href="#about" 
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs sm:text-sm mb-1 md:mb-2">Learn More</span>
          <ArrowDown className="animate-bounce w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
