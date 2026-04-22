import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialSection from "@/components/TestimonialSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import DonationCTA from "@/components/DonationCTA";
import PartnersSection from "@/components/PartnersSection";

export const metadata: Metadata = {
  title: "Mwinja Divine Help Foundation | Empowering Refugees & Communities",
  description: "Mwinja Divine Help Foundation develops sustainable livelihoods to empower refugees and host communities in Uganda through education, health, and economic programs.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <TestimonialSection />
      <GetInvolvedSection />
      <DonationCTA />
      <PartnersSection />
      <Footer />
    </main>
  );
}