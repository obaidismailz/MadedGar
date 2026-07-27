"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Eye, Clock, Users, HeartHandshake, Sparkles, CheckCircle2, Stethoscope } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (cardsRef.current?.children) {
        gsap.fromTo(
          Array.from(cardsRef.current.children),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
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

  const storyCards = language === "en" ? [
    {
      icon: Eye,
      title: "Always Informed",
      desc: "Live WhatsApp summaries with photos, and visit reports sent directly to you after every caregiver interaction.",
      highlight: "Real-time Visibility",
    },
    {
      icon: Clock,
      title: "Always Available",
      desc: "24/7 dedicated dispatch team stationed locally in Islamabad, Lahore, Karachi , Peshawar , Multan , Bhawalpur and across the country for swift emergency response.",
      highlight: "365 Days Support",
    },
    {
      icon: Users,
      title: "Dedicated Care Madedgar (Care Assistant)",
      desc: "Single point of contact—a trained madedgar  officer will be on site who support and assist your loved ones.",
      highlight: "Personalized Concierge",
    },
    {
      icon: Stethoscope,
      title: "Health Care Assistant",
      desc: "We can arrange appointments with specialist doctors for your loved ones and arrange transport (pick and drop services).",
      highlight: "Healthcare Support",
    },
    {
      icon: HeartHandshake,
      title: "Peace of Mind",
      desc: "Sleep soundly in London, Dubai, or New York knowing your parents , wife , childrens and extended family  are looked after with dignity , love & respect.",
      highlight: "Unmatched Reliability",
    },
  ] : [
    {
      icon: Eye,
      title: "ہمیشہ باخبر",
      desc: "ہر سرگرمی کے بعد تصاویر اور لائیو واٹس ایپ رپورٹس براہ راست آپ کو بھیجی جاتی ہیں۔",
      highlight: "براہ راست رپورٹ",
    },
    {
      icon: Clock,
      title: "ہمیشہ تیار",
      desc: "اسلام آباد، لاہور، کراچی اور ملک بھر میں 24/7 ہنگامی ٹیم فوری مدد کے لیے دستیاب ہے۔",
      highlight: "ہر لمحہ مدد",
    },
    {
      icon: Users,
      title: "وقف مددگار (کیئر اسسٹنٹ)",
      desc: "ایک تربیت یافتہ کیئر افسر آپ کے پیاروں کی خدمت اور مدد کے لیے ہمیشہ موجود رہتا ہے۔",
      highlight: "خصوصی معاونت",
    },
    {
      icon: Stethoscope,
      title: "طبی معاونت",
      desc: "ڈاکٹرز کے اپائنٹمنٹس اور ان کے پاس لانے اور لے جانے (پک اینڈ ڈراپ) کی سہولت۔",
      highlight: "صحت کی دیکھ بھال",
    },
    {
      icon: HeartHandshake,
      title: "کامل تسلی",
      desc: "دنیا کے کسی بھی حصے میں اطمینان سے رہیں کہ آپ کے والدین اور اہل خانہ کا خیال محبت اور احترام سے رکھا جا رہا ہے۔",
      highlight: "بے مثال بھروسہ",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-[#FCFAF7] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F3D2E]/10 text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#0F3D2E]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{language === "en" ? "The MadedGar Commitment" : "مددگار کا عزم"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#161616] tracking-tight max-w-3xl">
            {language === "en"
              ? "Bridging the distance between your home abroad and family in Pakistan."
              : "دیارِ غیر میں آپ کی دوری اور پاکستان میں فیملی کے درمیان ایک مضبوط رشتہ۔"}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#777777] max-w-2xl font-body">
            {language === "en"
              ? "We built MadedGar to give overseas Pakistanis complete operational clarity and emotional reassurance, treating your parents , wife , childrens and extended family with the exact care we would give our own."
              : "ہم نے مددگار کو اوورسیز پاکستانیوں کے اطمینان اور سہولت کے لیے بنایا ہے، تاکہ آپ کے اہل خانہ کا خیال بالکل ویسے ہی رکھا جائے جیسے ہم اپنے پیاروں کا رکھتے ہیں۔"}
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Photo of old parents with luxury card frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] sm:h-[560px] w-full rounded-[36px] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/Oldwomen.png"
                alt="Elderly Pakistani woman smiling happily at home"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F17]/80 via-transparent to-transparent" />

              {/* Overlay Glass Badge */}
              {/* <div className="absolute bottom-6 left-6 right-6 glass-card-dark p-4 rounded-2xl border border-[#D4AF37]/30 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#071F17] flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm">Strict Vetting & Background Checks</div>
                  <div className="text-xs text-white/70">Police verified & medically trained concierges</div>
                </div>
              </div> */}
            </div>

            {/* Decorative background shape */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#D4AF37]/15 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Story & Staggered Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-[#0F3D2E]">
                {language === "en" ? "Why Overseas Pakistanis Rely On Us" : "اوورسیز پاکستانی ہم پر کیوں بھروسہ کرتے ہیں"}
              </h3>
              <p className="text-[#161616]/80 leading-relaxed font-body">
                {language === "en"
                  ? "Living thousands of miles away can make it difficult to manage your loved ones' everyday needs—from medical appointments and bill payments to daily grocery shopping, domestic challenges, home repairs, and other stressful emergencies. MadedGar serves as your trusted support system on the ground, providing reliable assistance, prompt action, and transparent updates, so you can stay connected with your family and enjoy peace of mind, no matter where you are."
                  : "اپنے پیاروں سے دور رہ کر ان کی روزمرہ کی ضروریات، جیسے کہ طبی اپائنٹمنٹس، بلوں کی ادائیگی، راشن کی خریداری اور گھر کے دیگر کاموں کو سنبھالنا مشکل ہو سکتا ہے۔ مددگار پاکستان میں آپ کی جگہ کام کرتا ہے اور آپ کو لمحہ بہ لمحہ اپ ڈیٹس دیتا ہے تاکہ آپ ہر وقت فیملی سے جڑے رہیں اور مکمل ذہنی سکون حاصل کریں۔"}
              </p>
            </div>

            {/* Staggered Story Cards */}
            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {storyCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl bg-white border border-[#0F3D2E]/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group hover:border-[#D4AF37] ${idx === storyCards.length - 1 && storyCards.length % 2 !== 0 ? "sm:col-span-2" : ""
                      }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/10 group-hover:bg-[#0F3D2E] text-[#0F3D2E] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#FCFAF7] text-[#0F3D2E] border border-[#0F3D2E]/10">
                        {card.highlight}
                      </span>
                    </div>

                    <h4 className="text-lg font-heading font-bold text-[#161616] group-hover:text-[#0F3D2E] transition-colors">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-[#777777] leading-relaxed font-body">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
