"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCheck, MessageSquare, Star, Sparkles, MapPin, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "I finally sleep peacefully in London knowing someone is instantly there for my parents in Islamabad whenever they need doctor visits or emergency help.",
      author: "Dr. Hamza Chaudhry",
      location: "London, UK",
      parentLocation: "Parents in F-7, Islamabad",
      time: "10:42 AM",
      verified: true,
    },
    {
      id: 2,
      quote: "When my father was hospitalized in Lahore last month, MadedGar's concierge was at the ER before the ambulance arrived. They kept me updated on WhatsApp live.",
      author: "Ayesha Malik",
      location: "Dubai, UAE",
      parentLocation: "Parents in Gulberg, Lahore",
      time: "03:15 PM",
      verified: true,
    },
    {
      id: 3,
      quote: "Managing home repairs, utility bills, and organic grocery deliveries from Toronto used to take endless phone calls. MadedGar streamlined everything into one monthly statement.",
      author: "Tariq Siddiqui",
      location: "Toronto, Canada",
      parentLocation: "Parents in PECHS, Karachi",
      time: "08:20 PM",
      verified: true,
    },
    {
      id: 4,
      quote: "The weekly wellness reports with audio notes and photos give our entire extended family total clarity. Hands down the best service for overseas Pakistanis.",
      author: "Farhan & Usman Mirza",
      location: "Dallas, USA",
      parentLocation: "Parents in DHA, Lahore",
      time: "11:05 AM",
      verified: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#071F17] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#D4AF37]/30">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Real Family WhatsApp Stories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight text-white">
            Loved By Overseas Families Worldwide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 font-body font-light">
            Read real feedback from sons and daughters living in London, Dubai, Toronto, and Dallas.
          </p>
        </div>

        {/* WhatsApp Card Interface */}
        <div className="max-w-3xl mx-auto">
          {/* Card Selector Tabs */}
          <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeIndex === idx
                    ? "bg-[#D4AF37] text-[#071F17] shadow-lg font-bold"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {t.location}
              </button>
            ))}
          </div>

          {/* WhatsApp Message Box Container */}
          <div className="relative bg-[#0B281E] rounded-3xl border border-[#D4AF37]/30 p-6 sm:p-10 shadow-2xl gold-glow transition-all duration-500">
            {/* Header chat bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0F3D2E] border border-[#D4AF37] flex items-center justify-center font-heading font-bold text-[#D4AF37] text-lg">
                  {testimonials[activeIndex].author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base sm:text-lg flex items-center gap-2">
                    <span>{testimonials[activeIndex].author}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-normal">
                      Verified Client
                    </span>
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-white/60 font-body mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{testimonials[activeIndex].location}</span>
                    <span>•</span>
                    <span className="text-[#D4AF37]">{testimonials[activeIndex].parentLocation}</span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
            </div>

            {/* WhatsApp Styled Message Bubble */}
            <div className="bg-[#0F3D2E]/80 border border-emerald-500/20 rounded-2xl rounded-tl-none p-6 relative">
              <p className="text-base sm:text-xl font-body text-white/90 italic leading-relaxed">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Fake Audio Note Waveform Preview */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#071F17] flex items-center justify-center">
                  <Play className="w-4 h-4 fill-[#071F17] ml-0.5" />
                </div>
                <div className="flex-grow h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#D4AF37] w-3/4 animate-pulse" />
                </div>
                <span className="text-[10px] text-white/60 font-mono">0:45</span>
              </div>

              {/* Message Footer Info */}
              <div className="flex items-center justify-end gap-1.5 text-xs text-white/50 mt-3 font-mono">
                <span>{testimonials[activeIndex].time}</span>
                <CheckCheck className="w-4 h-4 text-emerald-400" />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-4">
              <button
                onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                ← Previous Story
              </button>
              <span className="text-xs text-white/60 font-mono">
                {activeIndex + 1} / {testimonials.length}
              </span>
              <button
                onClick={() => setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                Next Story →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
