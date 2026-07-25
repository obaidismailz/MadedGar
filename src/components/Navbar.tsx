"use client";

import { useState, useEffect } from "react";
import { MessageCircle, PhoneCall, Download, Calendar, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Services", href: "#services" },
    { name: "Pillars", href: "#pillars" },
    { name: "Pricing", href: "#pricing" },
    { name: "Story", href: "#story" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2.5 sm:gap-3 pointer-events-auto">
        
        {/* Main Floating Compact iOS Pill Bar */}
        <div className="flex items-center gap-2.5 sm:gap-4 bg-[#071F17]/90 backdrop-blur-xl border border-white/15 rounded-full px-3.5 sm:px-5 py-2 shadow-2xl shadow-black/40 text-white transition-all duration-300">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0F3D2E] flex items-center justify-center text-[#D4AF37] font-bold text-xs sm:text-sm border border-[#D4AF37]/40 shadow-inner group-hover:scale-105 transition-transform">
              M
            </div>
            <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-white">
              Maded<span className="text-[#D4AF37]">Gar</span>
            </span>
          </a>

          {/* Divider Line | */}
          <div className="h-4 w-[1px] bg-white/20 shrink-0" />

          {/* Compact Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] font-medium text-white/80 hover:text-white transition-colors py-0.5 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Inner CTA Pill Button with glowing border */}
          <button
            onClick={onOpenConsultation}
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0F3D2E] hover:bg-[#165642] text-white text-[12px] font-semibold tracking-wide border border-[#D4AF37]/70 shadow-[0_0_12px_rgba(212,175,55,0.25)] hover:shadow-[0_0_18px_rgba(212,175,55,0.45)] transition-all shrink-0 hover:scale-105 active:scale-95"
          >
            <span>Get Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>

          {/* Mobile Menu Toggle Button inside main pill */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-white/80 hover:text-white focus:outline-none shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Separate iOS Style Circular Action Pills (Right side) */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          
          {/* iOS Pill 1: Direct WhatsApp Quick Action */}
          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noreferrer"
            title="Instant WhatsApp Support"
            className="w-9 h-9 rounded-full bg-[#071F17]/90 backdrop-blur-xl border border-white/15 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:scale-110 active:scale-95 transition-all shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* iOS Pill 2: Direct Helpline Call Action */}
          <a
            href="tel:+925111162333"
            title="Call 24/7 Helpline"
            className="w-9 h-9 rounded-full bg-[#071F17]/90 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white/90 hover:bg-white/20 hover:scale-110 active:scale-95 transition-all shadow-xl"
          >
            <PhoneCall className="w-4 h-4" />
          </a>

          {/* iOS Pill 3: Brochure Download Quick Icon */}
          <a
            href="#pricing"
            title="Download Brochure"
            className="w-9 h-9 rounded-full bg-[#071F17]/90 backdrop-blur-xl border border-white/15 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/20 hover:scale-110 active:scale-95 transition-all shadow-xl"
          >
            <Download className="w-4 h-4" />
          </a>

          {/* iOS Pill 4: Schedule Booking Modal Icon */}
          <button
            onClick={onOpenConsultation}
            title="Schedule Consultation"
            className="w-9 h-9 rounded-full bg-[#0F3D2E] backdrop-blur-xl border border-[#D4AF37]/80 flex items-center justify-center text-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.3)] hover:bg-[#D4AF37] hover:text-[#071F17] hover:scale-110 active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown (iOS style glass sheet) */}
      {mobileMenuOpen && (
        <div className="max-w-xs mx-auto mt-3 bg-[#071F17]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-2xl text-white space-y-3 animate-in slide-in-from-top duration-300 pointer-events-auto">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-white/80 hover:text-white py-1.5 border-b border-white/10 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#D4AF37]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-full bg-[#D4AF37] text-[#071F17] text-xs font-bold text-center shadow-lg"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
