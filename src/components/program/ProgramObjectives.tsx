"use client";

import { Program } from "@/lib/programs";
import { useEffect, useState } from "react";
import { Target, CheckCircle } from "lucide-react";

interface ProgramObjectivesProps {
  program: Program;
}

export default function ProgramObjectives({ program }: ProgramObjectivesProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("program-objectives");
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

  return (
    <section id="program-objectives" className="py-20 lg:py-28 bg-light-blue">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - Header */}
          <div 
            className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-blue rounded-2xl mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h2 className="font-jost text-3xl md:text-4xl font-bold text-dark-navy mb-4">
              Our Objectives
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We have established clear, measurable goals that guide our work and ensure we create meaningful impact in the communities we serve.
            </p>
            <div className="mt-6 w-20 h-1 bg-accent-gold rounded-full" />
          </div>

          {/* Right column - Objectives list */}
          <div className="space-y-4">
            {program.objectives.map((objective, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
                  isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className={`flex-shrink-0 w-8 h-8 ${program.color} rounded-lg flex items-center justify-center`}>
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed pt-1">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}