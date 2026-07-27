"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall, Calendar, Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onOpenConsultation: (planOrService?: string) => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = language === "en" ? [
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Services", href: "#services" },
    { name: "Pillars", href: "#pillars" },
    { name: "Pricing", href: "#pricing" },
    { name: "Story", href: "#story" },
  ] : [
    { name: "تعارف", href: "#about" },
    { name: "طریقہ کار", href: "#how-it-works" },
    { name: "خدمات", href: "#services" },
    { name: "ستون", href: "#pillars" },
    { name: "پیکیجز", href: "#pricing" },
    { name: "کہانی", href: "#story" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2.5 sm:gap-3 pointer-events-auto">
        
        {/* Main Floating Compact iOS Pill Bar */}
        <div className="flex items-center gap-2.5 sm:gap-4 bg-[#071F17]/90 backdrop-blur-xl border border-white/15 rounded-full px-3.5 sm:px-5 py-2 shadow-2xl shadow-black/40 text-white transition-all duration-300">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center group shrink-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center border-2 border-[#D4AF37] shadow-md group-hover:scale-110 active:scale-95 transition-all overflow-hidden relative">
              <Image
                src="/madedgar logo.png"
                alt="MadedGar Logo"
                fill
                className="object-contain p-1.5"
                priority
              />
            </div>
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

          {/* Action button: Schedule Consultation */}
          <button
            onClick={() => onOpenConsultation()}
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D4AF37] hover:bg-[#C59B27] text-[#071F17] text-[12px] font-bold transition-all whitespace-nowrap cursor-pointer"
          >
            <span>{language === "en" ? "Schedule Consultation" : "مشاورت کریں"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
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
          
          {/* iOS Pill 1: Direct Helpline Call Action */}
          <a
            href="tel:+447795109561"
            title="Call Dr Ameen"
            className="w-9 h-9 rounded-full bg-[#071F17]/90 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white/90 hover:bg-white/20 hover:scale-110 active:scale-95 transition-all shadow-xl"
          >
            <PhoneCall className="w-4 h-4" />
          </a>

          {/* iOS Pill 2: Language Switcher */}
          <button
            onClick={() => setLanguage(language === "en" ? "ur" : "en")}
            title={language === "en" ? "Switch to Urdu (اردو)" : "Switch to English"}
            className="w-9 h-9 rounded-full bg-[#071F17]/90 backdrop-blur-xl border border-white/15 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/20 hover:scale-110 active:scale-95 transition-all shadow-xl cursor-pointer"
          >
            <Globe className="w-4 h-4" />
          </button>

          {/* iOS Pill 3: Schedule Booking Modal Icon */}
          <button
            onClick={() => onOpenConsultation()}
            title={language === "en" ? "Schedule Consultation" : "مشاورت کریں"}
            className="w-9 h-9 rounded-full bg-[#0F3D2E] backdrop-blur-xl border border-[#D4AF37]/80 flex items-center justify-center text-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.3)] hover:bg-[#D4AF37] hover:text-[#071F17] hover:scale-110 active:scale-95 transition-all cursor-pointer"
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

          <div className="pt-2 flex flex-col gap-2">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => {
                setLanguage(language === "en" ? "ur" : "en");
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-full border border-white/20 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 hover:bg-white/10 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span>{language === "en" ? "Urdu (اردو)" : "English (انگریزی)"}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-full bg-[#D4AF37] text-[#071F17] text-xs font-bold text-center shadow-lg hover:bg-[#C59B27] transition-all cursor-pointer"
            >
              {language === "en" ? "Schedule Consultation" : "مشاورت کا وقت لیں"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
