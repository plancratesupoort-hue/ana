import React from "react";
import { BUSINESS } from "../data/business";
import { MessageSquare, ArrowDown, ChevronRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Background Image with Dark Cinematic Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/barber/barber_C4Rm_-yicJR_slide1.jpg"
          alt="Abderrahim Ljnaoui precision barber cut in Agadir"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08] scale-[1.02] transform transition-transform duration-1000"
        />
        {/* Measured dark scrim for WCAG compliance & cinematic mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-[#080808]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#080808]/90 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-32 text-center flex flex-col items-center">
        {/* Label & Arabic Wordmark */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C6B79A] uppercase font-medium">
            <span>BARBER</span>
            <span aria-hidden="true" className="text-[#C6B79A]/40">•</span>
            <span>AGADIR</span>
          </div>
          <span className="text-sm sm:text-base font-serif tracking-wider text-[#A6A6A0] font-light font-arabic">
            {BUSINESS.arabicName}
          </span>
        </div>

        {/* Main Cinematic Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.04em] text-[#F5F5F0] leading-[1.08] text-balance mb-6 max-w-4xl">
          PRECISION.<br />
          CHARACTER.<br />
          STYLE.
        </h1>

        {/* Supporting Text */}
        <p className="text-[#A6A6A0] text-base sm:text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto mb-10 leading-relaxed">
          Premium men&apos;s grooming in Agadir.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C6B79A] hover:bg-[#DDD3BD] text-[#080808] px-7 py-3.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200 active:scale-[0.98] shadow-lg shadow-black/40"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>BOOK ON WHATSAPP</span>
          </a>

          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#C6B79A] hover:text-[#F5F5F0] text-[#A6A6A0] px-7 py-3.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200 backdrop-blur-sm group"
          >
            <span>VIEW MY WORK</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#C6B79A] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Quick Micro Badges (Anti-pill unboxed text) */}
        <div className="mt-14 flex items-center gap-3 text-xs text-[#A6A6A0]/80 tracking-widest uppercase font-light">
          <span>Anza, Agadir</span>
          <span aria-hidden="true" className="text-white/20">/</span>
          <span>By Appointment</span>
          <span aria-hidden="true" className="text-white/20">/</span>
          <span>Personal Attention</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#A6A6A0]/60 hover:text-[#C6B79A] transition-colors group cursor-pointer"
        aria-label="Scroll to services"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-light">SCROLL</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
};
