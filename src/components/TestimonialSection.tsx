"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonial = {
  quote: "Mwinja Divine Help Foundation changed my life. Before, I had no hope. Now I have skills, I have work, and I can support my family. They gave me a second chance.",
  author: "Amina K.",
  role: "Program Beneficiary",
  location: "Kampala, Uganda",
  image: "https://ext.same-assets.com/922964245/3893045342.jpeg",
};

export default function TestimonialSection() {
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
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Quote className="w-8 h-8 text-primary-blue" />
          </div>

          <blockquote className="font-jost text-2xl md:text-3xl lg:text-4xl text-dark-navy mb-8 leading-relaxed font-medium italic">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative w-16 h-16">
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                fill
                className="object-cover rounded-full ring-4 ring-primary-blue/20"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold text-dark-navy text-lg">{testimonial.author}</p>
              <p className="text-gray-600">{testimonial.role}</p>
              <p className="text-sm text-primary-blue">{testimonial.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}