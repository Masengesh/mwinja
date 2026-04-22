"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { src: "https://ext.same-assets.com/922964245/3478060187.jpeg", alt: "Our team at work", title: "Community Outreach" },
  { src: "https://ext.same-assets.com/922964245/2075537136.jpeg", alt: "Making a difference", title: "Education Support" },
  { src: "https://ext.same-assets.com/922964245/3893045342.jpeg", alt: "Our team meeting", title: "Team Collaboration" },
  { src: "https://ext.same-assets.com/922964245/1260189484.jpeg", alt: "Partnership meeting", title: "Partnership" },
  { src: "https://ext.same-assets.com/922964245/3349648292.jpeg", alt: "Volunteer activity", title: "Volunteer Program" },
  { src: "https://ext.same-assets.com/922964245/84962539.jpeg", alt: "Education program", title: "School Support" },
  { src: "https://ext.same-assets.com/922964245/2606823118.jpeg", alt: "Economic empowerment", title: "Business Training" },
  { src: "https://ext.same-assets.com/922964245/496075394.jpeg", alt: "Urban refugee support", title: "Refugee Assistance" },
  { src: "https://ext.same-assets.com/922964245/3347159728.jpeg", alt: "Skills development", title: "Vocational Training" },
  { src: "https://ext.same-assets.com/922964245/4234630857.jpeg", alt: "Financial literacy", title: "Financial Education" },
  { src: "https://ext.same-assets.com/922964245/294679151.jpeg", alt: "Advocacy event", title: "Rights Advocacy" },
  { src: "https://ext.same-assets.com/922964245/4290276478.jpeg", alt: "Agriculture program", title: "Farming Initiative" },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <>
      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white font-jost text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-accent-gold text-4xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative h-[80vh] max-h-[600px]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white text-center mt-4 font-jost text-lg">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
