"use client";

import { useEffect, useRef, useState } from "react";
import { Users, BookOpen, Building, Globe, Award } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 2500, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const impactStats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: 5000,
    suffix: "+",
    label: "People Reached",
    description: "Direct beneficiaries across our programs",
  },
  {
    icon: <Building className="w-8 h-8" />,
    value: 12,
    suffix: "",
    label: "Projects Completed",
    description: "Successful community initiatives",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    value: 25,
    suffix: "+",
    label: "Communities Supported",
    description: "Across Uganda and beyond",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: 150,
    suffix: "+",
    label: "Volunteers",
    description: "Dedicated team members",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-20 lg:py-28 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-blue rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
            Measuring Impact
          </span>
          <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Impact
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Every statistic represents a life changed, a family supported, and a community strengthened through our collective efforts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-blue group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-lg font-semibold text-white mb-2">{stat.label}</p>
              <p className="text-sm text-white/60">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-blue/20 to-primary-blue/20 rounded-2xl p-8 lg:p-12 border border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-jost text-2xl lg:text-3xl font-bold text-white mb-2">
                Theory of Change
              </h3>
              <p className="text-white/80 max-w-xl">
                Refugees and vulnerable host communities can become self-sufficient if they have access to high-quality education and economic opportunities.
              </p>
            </div>
            <a
              href="/about"
              className="bg-white text-primary-blue hover:bg-light-blue font-semibold px-8 py-4 rounded-full transition-colors whitespace-nowrap"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}