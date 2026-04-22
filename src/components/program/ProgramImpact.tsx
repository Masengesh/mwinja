"use client";

import { Program } from "@/lib/programs";
import { useEffect, useState } from "react";
import { HeartHandshake, Users, Award, MapPin, TrendingUp } from "lucide-react";

interface ProgramImpactProps {
  program: Program;
}

function AnimatedCounter({ value, label, icon, delay }: { value: string; label: string; icon: React.ReactNode; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("program-impact");
      if (element && !hasAnimated) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  return (
    <div
      className={`text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-blue/10 rounded-2xl mb-4 text-primary-blue">
        {icon}
      </div>
      <p className="text-4xl md:text-5xl font-bold text-dark-navy mb-2">{value}</p>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}

export default function ProgramImpact({ program }: ProgramImpactProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("program-impact");
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

  const stats = [
    {
      value: program.impact.peopleHelped,
      label: "People Helped",
      icon: <HeartHandshake className="w-7 h-7" />,
    },
    {
      value: program.impact.beneficiaries,
      label: "Total Beneficiaries",
      icon: <Users className="w-7 h-7" />,
    },
    {
      value: program.impact.projects,
      label: "Active Projects",
      icon: <Award className="w-7 h-7" />,
    },
    {
      value: program.impact.communities,
      label: "Communities Reached",
      icon: <MapPin className="w-7 h-7" />,
    },
  ];

  return (
    <section id="program-impact" className="py-20 lg:py-28 bg-dark-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div 
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-accent-gold/20 rounded-2xl mb-6">
            <TrendingUp className="w-7 h-7 text-accent-gold" />
          </div>
          <h2 className="font-jost text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Measurable results that demonstrate our commitment to creating lasting change in the lives of those we serve.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div 
          className={`mt-12 text-center transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <p className="text-white/60 text-sm">
            * Numbers represent cumulative impact since program inception
          </p>
        </div>
      </div>
    </section>
  );
}