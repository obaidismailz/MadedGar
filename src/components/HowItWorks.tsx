"use client";

import { MessageSquarePlus, ClipboardList, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { language } = useLanguage();

  const steps = language === "en" ? [
    {
      step: "01",
      title: "Consultation",
      subtitle: "Personal Intake",
      desc: "We discuss your family's exact needs and plan our services around their curcumstances.",
      icon: MessageSquarePlus,
      highlight: "30-Min Intake Call",
    },
    {
      step: "02",
      title: "Custom Planning",
      subtitle: "Dedicated Protocol",
      desc: "We assign a verified madedgar offcier (care) in city of our client.",
      icon: ClipboardList,
      highlight: "Personal Care Manager",
    },
    {
      step: "03",
      title: "Peace of Mind",
      subtitle: "24/7 Execution",
      desc: "Receive real-time WhatsApp reports, photo verifications, and instant support whenever your parents , wife , childrens and extended family  need assistance.",
      icon: ShieldCheck,
      highlight: "Real-Time Updates",
    },
  ] : [
    {
      step: "01",
      title: "مشاورت",
      subtitle: "معلومات کا حصول",
      desc: "ہم آپ کے خاندان کی مخصوص ضروریات پر بات چیت کرتے ہیں اور ان کے مطابق سروسز ترتیب دیتے ہیں۔",
      icon: MessageSquarePlus,
      highlight: "30 منٹ کی مشاورتی کال",
    },
    {
      step: "02",
      title: "منصوبہ بندی",
      subtitle: "مخصوص طریقہ کار",
      desc: "ہم کلائنٹ کے شہر میں ایک تصدیق شدہ کیئر آفیسر (مددگار) نامزد کرتے ہیں۔",
      icon: ClipboardList,
      highlight: "پرسنل کیئر مینیجر",
    },
    {
      step: "03",
      title: "ذہنی سکون",
      subtitle: "24/7 خدمات کا آغاز",
      desc: "جب بھی آپ کے والدین، زوجہ، بچوں اور دیگر رشتہ داروں کو ضرورت ہو، لائیو واٹس ایپ رپورٹس، تصویری تصدیق اور فوری مدد حاصل کریں۔",
      icon: ShieldCheck,
      highlight: "لائیو اپ ڈیٹس",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-[#071F17] text-white relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0F3D2E] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#D4AF37]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === "en" ? "Apple-Inspired Seamless Flow" : "آسان اور منظم طریقہ کار"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight text-white">
            {language === "en" ? "How MadedGar Works" : "مددگار کیسے کام کرتا ہے"}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 font-body font-light">
            {language === "en"
              ? "Three simple steps to deliver world-class care and absolute peace of mind back home."
              : "پاکستان میں آپ کے پیاروں کی بہترین دیکھ بھال اور آپ کے مکمل ذہنی سکون کے لیے تین آسان مراحل۔"}
          </p>
        </div>

        {/* Timeline Container with Connecting Animated Line */}
        <div className="relative">



          {/* Step Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card-dark p-8 rounded-[32px] border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-2 group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-number font-bold text-4xl sm:text-5xl text-[#D4AF37] opacity-90 group-hover:scale-110 transition-transform">
                        {item.step}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-[#0F3D2E] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#071F17] transition-all">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37] mb-1">
                      {item.subtitle}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/75 font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card Footer Badge */}
                  <div className="pt-8 mt-6 border-t border-white/10 flex items-center text-xs font-medium text-white/80">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37]">
                      {item.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
