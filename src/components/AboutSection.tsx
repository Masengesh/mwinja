"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useInViewAnimation(duration: number = 600) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return { ref, isVisible, delay: duration };
}

export default function AboutSection() {
  const imageSection = useInViewAnimation(0);
  const textSection = useInViewAnimation(200);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            ref={imageSection.ref}
            className={`relative transition-all duration-700 ${imageSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/922964245/3478060187.jpeg"
                alt="Mwinja Divine Help Foundation team in action"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-blue text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">Since 2023</p>
                <p className="text-sm opacity-90">Serving Communities</p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-blue/10 rounded-full -z-10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-blue/5 rounded-full -z-10" />
          </div>

          <div
            ref={textSection.ref}
            className={`transition-all duration-700 ${textSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              About Us
            </span>
            
            <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-dark-navy mb-6 leading-tight">
              Mwinja Divine Help Foundation
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              A <strong className="text-dark-navy">Refugee-Led Organization</strong> founded in 2023 in Kampala, Uganda, dedicated to addressing the social, economic, and protection challenges faced by refugees and host communities.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We are committed to improving living conditions by promoting access to education, health, art, culture, and local development. Our organization is guided by the principles of charity, compassion, and solidarity.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-light-blue rounded-xl">
                <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-primary-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-navy">Our Vision</h4>
                  <p className="text-sm text-gray-600">Socially and economically empowered communities</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-light-blue rounded-xl">
                <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-navy">Our Mission</h4>
                  <p className="text-sm text-gray-600">Sustainable livelihoods for all</p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-blue-dark font-semibold transition-colors group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
