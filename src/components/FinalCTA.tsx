import React from "react";
import { BUSINESS } from "../data/business";
import { MessageSquare, Instagram, ArrowUpRight } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 bg-[#080808] border-t border-white/10 relative overflow-hidden text-center">
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6B79A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C6B79A] uppercase font-medium mb-6">
          <span>RESERVE YOUR CHAIR</span>
          <span aria-hidden="true" className="text-[#C6B79A]/40">•</span>
          <span className="font-arabic font-normal">احجز موعدك</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#F5F5F0] tracking-[0.03em] leading-tight mb-8">
          READY FOR YOUR NEXT CUT?
        </h2>

        <div className="font-serif text-lg sm:text-2xl text-[#A6A6A0] font-light italic space-y-1 mb-12">
          <p>Clean cut.</p>
          <p>Sharp details.</p>
          <p className="text-[#C6B79A]">Your style.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C6B79A] hover:bg-[#DDD3BD] text-[#080808] px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-200 shadow-xl active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>BOOK ON WHATSAPP</span>
          </a>

          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#C6B79A] text-[#F5F5F0] hover:text-[#C6B79A] px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-200 bg-[#111111]/80 backdrop-blur-sm"
          >
            <Instagram className="w-4 h-4" />
            <span>FOLLOW ON INSTAGRAM</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Telephone Fallback */}
        <div className="mt-12 text-xs text-[#A6A6A0]/60 tracking-wider">
          Direct line:{" "}
          <a
            href={`tel:${BUSINESS.phone}`}
            className="text-[#A6A6A0] hover:text-[#F5F5F0] font-mono transition-colors"
          >
            {BUSINESS.displayPhone}
          </a>
        </div>
      </div>
    </section>
  );
};
