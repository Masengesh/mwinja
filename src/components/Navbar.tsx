"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Menu, X, ChevronDown, Youtube } from "lucide-react";
import { programs } from "@/lib/programs";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Programs",
    href: "/programs",
    dropdown: programs.map((program) => ({
      name: program.title,
      href: `/programs/${program.slug}`,
    })),
  },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Gallery", href: "/gallery" },
  { name: "Donate", href: "/donate" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary-blue text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+256787630826" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
              <Phone size={14} />
              <span>+256 787 630826</span>
            </a>
            <a href="mailto:info@mwinjadivinehelpfoundation.org" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
              <Mail size={14} />
              <span>info@mwinjadivinehelpfoundation.org</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.youtube.com/@MwinjaDivineHelpFoundation" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors" aria-label="YouTube">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md py-4 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/922964245/2252904973.png"
              alt="Mwinja Divine Help Foundation"
              width={80}
              height={80}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className="flex items-center gap-1 text-gray-700 hover:text-primary-blue font-medium transition-colors">
                      {link.name}
                      <ChevronDown size={16} />
                    </button>
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <Link href={link.href} className="block px-4 py-2 text-gray-700 hover:bg-primary-blue hover:text-white transition-colors font-medium border-b border-gray-100">
                        View All Programs
                      </Link>
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-2 pl-6 text-gray-600 hover:bg-primary-blue hover:text-white transition-colors text-sm"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-gray-700 hover:text-primary-blue font-medium transition-colors ${link.href === "/" ? "text-primary-blue" : ""}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 last:border-0">
                {link.dropdown ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-primary-blue font-medium px-4"
                      onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transform transition-transform ${mobileProgramsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileProgramsOpen && (
                      <div className="bg-light-blue py-2 px-4 space-y-1">
                        <Link
                          href={link.href}
                          className="block py-2 text-primary-blue font-medium hover:text-primary-blue-dark"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Programs
                        </Link>
                        {link.dropdown.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className="block py-2 text-gray-600 hover:text-primary-blue text-sm pl-4"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-3 text-gray-700 hover:text-primary-blue font-medium px-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
