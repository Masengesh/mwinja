"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Heart, Users, Globe, ArrowRight } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) {
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
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://ext.same-assets.com/922964245/3478060187.jpeg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/80 via-dark-navy/60 to-dark-navy/90" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
            Registered Refugee-Led Organization | Uganda
          </span>
          
          <h1 className="font-jost text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Empowering Communities,<br />
            <span className="text-primary-blue">Transforming Lives</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90 leading-relaxed">
            We develop sustainable livelihoods to empower refugees and host communities in Uganda through education, health, and economic programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-primary-blue hover:bg-primary-blue-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-blue/25"
            >
              Donate Now
              <Heart className="w-5 h-5" />
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Get Involved
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary-blue" />
                <span className="text-2xl md:text-3xl font-bold text-white">
                  <Counter end={5000} duration={2500} suffix="+" />
                </span>
              </div>
              <p className="text-xs md:text-sm text-white/70">Beneficiaries</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-primary-blue" />
                <span className="text-2xl md:text-3xl font-bold text-white">
                  <Counter end={12} duration={2000} />
                </span>
              </div>
              <p className="text-xs md:text-sm text-white/70">Projects</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-primary-blue" />
                <span className="text-2xl md:text-3xl font-bold text-white">
                  <Counter end={150} duration={2000} suffix="+" />
                </span>
              </div>
              <p className="text-xs md:text-sm text-white/70">Volunteers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
