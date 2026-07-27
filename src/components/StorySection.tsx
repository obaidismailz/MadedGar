"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, Heart, Compass, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

export default function StorySection() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const timelineSteps = language === "en" ? [
    {
      year: "Phase 01",
      title: "The Legacy of Mohafiz",
      desc: "Rooted in the timeless tradition of family protection and honor in Pakistan.",
      icon: ShieldCheck,
    },
    {
      year: "Phase 02",
      title: "Families Moved Abroad",
      desc: "Millions of talented Pakistanis relocated to London, Dubai, Toronto, and Dallas to build bright futures.",
      icon: Compass,
    },
    {
      year: "Phase 03",
      title: "The Care Gap Emerged",
      desc: "Managing aging parents , wife , childrens and extended family ' medical emergencies, doctor visits, and home maintenance from abroad proved painful and uncertain.",
      icon: Heart,
    },
    {
      year: "Phase 04",
      title: "MadedGar Was Born",
      desc: "A institutionalized luxury concierge service blending technology, local medical teams, and unconditional warmth.",
      icon: Sparkles,
    },
  ] : [
    {
      year: "مرحلہ 01",
      title: "محافظ کا ورثہ",
      desc: "پاکستان میں خاندان کے تحفظ اور عزت کی لازوال روایت میں جڑا ہوا ہے۔",
      icon: ShieldCheck,
    },
    {
      year: "مرحلہ 02",
      title: "دیارِ غیر ہجرت",
      desc: "لاکھوں باصلاحیت پاکستانی روشن مستقبل کی تعمیر کے لیے لندن، دبئی، ٹورنٹو اور ڈلاس منتقل ہو گئے۔",
      icon: Compass,
    },
    {
      year: "مرحلہ 03",
      title: "دیکھ بھال میں دوری کا احساس",
      desc: "بیرون ملک مقیم رہ کر پاکستان میں اہل خانہ کی ہنگامی طبی ضروریات، ڈاکٹر کے دورے اور دیکھ بھال کو سنبھالنا مشکل اور تکلیف دہ ثابت ہوا۔",
      icon: Heart,
    },
    {
      year: "مرحلہ 04",
      title: "مددگار کا قیام",
      desc: "ٹیکنالوجی، مقامی طبی ٹیموں اور خلوص کا امتزاج، ایک منظم اور پرسکون دیکھ بھال سروس۔",
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="story"
      ref={sectionRef}
      className="py-24 bg-[#071F17] text-white relative overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop"
          alt="Warm Pakistani family background"
          fill
          className="object-cover object-center filter grayscale mix-blend-overlay"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#D4AF37]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === "en" ? "Our Origin Story" : "ہماری شروعات"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight text-white">
            {language === "en" ? "Born From A Shared Personal Need" : "ایک ذاتی ضرورت سے جنم لینے والا عزم"}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 font-body font-light">
            {language === "en"
              ? "How a personal commitment evolved into Pakistan's standard for luxury elderly concierge care."
              : "کیسے ایک ذاتی عزم پاکستان میں اوورسیز خاندانوں کی دیکھ بھال کی بہترین پہچان بنا۔"}
          </p>
        </div>

        {/* Timeline Grid with SVG Path Drawing */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical SVG Line Drawing for Large Screens */}
          <div className="hidden sm:block absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-1 pointer-events-none z-0">
            <svg className="w-full h-full" overflow="visible">
              <path
                ref={pathRef}
                d="M 2 0 V 800"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="3"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          <div className="space-y-12 sm:space-y-20 relative z-10">
            {timelineSteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row items-center ${isEven ? "sm:flex-row-reverse" : ""
                    } gap-8`}
                >
                  {/* Content Box */}
                  <div className="w-full sm:w-1/2 text-center sm:text-left">
                    <div className="glass-card-dark p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300">
                      <div className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold font-number mb-3">
                        {step.year}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/75 font-body leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#0F3D2E] border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-lg shadow-[#D4AF37]/20 z-10">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden sm:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
