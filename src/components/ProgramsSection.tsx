"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { programs } from "@/lib/programs";

function ProgramCard({ program, index }: { program: typeof programs[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ${isHovered ? "-translate-y-2" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 to-transparent" />
        <div className={`absolute top-4 right-4 w-12 h-12 ${program.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
          {program.icon}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-jost text-xl font-bold text-dark-navy mb-3 group-hover:text-primary-blue transition-colors">
          {program.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {program.shortDescription}
        </p>
        <Link
          href={`/programs/${program.slug}`}
          className="inline-flex items-center gap-2 text-primary-blue font-medium text-sm hover:gap-3 transition-all"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 lg:py-28 bg-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-dark-navy mb-4">
            Our Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            works to transform lives by promoting consling growth, empowering vulnerable individuals, and strengthening communities through inclusive development initiatives. Through community outreach, awareness campaigns, and collaborative partnerships, the foundation strives to cultivate harmony, peace, and lasting hope among disadvantaged populations across Uganda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 bg-primary-blue hover:bg-primary-blue-dark text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            View All Programs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}