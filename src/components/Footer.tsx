"use client";

import { ShieldCheck, Phone, Mail, MapPin, MessageCircle, Heart } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#071F17] text-white pt-20 pb-12 border-t border-[#D4AF37]/20 relative overflow-hidden">

      {/* Decorative top border gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-white/10">

          {/* Column 1: Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white flex items-center justify-center border border-[#D4AF37]/50 shadow-xl overflow-hidden relative hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo3.png"
                  alt="MadedGar Logo"
                  fill
                  className="object-contain p-2.5"
                />
              </div>
            </div>

            <p className="text-sm text-white/75 font-body leading-relaxed max-w-sm">
              {language === "en"
                ? "Pakistan’s premiere luxury care & concierge brand for overseas Pakistanis. Providing 24/7 emergency support, medical oversight, task management, and complete peace of mind."
                : "مددگار اوورسیز پاکستانیوں کے لیے پاکستان کا سب سے پہلا لگژری فیملی کیئر اور کانسیئرج برانڈ ہے۔ جو 24/7 طبی مدد، روزمرہ کے کام اور کامل ذہنی سکون فراہم کرتا ہے۔"}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-white/60">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                {language === "en"
                  ? "Operations Active in ISB, LHR, KHI & KPK"
                  : "اسلام آباد، لاہور، کراچی اور خیبر پختونخوا میں خدمات جاری ہیں"}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#D4AF37] mb-4">
                {language === "en" ? "Services" : "خدمات"}
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70 font-body">
                <li><a href="#services" className="hover:text-white transition-colors">{language === "en" ? "Emergency Support" : "ہنگامی طبی امداد"}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{language === "en" ? "Task Management" : "روزمرہ کے کام"}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{language === "en" ? "Financial Services" : "مالیاتی سروسز"}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{language === "en" ? "Supervisory Support" : "نگرانی اور فلاح"}</a></li>
                <li><a href="#pillars" className="hover:text-white transition-colors">{language === "en" ? "Four Pillars" : "چار بنیادی ستون"}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#D4AF37] mb-4">
                {language === "en" ? "Company" : "کمپنی"}
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70 font-body">
                <li><a href="#about" className="hover:text-white transition-colors">{language === "en" ? "About MadedGar" : "مددگار کے بارے میں"}</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">{language === "en" ? "How It Works" : "طریقہ کار"}</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">{language === "en" ? "Care Plans" : "پلانز اور پیکیجز"}</a></li>
                <li><a href="#story" className="hover:text-white transition-colors">{language === "en" ? "Our Story" : "ہماری کہانی"}</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact & Global Desks */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#D4AF37] mb-4">
              {language === "en" ? "Direct Contact" : "رابطہ کریں"}
            </h4>

            <div className="space-y-3 text-xs text-white/80 font-body">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>
                  {language === "en"
                    ? "HQ: Blue Area, Islamabad | London Liaison Desk"
                    : "مرکز: بلیو ایریا، اسلام آباد | لندن ڈیسک"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>
                  {language === "en"
                    ? "24/7 Helpline: +44 7795 109561"
                    : "24/7 ہیلپ لائن: 109561 7795 44+"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>info@madedgar.com</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/447795109561"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === "en" ? "Instant WhatsApp Concierge" : "فوری واٹس ایپ رابطہ"}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-body gap-4">
          <p>
            {language === "en"
              ? `© ${new Date().getFullYear()} MadedGar VIP Care Ltd. All rights reserved.`
              : `© ${new Date().getFullYear()} مددگار وی آئی پی کیئر لمیٹڈ۔ جملہ حقوق محفوظ ہیں۔`}
          </p>
          <div className="flex items-center gap-1 font-body">
            <span>{language === "en" ? "Crafted by" : "تیار کردہ از"}</span>
            <a
              href="https://tohjah.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-white transition-colors font-semibold"
            >
              Tohjah
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
