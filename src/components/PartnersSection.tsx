"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "HCP", logo: "https://res.cloudinary.com/diisccxqg/image/upload/v1772350573/loogo_kls4ve.jpg" },
  { name: "EL-Hai Ministries", logo: "https://res.cloudinary.com/dtbzixyuy/image/upload/v1776262597/el-ai_fazz6w.jpg" },
  { name: "Tuinuwane", logo: "https://res.cloudinary.com/dtbzixyuy/image/upload/v1776262496/tuinuwane-project-logo_rbswbw.png" },
  { name: "Bomoko", logo: "https://res.cloudinary.com/dtbzixyuy/image/upload/v1776256101/hcp-mail-on_bhiexa.jpg" },
];

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gray-500 font-semibold text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-navy mt-2">
            Trusted By Leading Organizations
          </h2>
        </div>

        {/* Logos */}
        <div
          ref={ref}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card wrapper (important for clean look) */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md p-4 w-28 h-20 md:w-32 md:h-24 flex items-center justify-center transition-all duration-300 hover:scale-105">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={110}
                  height={70}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}