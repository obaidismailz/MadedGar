"use client";

import { ShieldCheck, Heart, Clock, Eye, Sparkles, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CoreValues() {
  const { language } = useLanguage();

  const values = language === "en" ? [
    {
      title: "Unwavering Trust",
      desc: "Every concierge staff member undergoes multi-stage background vetting, and ethics training.",
      icon: ShieldCheck,
      badge: "Vetted & Verified",
    },
    {
      title: "Deep Compassion",
      desc: "We treat your parents , wife , childrens and extended family  and other loved one with unconditional respect, dignity, and warmth—just like our own beloved family members.",
      icon: Heart,
      badge: "Family First",
    },
    {
      title: "Absolute Transparency",
      desc: "Full expense auditing, photo verifications, and digital receipts delivered via WhatsApp after every interaction.",
      icon: Eye,
      badge: "100% Audited",
    },
    {
      title: "Local Language Comfort",
      desc: "Our on-ground staff and care officers communicate fluently in Urdu and regional languages (Punjabi, Pashto, Sindhi) to ensure zero communication gaps and absolute comfort for your family.",
      icon: Languages,
      badge: "Native Language Care",
    },
  ] : [
    {
      title: "بلا شبہ بھروسہ",
      desc: "ہر عملہ ملٹی اسٹیج بیک گراؤنڈ ویریفکیشن اور اخلاقی تربیت سے گزرتا ہے۔",
      icon: ShieldCheck,
      badge: "تصدیق شدہ عملہ",
    },
    {
      title: "دلی ہمدردی",
      desc: "ہم آپ کے والدین، زوجہ، بچوں اور خاندان کے دیگر افراد کے ساتھ غیر مشروط احترام اور محبت سے پیش آتے ہیں۔",
      icon: Heart,
      badge: "خاندان اول",
    },
    {
      title: "کامل شفافیت",
      desc: "اخراجات کا مکمل حساب، تصاویر اور ڈیجیٹل رسیدیں واٹس ایپ پر فراہم کی جاتی ہیں۔",
      icon: Eye,
      badge: "100٪ آڈٹ شدہ",
    },
    {
      title: "مقامی زبانوں کی آسانی",
      desc: "ہمارا عملہ اردو اور دیگر علاقائی زبانوں (پنجابی، پشتو، سندھی) میں بات چیت کرتا ہے تاکہ فیملی کو مکمل آرام رہے۔",
      icon: Languages,
      badge: "مقامی زبان کی دیکھ بھال",
    },
  ];

  return (
    <section className="py-20 bg-[#FCFAF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F3D2E]/10 text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#0F3D2E]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{language === "en" ? "Guiding Principles" : "ہمارے رہنما اصول"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#161616] tracking-tight">
            {language === "en" ? "Our Core Pillars Of Integrity" : "ہمارے دیانت داری کے بنیادی ستون"}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-white border border-[#0F3D2E]/10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Rotating Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0F3D2E]/10 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-[#D4AF37] flex items-center justify-center mb-6 transition-all duration-500 group-hover:rotate-12">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#FCFAF7] text-[#0F3D2E] border border-[#0F3D2E]/10">
                    {val.badge}
                  </span>

                  <h3 className="text-xl font-heading font-bold text-[#161616] mt-4 mb-2 group-hover:text-[#0F3D2E] transition-colors">
                    {val.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#777777] font-body leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
