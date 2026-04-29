"use client";

import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ---------------- REVEAL ---------------- */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ---------------- PROGRESS ---------------- */
function AnimatedBar({ value }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(value), 300);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
      <div
        className="h-2 bg-primary-blue transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

/* ---------------- MAIN ---------------- */
export default function DonationCTA() {
  const goalReveal = useReveal();
  const popReveal = useReveal();
  const demoReveal = useReveal();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://ext.same-assets.com/922964245/184032331.jpeg"
          alt="Community impact"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/95 via-dark-navy/85 to-dark-navy/80" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-blue rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-blue rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* ================= STRATEGIC GOAL ================= */}
        <div
          ref={goalReveal.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            goalReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Strategic  Goal
          </h2>

          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            To promote social and economic empowerment of refugees and low-income host communities
            through inclusive participation and sustainable livelihood initiatives.
          </p>
        </div>

        {/* ================= TARGET + DEMOGRAPHICS ================= */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* TARGET POPULATION */}
          <div
            ref={popReveal.ref}
            className={`bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-700 ${
              popReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Target Population
            </h3>

            <p className="text-white/70 mb-4">
              We serve both refugee and host communities using a{" "}
              <span className="font-semibold text-white">70/30 approach</span> to ensure inclusion and sustainability.
            </p>

            {/* 70/30 Bar */}
            <AnimatedBar value={70} />
            <div className="flex justify-between text-sm text-white/70 mt-1 mb-6">
              <span>Refugees 70%</span>
              <span>Hosts 30%</span>
            </div>

            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Women & children and youth adolescent (economic empowerment)</li>
              <li>• Out-of-school youth (skills & livelihoods)</li>
              <li>• Adult learners (literacy, language, digital skills)</li>
              <li>• Vulnerable households (food security & protection)</li>
            </ul>
          </div>

          {/* DEMOGRAPHICS */}
          <div
            ref={demoReveal.ref}
            className={`bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-700 delay-200 ${
              demoReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Refugee Demographics in Uganda
            </h3>

            <div className="space-y-4 text-white/80 text-sm">

              <div>
                <div className="flex justify-between mb-1">
                  <span>South Sudan</span>
                  <span>55%</span>
                </div>
                <AnimatedBar value={55} />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>DR Congo</span>
                  <span>31%</span>
                </div>
                <AnimatedBar value={31} />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Somalia</span>
                  <span>3%</span>
                </div>
                <AnimatedBar value={3} />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Burundi</span>
                  <span>3%</span>
                </div>
                <AnimatedBar value={3} />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Others</span>
                  <span>8%</span>
                </div>
                <AnimatedBar value={8} />
              </div>
            </div>

            <p className="text-white/60 mt-6 text-sm">
              This approach promotes inclusion, cohesion, and aligns with Uganda’s CRRF framework.
            </p>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <div className="w-20 h-20 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-primary-blue animate-pulse" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Your Support <span className="text-primary-blue">Transforms Lives</span>
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto mb-10">
            Help us expand access to education, healthcare, and livelihoods.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-primary-blue hover:bg-primary-blue-dark text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-2"
            >
              Donate Now <Heart className="w-5 h-5" />
            </Link>

            <Link
              href="/get-involved"
              className="border border-white/30 text-white px-10 py-5 rounded-full flex items-center justify-center gap-2"
            >
              Get Involved <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
