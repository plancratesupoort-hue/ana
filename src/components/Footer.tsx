import React from "react";
import { BUSINESS } from "../data/business";
import { Instagram, MapPin, MessageSquare, ArrowUp, Phone } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-12 text-[#A6A6A0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#hero"
              className="inline-block font-serif text-lg sm:text-xl font-semibold tracking-[0.2em] text-[#F5F5F0] hover:text-[#C6B79A] transition-colors uppercase"
            >
              {BUSINESS.name}
            </a>
            <div className="font-arabic text-sm text-[#C6B79A]">
              {BUSINESS.arabicName}
            </div>
            <p className="text-xs text-[#A6A6A0] max-w-sm leading-relaxed font-light">
              Agadir • Anza • Morocco
            </p>
            <p className="text-xs text-[#777770] max-w-sm leading-relaxed font-light">
              Craftsmanship, sharp details, and tailored grooming appointments.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#F5F5F0]">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs font-light">
              <div>
                <span className="text-[#666660] block">WhatsApp</span>
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F5F0] hover:text-[#C6B79A] font-mono transition-colors"
                >
                  {BUSINESS.displayPhone}
                </a>
              </div>
              <div>
                <span className="text-[#666660] block">Location</span>
                <span className="text-[#F5F5F0]">Anza, Agadir, Morocco</span>
              </div>
            </div>
          </div>

          {/* Verified External Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#F5F5F0]">
              Online Profiles
            </div>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#C6B79A] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C6B79A]" />
                  <span>Instagram ({BUSINESS.instagramHandle})</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#C6B79A] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C6B79A]" />
                  <span>Google Maps Location</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#C6B79A] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C6B79A]" />
                  <span>WhatsApp Booking</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#777770]">
          <div>
            © 2026 {BUSINESS.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#A6A6A0] transition-colors">
              Agadir, Morocco
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#F5F5F0] transition-colors uppercase tracking-wider text-[11px]"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
