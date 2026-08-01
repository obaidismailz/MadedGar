"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Play, Sparkles, Heart, ShieldCheck, Eye, MessageSquare, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExplainerVideoProps {
  onOpenConsultation: (planOrService?: string) => void;
}

export default function ExplainerVideo({ onOpenConsultation }: ExplainerVideoProps) {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const isUrdu = language === "ur";

  const content = {
    badge: isUrdu ? "ویڈیو گائیڈ" : "Watch Explainer",
    title: isUrdu ? "مددگار سروسز کو عملی شکل میں دیکھیں" : "See MadedGar In Action",
    description: isUrdu
      ? "ہماری ٹیم پاکستان بھر میں مقیم آپ کے والدین، زوجہ، بچوں اور خاندان کے دیگر پیاروں کی خدمت اور دیکھ بھال کا فریضہ کس طرح انجام دیتی ہے؟ اس معلوماتی ویڈیو میں مددگار کا لائیو کام دیکھیں۔"
      : "Watch how our dedicated team operates on the ground in Pakistan to support your parents, wife, children, and extended family, keeping you informed with absolute transparency.",
    cta: isUrdu ? "مفت مشاورت بک کریں" : "Book a Free Consultation",
    videoDuration: isUrdu ? "رہنما ویڈیو • 2 منٹ" : "Explainer Video • 2 Mins",
    features: isUrdu
      ? [
          {
            icon: ShieldCheck,
            title: "لائیو واٹس ایپ رپورٹس",
            desc: "ہر سرگرمی، ہسپتال کے وزٹ یا گھریلو مدد کے فوراً بعد تصویری ثبوت اور تفصیلی اپ ڈیٹس براہ راست آپ کو موصول ہوتی ہے۔",
          },
          {
            icon: Heart,
            title: "وقف مددگار آفیسرز",
            desc: "پاکستان میں آپ کے خاندان کے لیے ایک مخصوص کیئر اسسٹنٹ جو ان کے ساتھ ہسپتال اور ادویات کی ترسیل کے وقت موجود رہتا ہے۔",
          },
          {
            icon: Eye,
            title: "24/7 ہنگامی معاونت",
            desc: "ملک کے بڑے شہروں میں ہماری الرٹ ٹیم اور ایمبولینس کوآرڈینیشن کسی بھی ہنگامی ضرورت کے لیے ہمہ وقت تیار ہے۔",
          },
          {
            icon: MessageSquare,
            title: "خاندانی خلوص اور احترام",
            desc: "ہم سروسز سے بڑھ کر آپ کے پیاروں کا خیال بالکل اپنے خاندان کے بزرگوں اور بچوں کی طرح خلوصِ دل سے رکھتے ہیں۔",
          },
        ]
      : [
          {
            icon: ShieldCheck,
            title: "Real-Time WhatsApp Logs",
            desc: "Receive instant updates with photo confirmations and detailed reports directly after every caregiver visit or interaction.",
          },
          {
            icon: Heart,
            title: "Dedicated Care Managers",
            desc: "A single, background-checked point of contact in Pakistan who handles doctor consultations, prescriptions, and home support.",
          },
          {
            icon: Eye,
            title: "24/7 Emergency Dispatch",
            desc: "Local operational command centers in major Pakistani cities ready for swift coordination and medical emergency response.",
          },
          {
            icon: MessageSquare,
            title: "Dignity & Unconditional Care",
            desc: "We treat your parents, spouse, and children with the highest standards of hospitality, cultural honor, and warmth.",
          },
        ],
  };

  return (
    <section className="py-24 bg-[#071F17] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F3D2E]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0F3D2E]/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Rich Text Content (Takes 7 columns for a wide, informative text area) */}
          <div 
            className={`lg:col-span-7 flex flex-col justify-center ${isUrdu ? "text-right" : "text-left"}`}
            dir={isUrdu ? "rtl" : "ltr"}
          >
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-6 border border-[#D4AF37]/30 self-start ${isUrdu ? "ml-auto mr-0" : ""}`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{content.badge}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight mb-6 leading-tight">
              {content.title}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/70 font-body font-light leading-relaxed mb-10 max-w-2xl">
              {content.description}
            </p>

            {/* Grid of Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {content.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0F3D2E] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-heading font-semibold text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-body font-light">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Button */}
            <div className={`${isUrdu ? "text-right" : "text-left"}`}>
              <button
                onClick={() => onOpenConsultation("Explainer Video Integration")}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#071F17] rounded-full text-sm font-semibold hover:bg-[#E5C358] active:scale-95 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
              >
                <span>{content.cta}</span>
                {isUrdu ? (
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Premium Small Video Embed (Takes 5 columns for right side small layout) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-[480px] aspect-video sm:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-[24px] sm:rounded-[36px] overflow-hidden border-2 border-[#D4AF37]/30 bg-[#0D2C22] shadow-2xl relative group">
              <AnimatePresence mode="wait">
                {!isPlaying ? (
                  <motion.div
                    key="thumbnail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full cursor-pointer flex flex-col justify-between p-6 z-10"
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* Background cover image with hover scale */}
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                      <img
                        src="https://img.youtube.com/vi/BxuKtJ1Cf4I/hqdefault.jpg"
                        alt="Madedgar Care Explainer Video Thumbnail"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 filter brightness-95 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071F17] via-transparent to-black/40" />
                    </div>

                    {/* Badge top-left */}
                    <div className="relative z-10 self-start">
                      <span className="glass-card-dark px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30">
                        {content.videoDuration}
                      </span>
                    </div>

                    {/* Central Pulsing Play Button */}
                    <div className="relative z-10 flex items-center justify-center self-center my-auto">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D4AF37] text-[#071F17] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/30 transition-all duration-300 group-hover:scale-110 relative">
                        <div className="absolute inset-0 rounded-full bg-[#D4AF37] opacity-40 animate-ping group-hover:animate-none" />
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
                      </div>
                    </div>

                    {/* Explainer video title bottom */}
                    <div className="relative z-10 text-center sm:text-left">
                      <p className="text-white/60 text-xs tracking-wider uppercase mb-1 font-body">Madedgar</p>
                      <h3 className="text-white font-heading font-bold text-lg sm:text-xl">
                        {isUrdu ? "مددگار کا طریقہ کار" : "How MadedGar Works"}
                      </h3>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="player"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full z-20"
                  >
                    <iframe
                      src="https://www.youtube.com/embed/BxuKtJ1Cf4I?autoplay=1&rel=0"
                      title="MadedGar Explainer Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
