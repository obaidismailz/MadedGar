"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Ambulance, ShoppingBag, CreditCard, ShieldAlert, ArrowUpRight, CheckCircle, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

interface ServicesSectionProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export default function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (cardsRef.current?.children) {
        gsap.fromTo(
          Array.from(cardsRef.current.children),
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = language === "en" ? [
    {
      id: "emergency",
      title: "Emergency Support",
      tagline: "24/7 Swift Medical Response",
      desc: "We can cooridnate with amublance and hoisptal about on going care of your beloved on-ground. We can also assist in hospital admission coordination, doctor communication, and continuous real-time family updates.",
      icon: Ambulance,
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
      features: ["24/7 Contactable ", "Assist in Routine Hospital Visits", "Real-Time WhatsApp Audio/Video Logs"],
      badge: "Critical Care",
    },
    {
      id: "errands",
      title: "Task Management",
      tagline: "Daily Living & Doctor Visits",
      desc: "Personal assitant to accompany parents to doctor appointments, manage prescription refills, deliver fresh groceries, and oversee home maintenance.",
      icon: ShoppingBag,
      image: "/2nd image.png",
      features: ["Accompanied Doctor Visits", "Grocery & Organic Food Delivery", "Prescription & Pharmacy Refills", "Electrician & Plumber Oversight"],
      badge: "Daily Lifestyle",
    },
    {
      id: "financial",
      title: "Financial Services",
      tagline: "Transparent Escrow & Bills",
      desc: "Hassle-free payment of utility bills, house maintenance costs, medical fees, and domestic staff salaries with full audited digital receipts.",
      icon: CreditCard,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
      features: ["Utility Bill Payment (Electricity/Gas)", "Audited Monthly Expense Reports", "Deliver Cash Safely", "Domestic Staff Payroll Handling"],
      badge: "Financial Security",
    },
    {
      id: "supervisory",
      title: "Supervisory Support",
      tagline: "Property & Wellness Visits",
      desc: "Regular unannounced and scheduled physical visits to check on parent wellness, inspect property maintenance, and verify tenant status in Pakistan.",
      icon: ShieldAlert,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop",
      features: ["Twice a Weekly In-Person Wellness Visits", "Property Inspection Reports", "Property Insepction and Repair Assitance."],
      badge: "Property & Wellness",
    },
  ] : [
    {
      id: "emergency",
      title: "ہنگامی طبی امداد",
      tagline: "24/7 ہنگامی طبی جوابدہی",
      desc: "ہم پاکستان میں آپ کے پیاروں کے لیے ایمبولینس اور ہسپتال سے رابطہ، داخلہ کی سہولت اور فیملی کو لائیو اپ ڈیٹس فراہم کرتے ہیں۔",
      icon: Ambulance,
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
      features: ["24/7 رابطہ اور کال کی سہولت", "ہسپتال کے معمول کے دوروں میں مدد", "لائیو واٹس ایپ آڈیو/ویڈیو رپورٹس"],
      badge: "طبی فلاح",
    },
    {
      id: "errands",
      title: "روزمرہ کے کام",
      tagline: "روزمرہ کی زندگی اور ڈاکٹر کے دورے",
      desc: "ڈاکٹر کے اپائنٹمنٹس پر ساتھ جانے، ادویات منگوانے، تازہ راشن کی ترسیل اور گھر کے کاموں کی نگرانی کے لیے پرسنل اسسٹنٹ۔",
      icon: ShoppingBag,
      image: "/2nd image.png",
      features: ["ڈاکٹر کے ہاں ہمراہی", "گروسری اور راشن کی ترسیل", "ادویات کی فراہمی", "بجلی اور پلمبنگ کے کام کی نگرانی"],
      badge: "لائف اسٹائل",
    },
    {
      id: "financial",
      title: "مالیاتی سروسز",
      tagline: "شفاف ایسکرو اور بلوں کی ادائیگی",
      desc: "یوٹیلیٹی بلوں، گھر کی دیکھ بھال کے اخراجات اور گھریلو عملے کی تنخواہوں کی ادائیگی مکمل آڈٹ اور ڈیجیٹل رسیدوں کے ساتھ۔",
      icon: CreditCard,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
      features: ["یوٹیلیٹی بلز کی ادائیگی", "ماہانہ آڈٹ شدہ اخراجات کی رپورٹ", "محفوظ کیش کی ترسیل", "گھریلو عملے کی تنخواہوں کی ادائیگی"],
      badge: "مالیاتی تحفظ",
    },
    {
      id: "supervisory",
      title: "نگرانی اور فلاح",
      tagline: "پراپرٹی اور صحت کے دورے",
      desc: "والدین کی صحت کی جانچ، پراپرٹی کی دیکھ بھال اور کرایہ داروں کی تصدیق کے لیے غیر اعلانیہ اور باقاعدہ دورے۔",
      icon: ShieldAlert,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop",
      features: ["ہفتے میں دو بار انفرادی خیریت کے دورے", "پراپرٹی کی تفصیلی رپورٹ", "مرمت اور دیکھ بھال کی سہولت"],
      badge: "نگرانی اور فلاح",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-[#FCFAF7] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F3D2E]/10 text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#0F3D2E]/15">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{language === "en" ? "Core Luxury Offerings" : "ہماری بنیادی خدمات"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#161616] tracking-tight">
              {language === "en" ? "Tailored Concierge Services For Every Family Need" : "خاندان کی ہر ضرورت کے لیے مخصوص کیئر سروسز"}
            </h2>
          </div>
          <p className="text-base text-[#777777] max-w-md font-body">
            {language === "en"
              ? "Designed specifically for overseas Pakistanis who demand reliable, Safe and premium care for their parents back home."
              : "خاص طور پر دیارِ غیر میں مقیم پاکستانیوں کے لیے ڈیزائن کی گئی سروسز جو پاکستان میں اپنے خاندان کے لیے محفوظ اور بہترین دیکھ بھال چاہتے ہیں۔"}
          </p>
        </div>

        {/* 40px Rounded Luxury Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-[40px] border border-[#0F3D2E]/15 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Image Header with Glass Gradient Overlay */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F17] via-[#071F17]/40 to-transparent" />

                  {/* Badge & Icon Floating Overlay */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                    <span className="px-4 py-1.5 rounded-full bg-[#071F17]/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-wider">
                      {service.badge}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#0F3D2E] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center shadow-lg group-hover:bg-[#D4AF37] group-hover:text-[#071F17] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <div className="text-xs uppercase font-semibold tracking-widest text-[#D4AF37] mb-1">
                      {service.tagline}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <p className="text-sm sm:text-base text-[#161616]/80 font-body leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#161616]/90 font-medium">
                        <CheckCircle className="w-4 h-4 text-[#0F3D2E] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Action Button */}
                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="w-full py-4 px-6 rounded-2xl bg-[#FCFAF7] border border-[#0F3D2E]/20 text-[#0F3D2E] font-heading font-bold text-sm hover:bg-[#0F3D2E] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>{language === "en" ? `Request ${service.title}` : `${service.title} کی درخواست کریں`}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
