"use client";

import Image from "next/image";
import { ArrowUpRight, MessageCircle, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CallToActionProps {
  onOpenConsultation: (planOrService?: string) => void;
}

export default function CallToAction({ onOpenConsultation }: CallToActionProps) {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-[#FCFAF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Large Rounded CTA Container */}
        <div className="relative rounded-[48px] bg-[#071F17] text-white p-10 sm:p-16 lg:p-20 overflow-hidden shadow-2xl border border-[#D4AF37]/30">

          {/* Background Warm Family Photo with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop"
              alt="Elderly Pakistani family smiling warmly together"
              fill
              className="object-cover object-center opacity-25 filter contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071F17] via-[#071F17]/90 to-[#0F3D2E]/80" />
          </div>

          {/* Radial Light Glow */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none" />

          {/* CTA Content */}
          <div className="relative z-10 max-w-3xl">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-6 border border-[#D4AF37]/30">
              <Heart className="w-4 h-4 text-[#D4AF37]" />
              <span>{language === "en" ? "Dedicated Family Concierge" : "وقف فیملی کیئر سروسز"}</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-heading font-bold text-white tracking-tight leading-[1.15]">
              {language === "en" ? (
                <>
                  Distance Shouldn't <br />
                  <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent">
                    Stop You From Caring.
                  </span>
                </>
              ) : (
                <>
                  فاصلہ آپ کو دیکھ بھال <br />
                  <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent">
                    کرنے سے نہ روکے۔
                  </span>
                </>
              )}
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-white/80 font-body font-light leading-relaxed">
              {language === "en"
                ? "Give your parents , wife , childrens and extended family the unconditional love, dignity, and emergency medical security they deserve in Pakistan. Schedule a private consultation with our Care Advisory team today."
                : "اپنے والدین، زوجہ، بچوں اور خاندان کے دیگر افراد کو وہ محبت، احترام اور ہنگامی طبی تحفظ فراہم کریں جس کے وہ مستحق ہیں۔ آج ہی ہماری فیملی کیئر ایڈوائزری ٹیم سے رابطہ کریں۔"}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-[#071F17] font-heading font-bold text-base shadow-xl shadow-[#D4AF37]/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{language === "en" ? "Schedule Consultation" : "مشاورت کا وقت لیں"}</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <a
                href="https://wa.me/447795109561"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-heading font-bold text-base border border-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>{language === "en" ? "Chat via WhatsApp" : "واٹس ایپ پر رابطہ کریں"}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
