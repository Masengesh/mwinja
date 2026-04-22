"use client";

import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="bg-light-blue p-8 rounded-lg">
      <h2 className="font-jost text-primary-blue text-2xl font-bold mb-6">Send Us A Message</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              placeholder="Your first name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              placeholder="Your last name"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            placeholder="+256 787 630826"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
          <select
            id="subject"
            name="subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white"
          >
            <option value="">Select a topic</option>
            <option value="donation">Donation Inquiry</option>
            <option value="volunteer">Volunteering</option>
            <option value="partnership">Partnership</option>
            <option value="program">Program Information</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-none"
            placeholder="Tell us how we can help..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-accent-gold hover:bg-accent-gold-dark text-white font-semibold uppercase tracking-wider px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2"
        >
          Send Message
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}
