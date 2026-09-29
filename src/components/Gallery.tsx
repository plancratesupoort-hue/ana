import React, { useState } from "react";
import { GALLERY_IMAGES, GalleryPhoto, BUSINESS } from "../data/business";
import { Lightbox } from "./Lightbox";
import { Eye, MessageSquare, Sparkles } from "lucide-react";

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "fades" | "haircuts" | "beard">("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredImages = selectedCategory === "all"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="work" className="py-28 bg-[#080808] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C6B79A] uppercase font-medium mb-3">
              <span>SELECTED ARCHIVE</span>
              <span aria-hidden="true" className="text-[#C6B79A]/40">•</span>
              <span className="font-arabic font-normal">معرض الأعمال</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-[#F5F5F0]">
              WORK & CRAFT
            </h2>
          </div>

          {/* Interactive Category Filter Tabs (Zero-pill compliant segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#111111] border border-white/10">
            {(
              [
                { id: "all", label: "All Cuts" },
                { id: "fades", label: "Fades" },
                { id: "haircuts", label: "Haircuts" },
                { id: "beard", label: "Beard Care" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                  selectedCategory === tab.id
                    ? "bg-[#C6B79A] text-[#080808] font-semibold"
                    : "text-[#A6A6A0] hover:text-[#F5F5F0] hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => {
            const isLarge = index === 0 || index === 7;

            return (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden bg-[#111111] border border-white/10 cursor-pointer ${
                  isLarge ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
                />

                {/* Subtle Hover Gradient & Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] tracking-widest uppercase text-[#C6B79A] font-mono">
                      {image.category}
                    </span>
                    <p className="text-xs sm:text-sm text-[#F5F5F0] font-light mt-1 line-clamp-2">
                      {image.caption}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-[#A6A6A0] pt-2 border-t border-white/10">
                      <span className="flex items-center gap-1.5 text-[#C6B79A]">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Photo</span>
                      </span>
                      <span>Anza, Agadir</span>
                    </div>
                  </div>
                </div>

                {/* Subtle corner index marker */}
                <div className="absolute top-3 right-3 text-[10px] font-mono text-white/40 bg-black/60 px-1.5 py-0.5 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery CTA */}
        <div className="mt-14 p-8 bg-[#111111] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#F5F5F0] font-normal mb-1">
              Like what you see?
            </h3>
            <p className="text-sm text-[#A6A6A0] font-light">
              Send a screenshot or mention your preferred style directly on WhatsApp.
            </p>
          </div>

          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C6B79A] hover:bg-[#DDD3BD] text-[#080808] px-6 py-3 text-xs font-semibold tracking-wider uppercase transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>BOOK ON WHATSAPP</span>
          </a>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        images={filteredImages}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
