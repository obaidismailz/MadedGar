"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Ambulance,
  ShoppingBag,
  CreditCard,
  ShieldAlert,
  ArrowUpRight,
  CheckCircle,
  Sparkles,
  Award,
  Activity,
  Dumbbell,
  Heart,
  Calendar,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Stethoscope
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import DrHadiqaModal from "@/components/DrHadiqaModal";

interface ServicesSectionProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export default function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const drCardRef = useRef<HTMLDivElement>(null);
  const [isDrModalOpen, setIsDrModalOpen] = useState(false);
  const [drModalTab, setDrModalTab] = useState<"overview" | "physio" | "fitness" | "pricing">("overview");

  const openDrModal = (tab: "overview" | "physio" | "fitness" | "pricing" = "overview") => {
    setDrModalTab(tab);
    setIsDrModalOpen(true);
  };

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

      if (drCardRef.current) {
        gsap.fromTo(
          drCardRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: drCardRef.current,
              start: "top 85%",
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
      desc: "We can coordinate with ambulance and hospital about ongoing care of your beloved on-ground. We can also assist in hospital admission coordination, doctor communication, and continuous real-time family updates.",
      icon: Ambulance,
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
      features: ["24/7 Contactable", "Assist in Routine Hospital Visits", "Real-Time WhatsApp Audio/Video Logs"],
      badge: "Critical Care",
    },
    {
      id: "errands",
      title: "Task Management",
      tagline: "Daily Living & Doctor Visits",
      desc: "Personal assistant to accompany parents to doctor appointments, manage prescription refills, deliver fresh groceries, and oversee home maintenance.",
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
      features: ["Twice a Weekly In-Person Wellness Visits", "Property Inspection Reports", "Property Inspection and Repair Assistance"],
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
              ? "Designed specifically for overseas Pakistanis who demand reliable, safe and premium care for their parents back home."
              : "خاص طور پر دیارِ غیر میں مقیم پاکستانیوں کے لیے ڈیزائن کی گئی سروسز جو پاکستان میں اپنے خاندان کے لیے محفوظ اور بہترین دیکھ بھال چاہتے ہیں۔"}
          </p>
        </div>

        {/* 40px Rounded Luxury Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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

        {/* FULL CARD COMPLETE ROW: DR. HADIQA SHAHROOM SPECIALIST PROFILE */}
        <div
          ref={drCardRef}
          onClick={() => setIsDrModalOpen(true)}
          className="group relative bg-gradient-to-br from-[#071F17] via-[#0F3D2E] to-[#164837] rounded-[40px] border-2 border-[#D4AF37]/40 overflow-hidden shadow-2xl hover:shadow-[0_25px_60px_rgba(15,61,46,0.35)] transition-all duration-500 hover:-translate-y-1 cursor-pointer"
        >
          {/* Background Glows & Accent Watermark */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/4 -bottom-20 w-72 h-72 bg-[#0F3D2E]/40 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Doctor Image Column */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-[#D4AF37] shadow-2xl group-hover:scale-105 transition-transform duration-500 bg-[#071F17]">
                  <Image
                    src="/DR.png"
                    alt="Dr. Hadiqa Shahroom - DPT Physiotherapist"
                    fill
                    className="object-cover object-top filter brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Certified Badge */}
                  <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-xl bg-[#071F17]/90 backdrop-blur-md border border-[#D4AF37]/40 text-center">
                    <span className="text-[11px] font-heading font-bold text-[#D4AF37] uppercase tracking-wider">
                      DPT • Certified Specialist
                    </span>
                  </div>
                </div>
              </div>

              {/* Doctor Info & Highlights Column */}
              <div className="lg:col-span-8 flex flex-col justify-between text-white space-y-6">
                <div>
                  {/* Badges Row */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37] text-[#071F17] text-xs font-heading font-bold uppercase tracking-wider shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      {language === "en" ? "Homecare Specialist" : "خصوصی ہوم کیئر سروس"}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D4AF37] text-xs font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      Shifa & PAF Hospital Trained
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Islamabad, DHA & Bahria Town
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight">
                    {language === "en" ? "Dr. Hadiqa Shahroom" : "ڈاکٹر حدیقہ شاہ روم"}
                  </h3>
                  <p className="text-sm sm:text-base text-[#D4AF37] font-heading font-semibold mt-1">
                    DPT | {language === "en" ? "Physiotherapist & Women's Fitness Trainer" : "ماہر فزیوتھراپسٹ اور ویمنز فٹنس ٹرینر"}
                  </p>
                  
                  <p className="text-sm sm:text-base text-white/85 mt-3 font-body leading-relaxed max-w-2xl">
                    {language === "en"
                      ? "Professional physiotherapy and personal fitness training delivered right at your doorstep. Hospital-standard recovery for elderly and post-surgery patients, plus private in-home fitness for women."
                      : "پیشہ ورانہ فزیوتھراپی اور ذاتی فٹنس ٹریننگ، اب آپ کی دہلیز پر۔ بزرگ اور سرجری سے صحت یاب ہونے والے مریضوں کے لیے ہسپتال کے معیار کی دیکھ بھال اور خواتین کے لیے پرائیویٹ گھریلو فٹنس سیشنز۔"}
                  </p>
                </div>

                {/* 3 Pillar Feature Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:border-[#D4AF37]/40 transition-colors">
                    <div className="flex items-center gap-2 font-heading font-bold text-sm text-[#D4AF37] mb-1">
                      <Activity className="w-4 h-4" />
                      <span>{language === "en" ? "Home Physio" : "گھریلو فزیوتھراپی"}</span>
                    </div>
                    <p className="text-xs text-white/75">
                      {language === "en" ? "Hospital-standard care at home with medical equipment" : "گھر پر ہسپتال کے معیار کا مکمل علاج"}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:border-[#D4AF37]/40 transition-colors">
                    <div className="flex items-center gap-2 font-heading font-bold text-sm text-[#D4AF37] mb-1">
                      <Dumbbell className="w-4 h-4" />
                      <span>{language === "en" ? "Women's Fitness" : "خواتین فٹنس"}</span>
                    </div>
                    <p className="text-xs text-white/75">
                      {language === "en" ? "Private 1-on-1 and small group training at home" : "خواتین کے لیے محفوظ ذاتی سیشنز"}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:border-[#D4AF37]/40 transition-colors">
                    <div className="flex items-center gap-2 font-heading font-bold text-sm text-[#D4AF37] mb-1">
                      <Stethoscope className="w-4 h-4" />
                      <span>{language === "en" ? "Hospital Trained" : "ہسپتال تجربہ"}</span>
                    </div>
                    <p className="text-xs text-white/75">
                      {language === "en" ? "Ex-Shifa International & PAF Hospital Islamabad" : "شفا انٹرنیشنل اور پی اے ایف ہسپتال"}
                    </p>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openDrModal("overview");
                    }}
                    className="py-3.5 px-6 rounded-2xl bg-[#D4AF37] hover:bg-[#c49f2e] text-[#071F17] font-heading font-bold text-sm transition-all duration-300 shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer group/action"
                  >
                    <span>{language === "en" ? "View Full Profile" : "مکمل پروفائل دیکھیں"}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/action:translate-x-1 group-hover/action:-translate-y-1 transition-transform" />
                  </button>

                  {/* Glossy Rounded Charges & Packages Button with Animated Line Sheen */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openDrModal("pricing");
                    }}
                    className="relative group/pkg py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#0F3D2E] via-[#165642] to-[#0F3D2E] text-[#D4AF37] border-2 border-[#D4AF37] font-heading font-bold text-sm shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
                  >
                    {/* Glossy sweeping light beam */}
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-shimmer-sweep" />
                    
                    <span className="relative z-10">{language === "en" ? "Charges & Packages" : "پیکیجز اور فیس"}</span>
                    <span className="relative z-10 px-2 py-0.5 rounded-full bg-[#D4AF37] text-[#071F17] text-[11px] font-extrabold uppercase">
                      15% Off
                    </span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenConsultation("Dr. Hadiqa Shahroom - Homecare & Physiotherapy");
                    }}
                    className="py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>{language === "en" ? "Book Direct Visit" : "ہوم وزٹ بک کریں"}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* DR. HADIQA DETAILED POPUP MODAL */}
      <DrHadiqaModal
        isOpen={isDrModalOpen}
        initialTab={drModalTab}
        onClose={() => setIsDrModalOpen(false)}
        onBookSession={(serviceName) => {
          setIsDrModalOpen(false);
          onOpenConsultation(serviceName);
        }}
      />
    </section>
  );
}


