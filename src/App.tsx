import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { InstagramSection } from "./components/InstagramSection";
import { LocationSection } from "./components/LocationSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F0] flex flex-col font-sans selection:bg-[#C6B79A]/20 selection:text-[#F5F5F0]">
      {/* Premium Sticky Navigation */}
      <Navbar />

      {/* Main Landing Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services Section */}
        <Services />

        {/* 3. About the Barber */}
        <About />

        {/* 4. Selected Work / Editorial Gallery */}
        <Gallery />

        {/* 5. Real Instagram Archive */}
        <InstagramSection />

        {/* 6. Physical Shop Location */}
        <LocationSection />

        {/* 7. Conversion CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Access Floating Action */}
      <FloatingWhatsApp />
    </div>
  );
}
