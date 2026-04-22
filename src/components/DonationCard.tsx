"use client";

import { useState } from "react";
import { Lock, Shield, CheckCircle, CreditCard, Heart } from "lucide-react";

const presetAmounts = [5, 10, 25, 50, 100];

export default function DonationCard() {
  const [selectedAmount, setSelectedAmount] = useState<number | "">("");
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value === "" ? "" : Number(e.target.value);
    if (val === "" || (typeof val === "number" && val > 0)) {
      setSelectedAmount(val);
      setCustomAmount(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAmount) return;
    setSubmitted(true);
    // In a real app, you would process payment or send to backend here
  };

  const getDisplayAmount = () => {
    if (selectedAmount === "") return "";
    return `$${selectedAmount}`;
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center max-w-2xl mx-auto animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>
        <h3 className="font-jost text-3xl md:text-4xl font-bold text-primary-blue mb-4">
          Thank You For Your Generosity!
        </h3>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Your {frequency} donation of <strong className="text-primary-blue">{getDisplayAmount()}</strong> will make a meaningful difference in the lives of refugees and vulnerable communities we serve.
        </p>
        <div className="bg-light-blue p-6 rounded-lg text-left mb-6">
          <h4 className="font-jost text-primary-blue font-bold mb-3">What happens next?</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-accent-gold mt-1">•</span>
              You&apos;ll receive a confirmation email shortly.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-gold mt-1">•</span>
              Our team will contact you within 24-48 hours to complete the donation process.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-gold mt-1">•</span>
              100% of your contribution goes directly to our programs.
            </li>
          </ul>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="text-primary-blue hover:text-primary-blue-dark font-semibold underline"
        >
          Make Another Donation
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-blue/10 text-primary-blue mb-4">
          <Heart className="w-8 h-8" />
        </div>
        <h2 className="font-jost text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Make a Donation
        </h2>
        <p className="text-gray-600">
          Choose an amount and help transform lives today
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Amount Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Select Amount (USD)
          </label>
          <div className="grid grid-cols-5 gap-3 mb-3">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => handleAmountClick(preset)}
                className={`py-3 rounded-lg border-2 font-bold transition-all duration-200 ${
                  selectedAmount === preset && customAmount === ""
                    ? "border-primary-blue bg-primary-blue text-white shadow-md"
                    : "border-gray-200 text-gray-700 hover:border-primary-blue hover:bg-blue-50"
                }`}
              >
                ${preset}
              </button>
            ))}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
              <input
                type="number"
                min="1"
                placeholder="Other"
                className={`w-full py-3 pl-8 pr-2 rounded-lg border-2 text-right font-bold transition-all duration-200 ${
                  selectedAmount !== "" && !presetAmounts.includes(selectedAmount)
                    ? "border-primary-blue bg-primary-blue text-white"
                    : "border-gray-200 text-gray-900"
                }`}
                value={customAmount}
                onChange={handleCustomChange}
              />
            </div>
          </div>
        </div>

        {/* Frequency */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Donation Frequency
          </label>
          <div className="flex gap-4">
            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="frequency"
                value="one-time"
                checked={frequency === "one-time"}
                onChange={() => setFrequency("one-time")}
                className="sr-only peer"
              />
              <div className="text-center py-3 rounded-lg border-2 border-gray-200 peer-checked:border-primary-blue peer-checked:bg-primary-blue peer-checked:text-white transition-colors">
                One-time
              </div>
            </label>
            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="frequency"
                value="monthly"
                checked={frequency === "monthly"}
                onChange={() => setFrequency("monthly")}
                className="sr-only peer"
              />
              <div className="text-center py-3 rounded-lg border-2 border-gray-200 peer-checked:border-primary-blue peer-checked:bg-primary-blue peer-checked:text-white transition-colors">
                Monthly
              </div>
            </label>
          </div>
        </div>

        {/* Donor Info */}
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="donor-name" className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="donor-name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="donor-email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="donor-email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="donor-phone" className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="donor-phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              placeholder="+256 787 630826 (optional)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!selectedAmount}
          className="w-full bg-accent-gold hover:bg-accent-gold-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold uppercase tracking-wider px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
        >
          <Lock size={18} />
          Donate {getDisplayAmount()}
        </button>

        {/* Trust Indicators */}
        <p className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center gap-1">
          <Shield className="w-4 h-4 text-green-600" />
          Secure donation powered by industry-standard encryption
        </p>
        <p className="text-center text-gray-400 text-xs mt-2">
          Registered NGO | Tax-exempt | Financial transparency report available
        </p>
      </form>
    </div>
  );
}
