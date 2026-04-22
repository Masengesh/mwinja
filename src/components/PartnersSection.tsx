"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "UNHCR", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/UNHCR_logo.svg/1200px-UNHCR_logo.svg.png" },
  { name: "UNICEF", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/UNICEF_Logo.svg/1200px-UNICEF_Logo.svg.png" },
  { name: "WHO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/World_Health_Organization_%28 logo%29.svg/1200px-World_Health_Organization_%28_logo%29.svg.png" },
  { name: "Uganda Government", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Uganda.svg/1200px-Flag_of_Uganda.svg.png" },
  { name: "OPM Uganda", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Uganda.svg/1200px-Flag_of_Uganda.svg.png" },
];

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-gray-500 font-semibold text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="font-jost text-2xl md:text-3xl font-bold text-dark-navy mt-2">
           Trusted By Leading Organizations
          </h2>
        </div>

        <div
          ref={ref}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`flex flex-col items-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-24 h-16 md:w-28 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={60}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="text-xs text-gray-400 mt-2 hidden">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}