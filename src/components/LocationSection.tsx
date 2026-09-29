import React from "react";
import { BUSINESS } from "../data/business";
import { MapPin, Navigation, Phone, MessageSquare, ExternalLink, Clock } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-28 bg-[#080808] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C6B79A] uppercase font-medium mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>SHOP ADDRESS</span>
              <span aria-hidden="true" className="text-[#C6B79A]/40">•</span>
              <span className="font-arabic font-normal">الموقع</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-[#F5F5F0]">
              FIND THE SHOP
            </h2>
          </div>
          <p className="text-[#A6A6A0] text-sm sm:text-base font-light max-w-md leading-relaxed">
            Conveniently situated in Anza, Agadir. Easy street access and parking available nearby.
          </p>
        </div>

        {/* Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Information Panel */}
          <div className="lg:col-span-6 bg-[#111111] border border-white/10 p-8 sm:p-12 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#C6B79A] font-mono mb-2">
                AGADIR • ANZA • MOROCCO
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F5F0] font-normal mb-2">
                {BUSINESS.name}
              </h3>
              <p className="text-sm font-arabic text-[#A6A6A0] mb-8">
                {BUSINESS.arabicName}
              </p>

              <div className="space-y-6 pt-4 border-t border-white/5">
                {/* Address Item */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#080808] border border-white/10 text-[#C6B79A]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#A6A6A0] block">
                      Location
                    </span>
                    <span className="text-base text-[#F5F5F0] font-medium">
                      {BUSINESS.location}
                    </span>
                    <span className="text-xs text-[#A6A6A0] block mt-0.5">
                      Anza, Agadir, Souss-Massa, Morocco
                    </span>
                  </div>
                </div>

                {/* Direct Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#080808] border border-white/10 text-[#C6B79A]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#A6A6A0] block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="text-base text-[#F5F5F0] font-mono hover:text-[#C6B79A] transition-colors"
                    >
                      {BUSINESS.displayPhone}
                    </a>
                  </div>
                </div>

                {/* Appointment Note */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#080808] border border-white/10 text-[#C6B79A]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#A6A6A0] block">
                      Appointments
                    </span>
                    <span className="text-base text-[#F5F5F0] font-medium">
                      WhatsApp Booking Recommended
                    </span>
                    <span className="text-xs text-[#A6A6A0] block mt-0.5">
                      Contact ahead to reserve your preferred chair time
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location CTAs */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <a
                href={BUSINESS.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C6B79A] hover:bg-[#DDD3BD] text-[#080808] py-3.5 px-6 text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>OPEN IN GOOGLE MAPS</span>
              </a>

              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#C6B79A] text-[#F5F5F0] py-3.5 px-6 text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current text-[#C6B79A]" />
                <span>BOOK APPOINTMENT</span>
              </a>
            </div>
          </div>

          {/* Luxury Stylized Map Visualizer Card */}
          <div className="lg:col-span-6 bg-[#111111] border border-white/10 p-8 sm:p-12 relative flex flex-col justify-between overflow-hidden group">
            {/* Background subtle geometric map grid illustration */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, #C6B79A 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />

            {/* Glowing Map Pin Display */}
            <div className="relative z-10 my-auto text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#080808] border border-[#C6B79A]/40 mb-6 shadow-2xl relative">
                <div className="absolute inset-0 rounded-full bg-[#C6B79A]/10 animate-ping" />
                <MapPin className="w-8 h-8 text-[#C6B79A]" />
              </div>

              <h4 className="font-serif text-2xl text-[#F5F5F0] font-normal mb-2">
                Agadir • Anza
              </h4>
              <p className="text-xs uppercase tracking-widest text-[#A6A6A0] font-mono mb-6">
                30.4500° N • 9.6400° W
              </p>

              <div className="inline-block max-w-sm mx-auto text-xs text-[#A6A6A0] leading-relaxed bg-[#080808]/80 p-4 border border-white/5 backdrop-blur-sm">
                Click below to launch Google Maps with turn-by-turn navigation directly to the shop.
              </div>
            </div>

            {/* Secondary Link */}
            <div className="relative z-10 pt-4 border-t border-white/5 text-center">
              <a
                href={BUSINESS.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C6B79A] hover:text-[#DDD3BD] transition-colors"
              >
                <span>View Coordinates on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
