import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInvolvedForm from "@/components/GetInvolvedForm";
import { Users, Handshake, Heart, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved | Mwinja Divine Help Foundation",
  description: "Join Mwinja Divine Help Foundation as a volunteer, partner, or donor. Discover how you can make a difference in refugee communities in Uganda.",
};

const involvementOptions = [
  {
    id: "volunteer",
    icon: <Users className="w-8 h-8" />,
    title: "Volunteer",
    description: "Share your time and skills to make a direct impact in refugee communities. From teaching to community outreach, your contribution matters.",
    benefits: [
      "Gain hands-on humanitarian experience",
      "Work directly with refugee communities",
      "Develop skills and cultural competency",
      "Be part of a passionate team",
      "Flexible scheduling",
      "Professional development"
    ],
    cta: "Join as Volunteer"
  },
  {
    id: "partner",
    icon: <Handshake className="w-8 h-8" />,
    title: "Partner With Us",
    description: "Collaborate with organizations and institutions that share our vision for sustainable community development and refugee empowerment.",
    benefits: [
      "Corporate social responsibility impact",
      "Employee engagement opportunities",
      "Media and advocacy support",
      "Co-branding opportunities",
      "Access to our network",
      "Tax deduction benefits"
    ],
    cta: "Become a Partner"
  },
  {
    id: "donate",
    icon: <Heart className="w-8 h-8" />,
    title: "Donate",
    description: "Your generous contributions enable us to continue our vital work and reach more families in need of support.",
    benefits: [
      "100% goes to programs",
      "Tax-deductible donation",
      "Regular impact reports",
      "Invitation to donor events",
      "Recognition opportunities",
      "Transparent reporting"
    ],
    cta: "Donate Now"
  },
  {
    id: "fundraise",
    icon: <Sparkles className="w-8 h-8" />,
    title: "Fundraise",
    description: "Organize fundraising events or campaigns in your community, school, or workplace to support our cause.",
    benefits: [
      "Fundraising resources provided",
      "Dedicated support team",
      "Social media toolkit",
      "Recognition for your effort",
      "Community building",
      "Impact tracking"
    ],
    cta: "Start Fundraising"
  }
];

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://ext.same-assets.com/922964245/2075537136.jpeg')" }}>
        <div className="absolute inset-0 bg-primary-blue/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-flex items-center gap-2 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Join Our Mission
          </span>
          <h1 className="font-jost text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get Involved
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Whether you have time, skills, or resources to share, there are many ways to join our mission and create lasting change.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
              Your Contribution
            </span>
            <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-dark-navy">
              Ways to Get Involved
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Find the path that matches your passion and availability. Every effort counts in building brighter futures for refugee communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {involvementOptions.map((option) => (
              <div key={option.id} className="bg-light-blue rounded-2xl p-6 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-4 text-primary-blue">
                  {option.icon}
                </div>
                <h3 className="font-jost text-xl font-bold text-dark-navy mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                <Link
                  href={option.id === "donate" ? "/donate" : "#contact-form"}
                  className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm hover:gap-3 transition-all"
                >
                  {option.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 lg:py-28 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
                Volunteers
              </span>
              <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-dark-navy mb-6">
                Volunteer With Us
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Join our team of dedicated volunteers and make a direct impact in refugee communities. Whether you're a student, professional, or retiree, your skills and time can help transform lives.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We offer flexible opportunities in education, community outreach, administration, and specialized skills. No matter your background, there's a place for you in our work.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Gain hands-on humanitarian experience", "Work directly with refugee communities", "Develop skills and cultural competency", "Be part of a passionate team"].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-blue flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-primary-blue hover:bg-primary-blue-dark text-white font-bold px-8 py-4 rounded-full transition-colors"
              >
                <Users className="w-5 h-5" />
                Apply as Volunteer
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative">
              <Image
                src="https://ext.same-assets.com/922964245/3349648292.jpeg"
                alt="Volunteers at work"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent-gold text-white p-4 rounded-xl shadow-lg hidden md:block">
                <p className="text-2xl font-bold">150+</p>
                <p className="text-sm">Active Volunteers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/922964245/1260189484.jpeg"
                alt="Partnership"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-blue rounded-full -z-10" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-blue/20 rounded-full -z-10" />
            </div>

            <div>
              <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
                Partnerships
              </span>
              <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-dark-navy mb-6">
                Partner With Us
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We seek strategic partnerships with organizations and institutions that share our vision for sustainable community development.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Funding Partners - Project grants and core support",
                  "Technical Partners - Skills transfer and training",
                  "Government - Policy alignment and referrals",
                  "Private Sector - Employment and market access",
                  "Academia - Research and innovation"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Handshake className="w-5 h-5 text-primary-blue flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-dark-navy hover:bg-dark-navy/90 text-white font-bold px-8 py-4 rounded-full transition-colors"
              >
                <Handshake className="w-5 h-5" />
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-20 lg:py-28 bg-primary-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-white/70 font-semibold text-sm uppercase tracking-wider mb-4">
                Support
              </span>
              <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Support Our Work
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Your financial contribution helps us sustain our programs and reach more vulnerable individuals and families. Every donation makes a difference in building lasting change.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "100%", label: "Goes to Programs" },
                  { value: "Tax", label: "Deductible" },
                  { value: "5000+", label: "Beneficiaries" },
                  { value: "Transparent", label: "Reporting" }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                    <p className="text-white/70 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-dark text-white font-bold px-8 py-4 rounded-full transition-colors"
              >
                <Heart className="w-5 h-5" />
                Donate Now
              </Link>
            </div>

            <div className="relative hidden lg:block">
              <Image
                src="https://ext.same-assets.com/922964245/3478060187.jpeg"
                alt="Community benefit"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <GetInvolvedForm />

      <Footer />
    </main>
  );
}