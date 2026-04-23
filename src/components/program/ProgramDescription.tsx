"use client";

import { Program } from "@/lib/programs";
import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

interface ProgramDescriptionProps {
  program: Program;
}

export default function ProgramDescription({ program }: ProgramDescriptionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("program-description");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsLoaded(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const paragraphs = program.fullDescription.split("\n\n");

  return (
    <section id="program-description" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-blue/10 rounded-2xl mb-6">
            <BookOpen className="w-7 h-7 text-primary-blue" />
          </div>
          <h2 className="font-jost text-3xl md:text-4xl font-bold text-dark-navy mb-4">
            About This Program
          </h2>
          <div className="w-20 h-1 bg-accent-gold mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-gray-600 text-lg leading-relaxed transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Decorative quote */}
        <div 
          className={`mt-12 p-8 bg-light-blue rounded-2xl border-l-4 border-primary-blue transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-dark-navy italic text-lg font-medium">
            "Your Support helps to transform lives. From education to health care, every contribution moves us one step closer"
          </p>
          <p className="text-gray-500 mt-2 text-sm">— protect and love, care and support vulnerable people</p>
        </div>
      </div>
    </section>
  );
}