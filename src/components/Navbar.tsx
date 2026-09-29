import React, { useState, useEffect } from "react";
import { BUSINESS } from "../data/business";
import { Menu, X, MessageSquare } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Instagram", href: "#instagram" },
    { label: "Location", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            className="flex flex-col group transition-transform duration-200"
            aria-label="Abderrahim Ljnaoui Home"
          >
            <span className="font-serif tracking-[0.2em] text-sm sm:text-base font-semibold text-[#F5F5F0] group-hover:text-[#C6B79A] transition-colors uppercase">
              {BUSINESS.name}
            </span>
            <span className="text-[10px] text-[#A6A6A0] tracking-widest font-sans font-light -mt-0.5">
              BARBER • AGADIR
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-wider uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#A6A6A0] hover:text-[#F5F5F0] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C6B79A] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C6B79A] hover:bg-[#DDD3BD] text-[#080808] px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors duration-200 shadow-sm whitespace-nowrap active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>BOOK ON WHATSAPP</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 text-[#C6B79A] hover:text-white"
              aria-label="Book on WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F5F0] hover:text-[#C6B79A] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0c] border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-[#A6A6A0] hover:text-[#C6B79A] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#C6B79A] hover:bg-[#DDD3BD] text-[#080808] py-3 text-xs font-bold tracking-widest uppercase transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>BOOK ON WHATSAPP</span>
            </a>
          </div>

          <div className="text-center pt-2">
            <span className="text-[11px] text-[#A6A6A0] tracking-wider block">
              {BUSINESS.arabicName}
            </span>
            <span className="text-[10px] text-[#777770] tracking-wider">
              {BUSINESS.displayPhone}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
