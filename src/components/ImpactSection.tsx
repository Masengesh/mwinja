"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Building, Globe, Award, Map } from "lucide-react";

/* ---------------- COUNTER ---------------- */
function AnimatedCounter({ end, duration = 2500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------------- PROGRESS BAR ---------------- */
function AnimatedProgress({ value }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(value), 300);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
      <div
        className="h-3 rounded-full bg-gradient-to-r from-white to-primary-blue transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

/* ---------------- DATA ---------------- */
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

/* ---------------- MAIN ---------------- */
export default function ImpactSection() {
  return (
    <section className="py-20 lg:py-28 bg-dark-navy relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-blue rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <span className="text-primary-blue font-semibold text-sm uppercase tracking-wider">
            Measuring Impact
          </span>
          <h2 className="font-jost text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            Our Impact
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Every statistic represents a life changed, a family supported, and a stronger community.
          </p>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition group"
            >
              <div className="w-16 h-16 bg-primary-blue/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-primary-blue group-hover:scale-110 transition">
                {stat.icon}
              </div>

              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>

              <p className="font-semibold text-white">{stat.label}</p>
              <p className="text-sm text-white/60">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* ================= UGANDA CONTEXT ================= */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4 text-primary-blue">
              <Map />
              <h3 className="text-2xl font-bold text-white">The Uganda Context</h3>
            </div>

            <p className="text-white/80 mb-4 leading-relaxed">
              Uganda hosts approximately <span className="text-white font-semibold">1.96 million refugees and asylum seekers</span> as of October 2025—the largest refugee population in Africa.
            </p>

            <p className="text-white/80 mb-4 leading-relaxed">
              With <span className="text-white font-semibold">55%</span> from South Sudan and <span className="text-white font-semibold">31%</span> from the Democratic Republic of Congo, the country demonstrates remarkable hospitality through progressive refugee policies.
            </p>

            <p className="text-white/70 leading-relaxed">
              However, urban refugees in Kampala face overcrowding, limited livelihood opportunities, language barriers, and restricted healthcare access despite expectations for self-reliance.
            </p>
          </div>

          {/* RIGHT SNAPSHOT */}
          <div className="bg-gradient-to-br from-primary-blue/20 to-transparent border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Organization Snapshot
              </h3>

              <div className="text-white/80 space-y-2">
                <p><span className="font-semibold text-white">Founded:</span> 2023</p>
                <p><span className="font-semibold text-white">Registered:</span> 2025 (NGO Bureau)</p>
                <p><span className="font-semibold text-white">Type:</span> Refugee-Led Organization</p>
                <p><span className="font-semibold text-white">Location:</span> Rubaga Division, Kampala</p>

                {/* Progress */}
                <div className="mt-4">
                  <p className="mb-2 font-semibold text-white">Target Population</p>

                  <AnimatedProgress value={70} />

                  <div className="flex justify-between text-sm mt-1">
                    <span>70% Refugees</span>
                    <span>30% Hosts</span>
                  </div>
                </div>

                <p className="mt-4">
                  <span className="font-semibold text-white">Focus Areas:</span>{" "}
                  Education, Health, Livelihoods, Advocacy and Capacity Building
                </p>
              </div>
            </div>

            <a
              href="/get-involved"
              className="mt-6 inline-block text-center bg-white text-primary-blue hover:bg-light-blue font-semibold px-6 py-3 rounded-full transition"
            >
              Get Involved
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}