import React, { useEffect, useCallback } from "react";
import { GalleryPhoto, BUSINESS } from "../data/business";
import { X, ChevronLeft, ChevronRight, MessageSquare, Instagram } from "lucide-react";

interface LightboxProps {
  images: GalleryPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808]/95 backdrop-blur-xl animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 border-b border-white/5 bg-gradient-to-b from-[#080808] to-transparent">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#C6B79A] tracking-widest">
            {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
          <span className="hidden sm:inline-block text-white/20">|</span>
          <span className="hidden sm:inline-block text-xs uppercase tracking-wider text-[#A6A6A0]">
            {currentImage.category}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#C6B79A] hover:bg-[#DDD3BD] text-[#080808] px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>BOOK THIS CUT</span>
          </a>

          <button
            onClick={onClose}
            className="p-2 text-[#A6A6A0] hover:text-[#F5F5F0] hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 text-[#A6A6A0] hover:text-[#F5F5F0] bg-black/40 hover:bg-black/80 border border-white/10 rounded-full backdrop-blur-sm transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 text-[#A6A6A0] hover:text-[#F5F5F0] bg-black/40 hover:bg-black/80 border border-white/10 rounded-full backdrop-blur-sm transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Frame */}
      <div
        className="relative max-w-5xl max-h-[82vh] p-4 flex flex-col items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-h-[72vh] max-w-full object-contain shadow-2xl border border-white/10 transition-transform duration-300"
        />

        {/* Caption & Metadata */}
        <div className="mt-4 text-center max-w-xl">
          <p className="text-sm text-[#F5F5F0] font-light tracking-wide">
            {currentImage.caption}
          </p>
          <div className="mt-2 flex items-center justify-center gap-3 text-xs text-[#A6A6A0]">
            <span>{BUSINESS.name}</span>
            <span aria-hidden="true" className="text-white/20">•</span>
            <span>Agadir, Anza</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar for Mobile conversion */}
      <div className="sm:hidden absolute bottom-4 left-4 right-4 z-20">
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#C6B79A] text-[#080808] py-3 text-xs font-bold tracking-widest uppercase shadow-xl"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>BOOK ON WHATSAPP</span>
        </a>
      </div>
    </div>
  );
};
