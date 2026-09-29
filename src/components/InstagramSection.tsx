import React from "react";
import { BUSINESS, INSTAGRAM_POSTS } from "../data/business";
import { Instagram, ExternalLink, Heart } from "lucide-react";

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-28 bg-[#111111] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C6B79A] uppercase font-medium mb-3">
              <Instagram className="w-3.5 h-3.5" />
              <span>INSTAGRAM FEED</span>
              <span aria-hidden="true" className="text-[#C6B79A]/40">•</span>
              <span className="font-arabic font-normal">إنستغرام</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-[#F5F5F0]">
              FOLLOW THE WORK
            </h2>
          </div>
          <p className="text-[#A6A6A0] text-sm sm:text-base font-light max-w-md leading-relaxed">
            See more cuts, styles and recent work on Instagram.
          </p>
        </div>

        {/* Curated Grid of Real Instagram Posts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-[#080808] border border-white/10 overflow-hidden block"
              aria-label={`View Instagram post: ${post.caption}`}
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 filter brightness-[0.92] group-hover:brightness-100"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-[#080808]/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 text-center">
                <Instagram className="w-6 h-6 text-[#C6B79A] mb-2" />
                <div className="flex items-center gap-1.5 text-xs text-[#F5F5F0] font-medium mb-1">
                  <Heart className="w-3.5 h-3.5 fill-[#C6B79A] text-[#C6B79A]" />
                  <span>{post.likes}</span>
                </div>
                <span className="text-[10px] text-[#A6A6A0] tracking-wider uppercase flex items-center gap-1 mt-1">
                  <span>View Post</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Big Follow Button */}
        <div className="mt-14 text-center">
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white/20 hover:border-[#C6B79A] bg-[#080808] hover:bg-[#161616] text-[#F5F5F0] px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-200 group shadow-lg"
          >
            <Instagram className="w-4 h-4 text-[#C6B79A] group-hover:scale-110 transition-transform" />
            <span>FOLLOW {BUSINESS.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#A6A6A0] group-hover:text-[#F5F5F0] transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};
