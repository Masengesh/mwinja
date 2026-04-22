import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Mwinja Divine Help Foundation",
  description: "View photos of our programs, volunteers, and the communities we serve at Mwinja Divine Help Foundation in Uganda.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-primary-blue py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-jost text-4xl md:text-5xl font-bold text-white mb-4">
            Our Gallery
          </h1>
          <p className="text-accent-gold uppercase tracking-wider text-sm">
            Glimpses Of Our Work & Impact
          </p>
        </div>
      </section>

      <GalleryGrid />

      <Footer />
    </main>
  );
}
