"use client";

import { Program } from "@/lib/programs";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Users } from "lucide-react";

interface ProgramCTAProps {
  program: Program;
  relatedPrograms: Program[];
}

export default function ProgramCTA({ program, relatedPrograms }: ProgramCTAProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("program-cta");
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
    <section id="program-cta">
      {/* Main CTA Section */}
      <section className="py-20 lg:py-28 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Support This Program
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Your contribution can help us expand our reach and create more lasting impact. Join us in making a difference in the lives of those who need it most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-accent-gold hover:bg-accent-gold-dark text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Donate Now
                <Heart className="w-5 h-5" />
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-dark-navy font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure Donation
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Tax Deductible
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent-gold" />
                100% to Programs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-20 lg:py-28 bg-light-blue">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="font-jost text-2xl md:text-3xl font-bold text-dark-navy mb-4">
              Explore Other Programs
            </h2>
            <p className="text-gray-600">
              Learn more about our other initiatives and find ways to get involved.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPrograms.map((relatedProgram, index) => (
              <Link
                key={relatedProgram.id}
                href={`/programs/${relatedProgram.slug}`}
                className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={relatedProgram.image}
                    alt={relatedProgram.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 to-transparent" />
                  <div className={`absolute top-3 right-3 w-10 h-10 ${relatedProgram.color} rounded-lg flex items-center justify-center text-white`}>
                    {relatedProgram.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-jost text-lg font-bold text-dark-navy mb-2 group-hover:text-primary-blue transition-colors">
                    {relatedProgram.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {relatedProgram.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary-blue text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div 
            className={`text-center mt-10 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-blue-dark transition-colors"
            >
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}