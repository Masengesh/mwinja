"use client";

import { Program } from "@/lib/programs";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Images, ChevronLeft, ChevronRight, Expand } from "lucide-react";

interface ProgramImagesProps {
  program: Program;
}

export default function ProgramImages({ program }: ProgramImagesProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("program-gallery");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsLoaded(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateLightbox = (direction: number) => {
    if (selectedImage !== null) {
      const newIndex = selectedImage + direction;
      if (newIndex >= 0 && newIndex < program.gallery.length) {
        setSelectedImage(newIndex);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="program-gallery" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-blue/10 rounded-2xl mb-6">
            <Images className="w-7 h-7 text-primary-blue" />
          </div>
          <h2 className="font-jost text-3xl md:text-4xl font-bold text-dark-navy mb-4">
            Images
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A glimpse into the real work happening on the ground and the lives being transformed.
          </p>
          <div className="mt-6 w-20 h-1 bg-accent-gold mx-auto rounded-full" />
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {program.gallery.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer group transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={image}
                alt={`${program.title} gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark-navy/0 group-hover:bg-dark-navy/40 transition-all duration-300 flex items-center justify-center">
                <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-dark-navy/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          {selectedImage > 0 && (
            <button
              className="absolute left-4 text-white/80 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}
          {selectedImage < program.gallery.length - 1 && (
            <button
              className="absolute right-4 text-white/80 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          )}

          {/* Image */}
          <div 
            className="relative w-full max-w-4xl aspect-[4/3] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={program.gallery[selectedImage]}
              alt={`${program.title} gallery image ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80">
            {selectedImage + 1} / {program.gallery.length}
          </div>
        </div>
      )}
    </section>
  );
}