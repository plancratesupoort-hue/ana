import React from "react";
import { BUSINESS } from "../data/business";
import { MessageSquare, MapPin } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#111111] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Real Photography of the Barber */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Portrait Frame */}
              <div className="relative border border-white/10 bg-[#080808] p-3 shadow-2xl">
                <img
                  src="/images/barber/barber_profile_hd.jpg"
                  alt="Abderrahim Ljnaoui barber in Agadir"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#080808]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-serif text-sm font-semibold tracking-wider text-[#F5F5F0]">
                      {BUSINESS.name}
                    </div>
                    <div className="text-[11px] text-[#C6B79A] font-arabic font-normal">
                      {BUSINESS.arabicName}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#A6A6A0] uppercase tracking-wider">
                    <MapPin className="w-3 h-3 text-[#C6B79A]" />
                    <span>Anza</span>
                  </div>
                </div>
              </div>

              {/* Secondary Detail Image Overlay */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 aspect-square border-2 border-[#111111] shadow-2xl overflow-hidden bg-[#080808]">
                <img
                  src="/images/barber/barber_DJ0Vp0TCmec_slide2.jpg"
                  alt="Barber craftsmanship and style"
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.9] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* About Text & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C6B79A] uppercase font-medium mb-4">
              <span>MEET THE ARTISAN</span>
              <span aria-hidden="true" className="text-[#C6B79A]/40">•</span>
              <span className="font-arabic font-normal">عن الحلاق</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-[#F5F5F0] mb-8 leading-tight">
              THE BARBER
            </h2>

            {/* Core authentic text required by prompt */}
            <div className="space-y-6 text-[#A6A6A0] text-base sm:text-lg font-light leading-relaxed">
              <p className="text-[#F5F5F0] font-normal border-l-2 border-[#C6B79A] pl-5 italic font-serif">
                &ldquo;Precision cuts, clean fades and personal attention. Every appointment is focused on creating a style that fits you.&rdquo;
              </p>

              <p>
                Based in Anza, Agadir, the philosophy is simple: dedicated time for every client, razor-sharp details, and grooming that elevates confidence. No rushed service, no generic templates—just craftsmanship focused on your hair texture and head shape.
              </p>

              {/* Barber's authentic motto in Arabic */}
              <div className="pt-2">
                <blockquote className="font-arabic text-base sm:text-lg text-[#C6B79A] font-normal leading-loose tracking-wide">
                  &ldquo;القمة لا تتسع للجميع لكنها ترحب بكل من رفض البقاء في القاع.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C6B79A] hover:bg-[#DDD3BD] text-[#080808] px-6 py-3 text-xs font-semibold tracking-widest uppercase transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>BOOK APPOINTMENT</span>
              </a>

              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-widest uppercase text-[#A6A6A0] hover:text-[#F5F5F0] transition-colors py-2"
              >
                VIEW INSTAGRAM {BUSINESS.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
