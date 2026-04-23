"use client";

import { Program } from "@/lib/programs";
import { useEffect, useState } from "react";
import { Calendar, Clock, Users, CheckCircle2, ArrowRight, Sparkles, Heart, Star, BookOpenCheck, GraduationCap, TrendingUp, Briefcase, PiggyBank, HandHeart, LandPlot, Scissors, Wrench, BookOpen, Scale, Tractor, Trees, Droplets, ChefHat, Salad, Dumbbell, Music, Palette, Theater, Brain, Eye, Shirt, Factory } from "lucide-react";
import { Activity } from "@/lib/programs";

interface ProgramActivitiesSidebarProps {
  program: Program;
}

// Icon mapping for dynamic rendering
const iconMap: Record<string, React.ReactNode> = {
  BookOpenCheck: <BookOpenCheck className="w-5 h-5 text-primary-blue" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-primary-blue" />,
  Users: <Users className="w-5 h-5 text-accent-gold" />,
  Sparkles: <Sparkles className="w-5 h-5 text-purple-500" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-green-600" />,
  Briefcase: <Briefcase className="w-5 h-5 text-orange-600" />,
  PiggyBank: <PiggyBank className="w-5 h-5 text-teal-600" />,
  HandHeart: <HandHeart className="w-5 h-5 text-pink-500" />,
  LandPlot: <LandPlot className="w-5 h-5 text-orange-600" />,
  Scissors: <Scissors className="w-5 h-5 text-indigo-600" />,
  Wrench: <Wrench className="w-5 h-5 text-indigo-600" />,
  BookOpen: <BookOpen className="w-5 h-5 text-primary-blue" />,
  Scale: <Scale className="w-5 h-5 text-purple-600" />,
  Tractor: <Tractor className="w-5 h-5 text-emerald-600" />,
  Trees: <Trees className="w-5 h-5 text-emerald-600" />,
  Droplets: <Droplets className="w-5 h-5 text-emerald-600" />,
  ChefHat: <ChefHat className="w-5 h-5 text-amber-600" />,
  Salad: <Salad className="w-5 h-5 text-amber-600" />,
  Dumbbell: <Dumbbell className="w-5 h-5 text-rose-600" />,
  Music: <Music className="w-5 h-5 text-rose-600" />,
  Palette: <Palette className="w-5 h-5 text-rose-600" />,
  Theater: <Theater className="w-5 h-5 text-rose-600" />,
  Brain: <Brain className="w-5 h-5 text-pink-600" />,
  Eye: <Eye className="w-5 h-5 text-pink-600" />,
  Heart: <Heart className="w-5 h-5 text-pink-500" />,
  Shirt: <Shirt className="w-5 h-5 text-indigo-600" />,
  Factory: <Factory className="w-5 h-5 text-indigo-600" />,
};

const UPCOMING = [
  { date: "May 15", title: "New Cohort Start", type: "milestone" },
  { date: "May 20", title: "Skills Workshop", type: "workshop" },
  { date: "May 28", title: "Community Fair", type: "event" },
];

export default function ProgramActivitiesSidebar({ program }: ProgramActivitiesSidebarProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("program-activities");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsLoaded(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      id="program-activities"
      className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
    >
      {/* Sticky sidebar */}
      <div className="lg:sticky lg:top-24">
       
        {/* Program Activities */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-accent-gold" />
            <h4 className="font-jost font-bold text-dark-navy">Program Activities</h4>
          </div>
          <div className="space-y-3">
            {program.activities.map((activity: Activity, index: number) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                style={{ transitionDelay: `${(index + 1) * 80}ms` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(15, 76, 117, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-light-blue flex items-center justify-center">
                  {iconMap[activity.icon] || <Sparkles className="w-5 h-5 text-primary-blue" />}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-dark-navy text-sm">{activity.title}</p>
                  <p className="text-gray-500 text-xs">{activity.description}</p>
                  <span className="text-primary-blue text-xs font-medium">{activity.frequency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
         {/* Activity Overview Card */}
        <div className="bg-gradient-to-br from-primary-blue/5 to-primary-blue/0 border border-primary-blue/20 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-jost text-lg font-bold text-dark-navy">Program Activities</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Explore the hands-on activities and practical experiences that bring this program to life.
          </p>
          <div className="flex items-center gap-2 text-primary-blue text-sm font-medium">
            <Clock className="w-4 h-4" />
            <span>{program.impact.peopleHelped} active participants</span>
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 border border-accent-gold/30 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-accent-gold rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <h4 className="font-jost font-bold text-dark-navy">Get Involved</h4>
          </div>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Join this program as a participant, volunteer, or partner to make a difference.
          </p>
          <a
            href={`/programs/${program.slug}#participate`}
            className="inline-flex items-center justify-center gap-2 w-full bg-primary-blue hover:bg-primary-blue/90 text-white font-bold px-4 py-3 rounded-xl transition-colors text-sm"
          >
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
