"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: <Youtube size={20} />, href: "https://www.youtube.com/@MwinjaDivineHelpFoundation", label: "YouTube" },
    { icon: <Facebook size={20} />, href: "https://facebook.com/mwinjadivinehelpfoundation", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "https://x.com/MwinjaDivine20", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/mwinjadivinehelpfoundation/", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/mwinjadivinehelpfoundation", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Programs", href: "/programs" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="https://ext.same-assets.com/922964245/623862264.png"
                  alt="Mwinja Divine Help Foundation"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="font-jost font-bold text-lg">MDHF</h3>
                  <p className="text-xs text-white/60">Mwinja Divine Help Foundation</p>
                </div>
              </div>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Empowering refugees and host communities through sustainable livelihood programs and inclusive development initiatives.
              </p>
              <p className="text-accent-gold italic text-sm mb-6">
                &ldquo;To protect and love, care and support vulnerable people&rdquo;
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-blue text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-jost font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-accent-gold transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="text-accent-gold">›</span> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-jost font-bold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-white/70">
                  <MapPin size={18} className="text-accent-gold mt-0.5 flex-shrink-0" />
                  <span>P.O. Box 207352<br />Rubaga Division, Kampala District, Uganda</span>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <Phone size={18} className="text-accent-gold flex-shrink-0" />
                  <a href="tel:+256787630826" className="hover:text-accent-gold transition-colors">
                    +256 787 630826
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <Mail size={18} className="text-accent-gold flex-shrink-0" />
                  <a href="mailto:info@mwinjadivinehelpfoundation.org" className="hover:text-accent-gold transition-colors">
                    info@mwinjadivinehelpfoundation.org
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-jost font-bold text-lg mb-6">Newsletter</h4>
              <p className="text-white/70 text-sm mb-4">
                Subscribe to receive updates on our work and impact.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-12 text-white placeholder-white/50 focus:outline-none focus:border-accent-gold transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent-gold hover:bg-accent-gold-dark rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Send size={14} className="text-white" />
                  </button>
                </div>
                {subscribed && (
                  <p className="text-green-400 text-sm">
                    Thank you for subscribing!
                  </p>
                )}
              </form>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-white/50">
                  Registered with Uganda NGO Bureau
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} Mwinja Divine Help Foundation. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
