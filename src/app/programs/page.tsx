import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { programs } from "@/lib/programs";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programs | Mwinja Divine Help Foundation",
  description: "Explore our education, economic empowerment, skills development, sporting and artistic, mental health support, culinary arts, fishing program, and advocacy programs that transform lives of refugees and host communities in Uganda.",
};

const impactStats = [
  { value: "5,000+", label: "Direct Beneficiaries" },
  { value: "16", label: "Active Programs" },
  { value: "25+", label: "Communities Reached" },
  { value: "85%", label: "Women & Children" },
];

function ProgramCard({ program }: { program: typeof programs[0] }) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-dark-navy/20 to-transparent" />
        <div className={`absolute top-4 right-4 w-12 h-12 ${program.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
          {program.icon}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-jost text-xl font-bold text-dark-navy mb-2 group-hover:text-primary-blue transition-colors">
          {program.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {program.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-primary-blue text-sm font-medium">
            {program.impact.peopleHelped} helped
          </span>
          <span className="flex items-center gap-1 text-dark-navy text-sm font-medium group-hover:text-primary-blue transition-colors">
            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://ext.same-assets.com/922964245/84962539.jpeg')" }}>
        <div className="absolute inset-0 bg-primary-blue/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-flex items-center gap-2 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Initiatives
          </span>
          <h1 className="font-jost text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Programs
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive programs designed to address the diverse needs of refugees and host communities, creating lasting pathways out of poverty.
          </p>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-12 bg-dark-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-blue">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Intro */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-dark-navy mb-6">
              Creating Lasting Change
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our programs are designed with input from the communities we serve, ensuring they address real needs and create sustainable impact. From education to economic empowerment, from health to advocacy — we work across multiple sectors to create comprehensive solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 lg:py-28 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Program Details - Sample Expanded */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
              How We Work
            </span>
            <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-dark-navy">
              Our Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Assess",
                description: "We conduct thorough needs assessments with community input to understand local challenges."
              },
              {
                step: "02",
                title: "Design",
                description: "Programs are co-designed with beneficiaries to ensure relevance and ownership."
              },
              {
                step: "03",
                title: "Implement",
                description: "Our trained staff deliver quality programs with ongoing monitoring and support."
              },
              {
                step: "04",
                title: "Evaluate",
                description: "We measure impact, gather feedback, and continuously improve our approaches."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <span className="inline-block text-4xl font-bold text-primary-blue/30 mb-4">{item.step}</span>
                <h3 className="font-jost text-xl font-bold text-dark-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-28 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Support Our Programs
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Your contribution helps us reach more communities and expand our programs. Together, we can create lasting change in the lives of those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-accent-gold hover:bg-accent-gold-dark text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-dark-navy font-bold px-8 py-4 rounded-full transition-colors"
            >
              Get Involved
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}