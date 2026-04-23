import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationCard from "@/components/DonationCard";
import Image from "next/image";
import { Heart, Handshake, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate | Mwinja Divine Help Foundation",
  description: "Support our mission by donating to Mwinja Divine Help Foundation. Your contribution directly funds education, healthcare, and livelihood programs for refugees in Uganda.",
};

export default function DonatePage() {
  const donationOptions = [
    {
      icon: <Heart className="w-12 h-12 text-accent-gold" />,
      title: "One-Time Donation",
      description: "Make an immediate impact with a single contribution that helps fund our urgent programs.",
    },
    {
      icon: <Handshake className="w-12 h-12 text-accent-gold" />,
      title: "Monthly Giving",
      description: "Provide sustainable support through recurring donations that help us plan long-term initiatives.",
    },
    {
      icon: <Users className="w-12 h-12 text-accent-gold" />,
      title: "Corporate Partnerships",
      description: "Partner with us to create meaningful change through tailored corporate social responsibility programs.",
    },
    {
      icon: <Globe className="w-12 h-12 text-accent-gold" />,
      title: "Legacy Giving",
      description: "Leave a lasting impact by including Mwinja Divine Help Foundation in your estate planning.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://ext.same-assets.com/922964245/184032331.jpeg')" }}>
        <div className="absolute inset-0 bg-dark-navy/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="font-jost text-4xl md:text-5xl font-bold mb-4 italic">
            Support Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Registered with Uganda NGO Bureau | Refugee-Led Organization
          </p>
          <p className="text-accent-gold italic mt-4 text-sm">
            
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-accent-gold uppercase tracking-wider text-sm font-semibold mb-2">
              Make a Difference
            </p>
            <h2 className="font-jost text-primary-blue text-3xl md:text-4xl font-bold mb-2">
              Your Contribution Matters
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select an amount and complete your secure donation. Every dollar helps us continue our mission.
            </p>
          </div>
          <DonationCard />
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-jost text-primary-blue text-3xl md:text-4xl font-bold mb-4">Ways To Give</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the giving method that works best for you and make a meaningful difference today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationOptions.map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="flex justify-center mb-6">{option.icon}</div>
                <h3 className="font-jost text-primary-blue text-xl font-bold mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 d-flex bg-primary-blue">
        <div className="mx-auto px-4 text-center">
          <h2 className="font-jost text-3xl md:text-4xl font-bold text-white mb-6 italic">
            Ready To Make A Difference?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join us in our mission to empower refugees and host communities. Every donation, no matter the size, creates lasting change.
          </p>
          <a
            href="mailto:info@mwinjadivinehelpfoundation.org"
            className="inline-block bg-accent-gold hover:bg-accent-gold-dark text-white font-semibold uppercase tracking-wider px-10 py-4 rounded-full transition-colors"
          >
            Donate Now
          </a>
        </div>
        {/* About Donation */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left Side (60%) - Donation Content */}
              <div className="lg:col-span-3">
                <h2 className="font-jost text-primary-blue text-3xl md:text-4xl font-bold mb-4">
                  Your Donation Changes Lives
                </h2>

                <div className="bg-light-blue p-6 rounded-lg">
                  <h3 className="font-jost text-primary-blue text-xl font-bold mb-4">Where Your Money Goes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                      Education programs (35%)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                      Health and nutrition (25%)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                      Livelihood support (25%)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                      Administrative costs (15%)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side (40%) - Trust Section */}
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-jost text-primary-blue text-lg font-semibold text-center mb-6">
                    Trusted By
                  </h3>
                  
                  <div className="overflow-hidden relative">
                    <div className="flex animate-slide hover:pause">
                      {/* First set of logos */}
                      <div className="flex flex-col gap-6 min-w-full">
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-20 h-12 bg-gray-300 rounded flex items-center justify-center text-gray-600 text-xs font-medium grayscale hover:grayscale-0 transition-all">
                            <img src=""/>
                          </div>
                          <div className="w-20 h-12 bg-gray-300 rounded flex items-center justify-center text-gray-600 text-xs font-medium grayscale hover:grayscale-0 transition-all">
                            <img src=""/>
                          </div>
                          <div className="w-20 h-12 bg-gray-300 rounded flex items-center justify-center text-gray-600 text-xs font-medium grayscale hover:grayscale-0 transition-all">
                            <img src=""/>
                          </div>
                        </div>
                        
                      </div>
                      
                      {/* Duplicate for infinite scroll */}
                      
                    </div>
                  </div>
                  
                  <p className="text-center text-gray-500 text-sm mt-4">
                    Partner organizations & Network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>

      <Footer />
    </main>
  );
}
