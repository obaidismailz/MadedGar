"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Download, ShieldCheck, Heart, Clock, Globe2, Sparkles } from "lucide-react";
import gsap from "gsap";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const floatingCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          buttonsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          floatingCardsRef.current?.children ? Array.from(floatingCardsRef.current.children) : [],
          { y: 50, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15 },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#071F17]"
    >
      {/* Background Hero Video with Crystal Clear Visibility & Subtle 20% Contrast Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full transform scale-105">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center opacity-90 brightness-95"
          >
            <source src="/Hero.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Subtle dark gradient overlay (only ~20% tint for crystal clear video + text legibility) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F17] via-[#071F17]/20 to-black/35" />
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      {/* Decorative luxury radial light glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left flex flex-col items-center sm:items-start justify-center">
        
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs sm:text-sm font-semibold mb-6 shadow-inner">
          <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin" style={{ animationDuration: '6s' }} />
          <span>Pakistan's Premiere Elder Care & VIP Concierge</span>
        </div>

        {/* Huge Emotional Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-[1.1] max-w-4xl"
        >
          Remit Love. <br />
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent">
            Deliver Care.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-6 text-lg sm:text-xl text-white/80 font-body max-w-2xl leading-relaxed font-light"
        >
          Helping overseas Pakistanis <span className="text-white font-medium">protect</span>,{" "}
          <span className="text-white font-medium">provide</span>, and{" "}
          <span className="text-[#D4AF37] font-medium">care</span> for their families back home with 24/7 dedicated medical, financial, and supervisory support.
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-[#071F17] font-semibold text-base shadow-xl shadow-[#D4AF37]/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Schedule Consultation</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5 text-[#D4AF37]" />
            <span>Download Care Brochure</span>
          </a>
        </div>

        {/* Floating Glass Stats Grid */}
        <div
          ref={floatingCardsRef}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full"
        >
          <div className="glass-card-dark p-5 rounded-2xl flex items-center gap-4 hover:border-[#D4AF37]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-heading font-bold text-white">24/7</div>
              <div className="text-xs text-white/70 font-medium">Instant Emergency Support</div>
            </div>
          </div>

          <div className="glass-card-dark p-5 rounded-2xl flex items-center gap-4 hover:border-[#D4AF37]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <Globe2 className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-heading font-bold text-white">Pakistan Wide</div>
              <div className="text-xs text-white/70 font-medium">ISB, LHR, KHI & Beyond</div>
            </div>
          </div>

          <div className="glass-card-dark p-5 rounded-2xl flex items-center gap-4 hover:border-[#D4AF37]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-[#D4AF37] text-left">
              <div className="text-2xl font-heading font-bold text-white">100% Trusted</div>
              <div className="text-xs text-white/70 font-medium">Vetted Medical Staff</div>
            </div>
          </div>

          <div className="glass-card-dark p-5 rounded-2xl flex items-center gap-4 hover:border-[#D4AF37]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <Heart className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-heading font-bold text-white">Real-time</div>
              <div className="text-xs text-white/70 font-medium">WhatsApp Family Reports</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
