"use client";

import Link from "next/link";
import { Heart, Handshake, Users, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const involvementOptions = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Volunteer",
    description: "Share your skills and time to make a direct impact. From teaching to community outreach, your contribution matters.",
    buttonText: "Become a Volunteer",
    buttonLink: "/get-involved",
    color: "primary-blue",
    bgGradient: "from-primary-blue/5 to-primary-blue/10",
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Partner With Us",
    description: "Join forces with organizations and institutions that share our vision for sustainable community development.",
    buttonText: "Explore Partnerships",
    buttonLink: "/get-involved",
    color: "dark-navy",
    bgGradient: "from-dark-navy/5 to-dark-navy/10",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Donate",
    description: "Your generous contributions enable us to continue our vital work and reach more families in need.",
    buttonText: "Make a Donation",
    buttonLink: "/donate",
    color: "green-600",
    bgGradient: "from-green-50 to-green-100",
  },
];

export default function GetInvolvedSection() {
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
    <section className="py-20 lg:py-28 bg-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
            Join Our Mission
          </span>
          <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-dark-navy mb-4">
            Get Involved
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you have time, resources, or expertise to share, there are many ways to join our mission and create lasting change.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {involvementOptions.map((option, index) => (
            <div
              key={option.title}
              className={`bg-gradient-to-br ${option.bgGradient} rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-${option.color}/10 rounded-2xl flex items-center justify-center mb-6 text-${option.color} group-hover:scale-110 transition-transform`}>
                {option.icon}
              </div>
              <h3 className="font-jost text-2xl font-bold text-dark-navy mb-4">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {option.description}
              </p>
              <Link
                href={option.buttonLink}
                className={`inline-flex items-center gap-2 bg-${option.color} hover:bg-${option.color}-dark text-white font-semibold px-6 py-3 rounded-full transition-colors`}
              >
                {option.buttonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}