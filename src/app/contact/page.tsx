"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-primary-blue py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-jost text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-accent-gold uppercase tracking-wider text-sm">
            We&apos;re Here To Help
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-jost text-primary-blue text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Have questions about our programs, volunteering opportunities, or how to donate? We&apos;d love to hear from you. Reach out to us and we&apos;ll respond as soon as we can.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-blue/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-jost text-gray-900 font-bold mb-1">Address</h3>
                    <p className="text-gray-600">P.O BOX 207352<br />Rubaga Division, Kampala District, Uganda</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-blue/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-jost text-gray-900 font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+256787630826" className="hover:text-primary-blue transition-colors">+256 787 630826</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-blue/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-jost text-gray-900 font-bold mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@mwinjadivinehelpfoundation.org" className="hover:text-primary-blue transition-colors">info@mwinjadivinehelpfoundation.org</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-blue/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-jost text-gray-900 font-bold mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-light-blue">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary-blue mx-auto mb-4" />
            <p className="text-gray-600">Rubaga Division, Kampala, Uganda</p>
            <p className="text-gray-500 text-sm mt-2">Interactive map would be integrated here</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
