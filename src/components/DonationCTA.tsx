"use client";

import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function DonationCTA() {
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
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://ext.same-assets.com/922964245/184032331.jpeg"
          alt="Community impact"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/95 via-dark-navy/85 to-dark-navy/75" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-blue rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-blue rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="w-20 h-20 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-10 h-10 text-primary-blue animate-pulse" />
          </div>

          <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Your Support <span className="text-primary-blue">Transforms Lives</span>
          </h2>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Every contribution helps us provide education, healthcare, and economic opportunities to those who need it most. Together, we can build a future where no one is left behind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-primary-blue hover:bg-primary-blue-dark text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-primary-blue/30"
            >
              Donate Now
              <Heart className="w-5 h-5" />
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-10 py-5 rounded-full transition-all duration-300"
            >
              Other Ways to Help
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Secure Donation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Tax Deductible</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>100% to Programs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}