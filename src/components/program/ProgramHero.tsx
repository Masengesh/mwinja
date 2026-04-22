"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Program } from "@/lib/programs";
import { useEffect, useState } from "react";

interface ProgramHeroProps {
  program: Program;
}

export default function ProgramHero({ program }: ProgramHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={program.image}
          alt={program.title}
          fill
          priority
          className="object-cover"
        />
        {/* #1976a6 overlay */}
        <div className="absolute inset-0 bg-primary-blue/50" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/60 via-transparent to-primary-blue/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Back link */}
        <div 
          className={`flex justify-center mb-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium backdrop-blur-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            All Programs
          </Link>
        </div>

        {/* Icon */}
        <div 
          className={`inline-flex items-center justify-center w-20 h-20 ${program.color} rounded-2xl shadow-2xl mb-6 transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          {program.icon}
        </div>

        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 text-white/90 text-sm font-medium mb-6 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Sparkles className="w-4 h-4 text-accent-gold" />
          Our Programs
        </div>

        {/* Title */}
        <h1 
          className={`font-jost text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {program.title}
        </h1>

        {/* Description */}
        <p 
          className={`text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {program.shortDescription}
        </p>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}