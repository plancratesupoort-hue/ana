import React, { useState, useEffect } from "react";
import { BUSINESS } from "../data/business";
import { MessageSquare, X } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group animate-in slide-in-from-bottom-5 fade-in duration-300"
    >
      <a
        href={BUSINESS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#C6B79A] hover:bg-[#DDD3BD] text-[#080808] px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group"
        aria-label="Chat with Abderrahim on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/40 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#080808]" />
        </span>
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="text-xs font-bold tracking-wider uppercase pr-1">
          Book on WhatsApp
        </span>
      </a>

      <button
        onClick={() => setDismissed(true)}
        className="p-1.5 text-[#A6A6A0] hover:text-[#F5F5F0] bg-[#111111]/80 hover:bg-[#111111] rounded-full border border-white/10 transition-colors"
        aria-label="Dismiss quick contact button"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
