"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, ShoppingCart, Banknote, Home, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

export default function FourPillars() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (gridRef.current?.children) {
        gsap.fromTo(
          Array.from(gridRef.current.children),
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = language === "en" ? [
    {
      num: "01",
      title: "Emergency Support",
      icon: ShieldCheck,
      items: ["Medical Coordination", "Real-Time Updates", "Coordinate with Dcotor", "Coordinate with Ambulance services"],
      gradient: "from-[#0F3D2E] to-[#165642]",
    },
    {
      num: "02",
      title: "Task Management",
      icon: ShoppingCart,
      items: ["Prescription & Grocery Shopping", "Doctor Appointments Escort", "Home Maintenance Supervision", "Lab Test Pickups"],
      gradient: "from-[#1F6B4F] to-[#0F3D2E]",
    },
    {
      num: "03",
      title: "Financial Services",
      icon: Banknote,
      items: ["Utility Bill Payments", "Secure Escrow Payments", "Staff Salary Disbursement"],
      gradient: "from-[#0F3D2E] to-[#071F17]",
    },
    {
      num: "04",
      title: "Supervisory Support",
      icon: Home,
      items: ["Property Safety Visits", "Weekly Wellness Checks", "Physical Photo Verifications"],
      gradient: "from-[#165642] to-[#1F6B4F]",
    },
  ] : [
    {
      num: "01",
      title: "ہنگامی طبی امداد",
      icon: ShieldCheck,
      items: ["طبی ہم آہنگی", "لائیو اپ ڈیٹس", "ڈاکٹر سے رابطہ", "ایمبولینس کی فوری فراہمی"],
      gradient: "from-[#0F3D2E] to-[#165642]",
    },
    {
      num: "02",
      title: "روزمرہ کے کام",
      icon: ShoppingCart,
      items: ["ادویات اور راشن کی خریداری", "ڈاکٹر کے اپائنٹمنٹ پر ہمراہی", "گھر کی دیکھ بھال کی نگرانی", "لیب ٹیسٹ رپورٹس کی وصولی"],
      gradient: "from-[#1F6B4F] to-[#0F3D2E]",
    },
    {
      num: "03",
      title: "مالیاتی سروسز",
      icon: Banknote,
      items: ["بلوں کی ادائیگی", "محفوظ ایسکرو ادائیگی", "گھریلو ملازمین کی تنخواہیں"],
      gradient: "from-[#0F3D2E] to-[#071F17]",
    },
    {
      num: "04",
      title: "نگرانی اور فلاح",
      icon: Home,
      items: ["پراپرٹی کی حفاظت", "ہفتہ وار خیریت کے دورے", "تصویری اور ویڈیو تصدیق"],
      gradient: "from-[#165642] to-[#1F6B4F]",
    },
  ];

  return (
    <section
      id="pillars"
      ref={sectionRef}
      className="py-24 bg-[#071F17] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#D4AF37]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === "en" ? "The Foundations of Trust" : "اعتماد کی مضبوط بنیادیں"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight text-white">
            {language === "en" ? "Four Pillars Of Care" : "دیکھ بھال کے چار بنیادی ستون"}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 font-body font-light">
            {language === "en"
              ? "Comprehensive coverages meticulously designed to handle every operational aspect for your parents , wife , childrens and extended family back home."
              : "پاکستان میں مقیم آپ کے والدین، زوجہ، بچوں اور خاندان کی مکمل سہولت اور فلاح کے لیے جامع کیئر سروسز۔"}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#0D2C22] p-8 rounded-[32px] border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-xl hover:-translate-y-3 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Glow Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Icon & Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-number text-2xl font-bold text-[#D4AF37]/60">
                      {pillar.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Bullet Items */}
                  <ul className="space-y-3">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-body">
                        <span className="text-[#D4AF37] font-bold">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>


              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
