"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Handshake, Heart, ArrowRight, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

export default function GetInvolvedForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-light-blue" id="contact-form">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
            Contact
          </span>
          <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-dark-navy">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-4">
            Ready to make a difference? Fill out the form below and we'll be in touch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10  items-center lg:px-8 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="font-jost text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">We've received your message and will be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-light-blue border-0 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-light-blue border-0 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-light-blue border-0 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-light-blue border-0 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">I'm Interested In *</label>
                <select
                  required
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-light-blue border-0 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                >
                  <option value="">Select an option</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="partner">Partnership</option>
                  <option value="donate">Donating</option>
                  <option value="fundraise">Fundraising</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-light-blue border-0 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-blue resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-blue hover:bg-primary-blue-dark text-white font-bold py-4 rounded-xl transition-colors"
              >
                Send Message
              </button>
            </form>
          )}

          <div className=" grid sm:grid-cols-1 gap-6 text-center bg-gray-200 p-8">
            {[
              { icon: <Mail className="w-6 h-6" />, label: "Email", value: "info@mwinjadivinehelpfoundation.org" },
              { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+256 787 630826" },
              { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Rubaga Division, Kampala" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4">
                <div className="w-10 h-10 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-2 text-primary-blue">
                  {item.icon}
                </div>
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="text-gray-700 font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}