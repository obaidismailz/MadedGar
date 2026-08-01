"use client";

import { useState } from "react";
import { Check, Sparkles, ShieldCheck, Zap, Crown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CarePlanPricingProps {
  onOpenConsultation: (
    planName?: string,
    customDetails?: { duration: string; features: string[] }
  ) => void;
}

export default function CarePlanPricing({ onOpenConsultation }: CarePlanPricingProps) {
  const { language } = useLanguage();
  const [annual, setAnnual] = useState(true);
  const [selectedTime, setSelectedTime] = useState<"6h" | "12h">("6h");

  const getServices = () => {
    const is6h = selectedTime === "6h";
    if (language === "en") {
      return [
        {
          id: "with_car",
          text: "With Car (20km)",
          price: is6h ? 7000 : 14000,
        },
        {
          id: "with_bike",
          text: "With Bike (20km)",
          price: is6h ? 4000 : 7000,
        },
      ];
    } else {
      return [
        {
          id: "with_car",
          text: "گاڑی کے ساتھ (20 کلومیٹر)",
          price: is6h ? 7000 : 14000,
        },
        {
          id: "with_bike",
          text: "بائیک کے ساتھ (20 کلومیٹر)",
          price: is6h ? 4000 : 7000,
        },
      ];
    }
  };

  const [checkedFeatureIds, setCheckedFeatureIds] = useState<string[]>(
    ["with_car", "with_bike"]
  );

  const getCustomPrice = () => {
    const currentServices = getServices();
    const total = currentServices
      .filter((f) => checkedFeatureIds.includes(f.id))
      .reduce((sum, f) => sum + f.price, 0);

    return `PKR ${Math.round(total).toLocaleString()}`;
  };

  const plans = language === "en" ? [
    {
      name: "Companion Care",
      tagline: "Essential Support & Errands",
      monthlyPrice: "PKR 41,000",
      annualPrice: "PKR 32,800",
      period: "/month",
      desc: "Ideal for independent parents , wife , childrens and extended family  who need routine errand support, bill management, and wellness checks.",
      features: [
        "24/7 Emergency Helpline ",
        "Bi-weekly In-Person Concierge Visit",
        "Prescription & Grocery Delivery",
        "Utility Bill Payment Handling",
        "Monthly WhatsApp Summary Report",
      ],
      note: "This package doesn’t include facility of Car & transport.",
      cta: "Select Companion Plan",
      highlighted: false,
      icon: ShieldCheck,
    },
    {
      name: "Madedgar Care",
      tagline: "Complete Medical & VIP Concierge",
      monthlyPrice: "PKR 83,000",
      annualPrice: "PKR 66,400",
      period: "/month",
      desc: "Our most popular comprehensive package. Full medical coordination, accompanied doctor visits, and property checks.",
      features: [
        "Everything in Companion Plan",
        "Accompanied Doctor & Hospital Visits",
        "Twice a Week In-Person Wellness & Health Vitals Check",
        "Property Maintenance & Worker Supervision",
        "Instant Audio/Video WhatsApp Family Logs",
      ],
      note: "This package include facility of car & driver once a week only .",
      cta: "Select Mohafiz Plan",
      highlighted: true,
      popularBadge: "Most Popular Overseas Choice",
      icon: Zap,
    },
  ] : [
    {
      name: "کمپینین کیئر",
      tagline: "بنیادی دیکھ بھال اور راشن کی ترسیل",
      monthlyPrice: "PKR 41,000",
      annualPrice: "PKR 32,800",
      period: "/ماہ",
      desc: "ان والدین، زوجہ اور اہل خانہ کے لیے جو آزادانہ رہنا پسند کرتے ہیں لیکن انہیں روزمرہ کے کاموں میں مدد اور باقاعدہ خیریت معلوم کرنے کی ضرورت ہوتی ہے۔",
      features: [
        "24/7 ہنگامی ہیلپ لائن",
        "ماہ میں دو بار انفرادی ملاقات",
        "ادویات اور راشن کی ترسیل",
        "یوٹیلیٹی بلز کی ادائیگی کا انتظام",
        "ماہانہ واٹس ایپ خلاصہ رپورٹ",
      ],
      note: "اس پیکیج میں گاڑی اور ٹرانسپورٹ کی سہولت شامل نہیں ہے۔",
      cta: "کمپینین پلان منتخب کریں",
      highlighted: false,
      icon: ShieldCheck,
    },
    {
      name: "محافظ کیئر",
      tagline: "کامل طبی معاونت اور وی آئی پی کیئر",
      monthlyPrice: "PKR 83,000",
      annualPrice: "PKR 66,400",
      period: "/ماہ",
      desc: "ہمارا مقبول ترین پیکیج۔ مکمل طبی کوآرڈینیشن، ڈاکٹر کے اپائنٹمنٹس پر ہمراہی اور باقاعدہ پراپرٹی چیک۔",
      features: [
        "کمپینین کیئر کی تمام خصوصیات شامل ہیں",
        "ڈاکٹر اور ہسپتال کے دورے پر ہمراہی",
        "ہفتے میں دو بار انفرادی ملاقات اور نبض کی جانچ",
        "گھر کی دیکھ بھال اور عملے کی نگرانی",
        "تصویری اور ویڈیو خلاصہ رپورٹ بذریعہ واٹس ایپ",
      ],
      note: "اس پیکیج میں ہفتے میں صرف ایک بار گاڑی اور ڈرائیور کی سہولت شامل ہے۔",
      cta: "محافظ پلان منتخب کریں",
      highlighted: true,
      popularBadge: "اوورسیز پاکستانیوں کا سب سے مقبول انتخاب",
      icon: Zap,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-[#FCFAF7] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F3D2E]/10 text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#0F3D2E]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{language === "en" ? "Transparent Luxury Pricing" : "شفاف اور آسان قیمتیں"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#161616] tracking-tight">
            {language === "en" ? "Invest In Total Peace Of Mind" : "کامل تحفظ اور ذہنی سکون کے لیے سرمایہ کاری کریں"}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#777777] font-body">
            {language === "en"
              ? "No hidden charges. Fully audited billing backed by secure banking escrow."
              : "کوئی پوشیدہ چارجز نہیں ہیں۔ مکمل طور پر آڈٹ شدہ بینکنگ ایسکرو سپورٹ۔"}
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-white border border-[#0F3D2E]/15 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${!annual ? "bg-[#0F3D2E] text-white shadow-md" : "text-[#777777] hover:text-[#161616]"
                }`}
            >
              {language === "en" ? "Monthly Billing" : "ماہانہ ادائیگی"}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${annual ? "bg-[#0F3D2E] text-white shadow-md" : "text-[#777777] hover:text-[#161616]"
                }`}
            >
              <span>{language === "en" ? "Annual Plan" : "سالانہ پلان"}</span>
              <span className="px-2 py-0.5 rounded-full bg-[#D4AF37] text-[#071F17] text-[10px] font-bold">
                {language === "en" ? "Save 20%" : "20٪ بچت"}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-[36px] p-8 sm:p-10 transition-all duration-500 flex flex-col justify-between ${plan.highlighted
                  ? "bg-[#071F17] text-white border-2 border-[#D4AF37] shadow-2xl scale-105 z-10 gold-glow"
                  : "bg-white text-[#161616] border border-[#0F3D2E]/15 shadow-lg hover:shadow-xl hover:-translate-y-2"
                  }`}
              >
                {/* Popular Badge for Center Card */}
                {plan.popularBadge && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-[#071F17] text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#071F17]" />
                    <span>{plan.popularBadge}</span>
                  </div>
                )}

                <div>
                  {/* Card Title & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-heading font-bold ${plan.highlighted ? "text-white" : "text-[#0F3D2E]"}`}>
                        {plan.name}
                      </h3>
                      <p className={`text-xs font-medium mt-0.5 ${plan.highlighted ? "text-[#D4AF37]" : "text-[#777777]"}`}>
                        {plan.tagline}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${plan.highlighted ? "bg-[#D4AF37] text-[#071F17]" : "bg-[#0F3D2E]/10 text-[#0F3D2E]"
                      }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="my-6 flex items-baseline gap-1">
                    <span className="font-number font-bold text-4xl sm:text-5xl tracking-tight">
                      {annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className={`text-sm font-body ${plan.highlighted ? "text-white/70" : "text-[#777777]"}`}>
                      {plan.period}
                    </span>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-8 font-body ${plan.highlighted ? "text-white/80" : "text-[#161616]/75"}`}>
                    {plan.desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <div className={`text-xs uppercase font-bold tracking-wider ${plan.highlighted ? "text-[#D4AF37]" : "text-[#0F3D2E]"}`}>
                      {language === "en" ? "Included Privileges:" : "شامل سہولیات:"}
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm font-body">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-[#D4AF37]" : "text-[#0F3D2E]"}`} />
                        <span className={plan.highlighted ? "text-white/90" : "text-[#161616]"}>
                          {feat}
                        </span>
                      </div>
                    ))}

                    {plan.note && (
                      <div className={`mt-4 p-3.5 rounded-2xl border text-[11px] leading-relaxed font-body ${
                        plan.highlighted 
                          ? "bg-[#0F3D2E] border-[#D4AF37]/30 text-white/90" 
                          : "bg-[#FCFAF7] border-[#0F3D2E]/10 text-[#777777]"
                      }`}>
                        <span className="font-semibold text-[#D4AF37]">
                          {language === "en" ? "Note: " : "نوٹ: "}
                        </span>
                        {plan.note}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onOpenConsultation(plan.name)}
                  className={`w-full py-4 px-6 rounded-2xl font-heading font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group ${plan.highlighted
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-[#071F17] shadow-lg shadow-[#D4AF37]/20 hover:scale-105"
                    : "bg-[#0F3D2E] text-white hover:bg-[#165642]"
                    }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}

          {/* Third Card: Custom Package */}
          <div className="relative rounded-[36px] p-8 sm:p-10 transition-all duration-500 flex flex-col justify-between bg-white text-[#161616] border border-[#0F3D2E]/15 shadow-lg hover:shadow-xl hover:-translate-y-2">
            <div>
              {/* Card Title & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-[#0F3D2E]">
                    {language === "en" ? "Custom Care" : "کسٹم کیئر"}
                  </h3>
                  <p className="text-xs font-medium mt-0.5 text-[#777777]">
                    {language === "en" ? "Bespoke Plan Customizer" : "پلان کسٹمائزر"}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#0F3D2E]/10 text-[#0F3D2E]">
                  <Crown className="w-6 h-6" />
                </div>
              </div>

              {/* Price */}
              <div className="my-6 flex items-baseline gap-1">
                <span className="font-number font-bold text-4xl sm:text-5xl tracking-tight">
                  {getCustomPrice()}
                </span>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed mb-6 font-body text-[#161616]/75">
                {language === "en"
                  ? "Build your own plan by choosing your preferred shift duration and checking the privileges you need."
                  : "اپنی مرضی کا پلان بنانے کے لیے اپنی پسند کا دورانیہ منتخب کریں اور مطلوبہ سہولیات کو نشان زد کریں۔"}
              </p>

              {/* Duration options */}
              <div className="flex flex-col gap-2 mb-6">
                <div className="text-xs uppercase font-bold tracking-wider text-[#0F3D2E]">
                  {language === "en" ? "Visit Duration:" : "ملاقات کا دورانیہ:"}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "6h", label: language === "en" ? "6 Hours" : "6 گھنٹے" },
                    { id: "12h", label: language === "en" ? "12 Hours" : "12 گھنٹے" },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedTime(opt.id as any)}
                      className={`py-2 px-1 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${selectedTime === opt.id
                        ? "bg-[#0F3D2E] text-white border-[#0F3D2E]"
                        : "bg-[#0F3D2E]/5 text-[#0F3D2E] border-transparent hover:bg-[#0F3D2E]/10"
                        }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3.5 mb-8">
                <div className="text-xs uppercase font-bold tracking-wider text-[#0F3D2E]">
                  {language === "en" ? "Select Transport Options:" : "ٹرانسپورٹ سہولیات منتخب کریں:"}
                </div>
                <div className="space-y-3">
                  {getServices().map((feat) => {
                    const isChecked = checkedFeatureIds.includes(feat.id);
                    return (
                      <label
                        key={feat.id}
                        className="flex items-center justify-between text-xs sm:text-sm font-body cursor-pointer group/item select-none p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#0F3D2E]/20 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {
                              if (isChecked) {
                                setCheckedFeatureIds(checkedFeatureIds.filter((id) => id !== feat.id));
                              } else {
                                setCheckedFeatureIds([...checkedFeatureIds, feat.id]);
                              }
                            }}
                            className="sr-only"
                          />
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border transition-all shrink-0 ${isChecked
                              ? "bg-[#0F3D2E] border-[#0F3D2E] text-white"
                              : "bg-white border-gray-300 text-transparent group-hover/item:border-[#0F3D2E]"
                              }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className={`font-medium transition-colors leading-tight ${isChecked ? "text-[#161616]" : "text-[#777777]"}`}>
                            {feat.text}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-[#0F3D2E]">
                          PKR {feat.price.toLocaleString()}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Night Shift Note */}
              <div className="mb-6 p-3 rounded-xl bg-[#0F3D2E]/5 border border-[#0F3D2E]/10 flex items-start gap-2.5 text-xs text-[#0F3D2E] font-medium leading-snug">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  {language === "en"
                    ? "Note: From 8:00 PM to 8:00 AM price will be 1.5x."
                    : "نوٹ: رات 8:00 بجے سے صبح 8:00 بجے تک قیمت 1.5 گنا ہوگی۔"}
                </span>
              </div>
            </div>

            {/* Card Action */}
            <button
              onClick={() => {
                const getDurationLabel = () => {
                  if (selectedTime === "6h") return language === "en" ? "6 Hours" : "6 گھنٹے";
                  return language === "en" ? "12 Hours" : "12 گھنٹے";
                };

                const currentServices = getServices();
                const selectedFeatureTexts = currentServices
                  .filter((f) => checkedFeatureIds.includes(f.id))
                  .map((f) => `${f.text} (PKR ${f.price.toLocaleString()})`);

                onOpenConsultation("Custom Care", {
                  duration: getDurationLabel(),
                  features: selectedFeatureTexts,
                });
              }}
              className="w-full py-4 px-6 rounded-2xl font-heading font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group bg-[#0F3D2E] text-white hover:bg-[#165642] cursor-pointer"
            >
              <span>{language === "en" ? "Select Custom Plan" : "کسٹم پلان کا انتخاب کریں"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
