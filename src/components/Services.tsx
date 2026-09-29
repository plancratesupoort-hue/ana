import React from "react";
import { BUSINESS, SERVICES } from "../data/business";
import { MessageSquare, ArrowUpRight } from "lucide-react";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-28 bg-[#080808] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C6B79A] uppercase font-medium mb-3">
              <span>GROOMING MENU</span>
              <span aria-hidden="true" className="text-[#C6B79A]/40">•</span>
              <span className="font-arabic font-normal">خدمات الحلاقة</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-[#F5F5F0]">
              SERVICES & CARE
            </h2>
          </div>
          <p className="text-[#A6A6A0] text-sm sm:text-base font-light max-w-md leading-relaxed">
            Every service is tailored with careful attention to cranial geometry, hair texture, and individual aesthetic.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const serviceWhatsappLink = `https://wa.me/212642859688?text=${encodeURIComponent(
              `سلام، بغيت موعد لـ ${service.arabicName} (${service.name}).`
            )}`;

            return (
              <div
                key={service.id}
                className="group relative bg-[#111111] border border-white/10 p-8 flex flex-col justify-between hover:border-[#C6B79A]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Subtle Index & Arabic Subtitle */}
                  <div className="flex items-center justify-between text-xs text-[#A6A6A0]/70 mb-4 pb-3 border-b border-white/5">
                    <span className="font-mono text-[#C6B79A]/90">0{index + 1}</span>
                    <span className="font-arabic text-[#A6A6A0] text-xs">
                      {service.arabicName}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif text-2xl font-normal text-[#F5F5F0] tracking-wide mb-3 group-hover:text-[#C6B79A] transition-colors">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#A6A6A0] font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Direct Action Button (No fake prices) */}
                <div className="pt-4 border-t border-white/5">
                  <a
                    href={serviceWhatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold tracking-wider uppercase text-[#C6B79A] hover:text-[#DDD3BD] transition-colors py-1 group/btn"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>{service.actionText}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Custom Consultation Card */}
          <div className="bg-[#111111]/60 border border-dashed border-[#C6B79A]/30 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-[#C6B79A] mb-4 pb-3 border-b border-white/5 font-mono">
                <span>VIP & CUSTOM</span>
                <span className="font-arabic">استشارة خاصة</span>
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#F5F5F0] tracking-wide mb-3">
                Style Consultation
              </h3>
              <p className="text-sm text-[#A6A6A0] font-light leading-relaxed mb-8">
                Not sure which fade or beard cut suits you best? Direct WhatsApp discussion to match your style and occasion.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-xs font-semibold tracking-wider uppercase text-[#F5F5F0] hover:text-[#C6B79A] transition-colors py-1 group/btn"
              >
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>ASK FOR AVAILABILITY</span>
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Booking Note */}
        <div className="mt-12 text-center text-xs text-[#A6A6A0]/70 font-light">
          Appointments booked exclusively via WhatsApp • Walk-ins subject to chair availability
        </div>
      </div>
    </section>
  );
};
