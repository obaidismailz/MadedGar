"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, Calendar, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCareNeeds?: string;
  customPlanDetails?: {
    duration?: string;
    features?: string[];
  };
}

export default function ConsultationModal({ isOpen, onClose, initialCareNeeds, customPlanDetails }: ConsultationModalProps) {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "Islamabad",
    careNeeds: "Companion Care",
  });

  useEffect(() => {
    if (isOpen && initialCareNeeds) {
      const lower = initialCareNeeds.toLowerCase();
      if (lower.includes("mohafiz") || lower.includes("محافظ")) {
        setFormData((prev) => ({ ...prev, careNeeds: "Mohafiz Care" }));
      } else if (lower.includes("custom") || lower.includes("کسٹم")) {
        setFormData((prev) => ({ ...prev, careNeeds: "Custom Care" }));
      } else {
        setFormData((prev) => ({ ...prev, careNeeds: "Companion Care" }));
      }
    }
  }, [isOpen, initialCareNeeds]);

  // Prevent background website scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");

      return () => {
        document.body.style.overflow = originalOverflow;
        document.documentElement.classList.remove("lenis-stopped");
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0F3D2E", "#D4AF37", "#1F6B4F"],
    });

    let message = `Hello Amin, I would like to book a free consultation for MadedGar care services.\n\n`;
    message += `*Client Contact Details:*\n`;
    message += `• Full Name: ${formData.name}\n`;
    message += `• WhatsApp / Phone: ${formData.phone}\n`;
    if (formData.email) message += `• Email: ${formData.email}\n`;
    message += `• Location in Pakistan: ${formData.location}\n\n`;

    message += `*Selected Care Plan:*\n`;
    message += `• Plan: ${formData.careNeeds}\n`;

    if (formData.careNeeds === "Custom Care") {
      if (customPlanDetails?.duration) {
        message += `• Shift Duration: ${customPlanDetails.duration}\n`;
      }
      if (customPlanDetails?.features && customPlanDetails.features.length > 0) {
        message += `• Selected Privileges:\n`;
        customPlanDetails.features.forEach((feat) => {
          message += `   - ${feat}\n`;
        });
      }
    }

    const whatsappUrl = `https://wa.me/447795109561?text=${encodeURIComponent(message)}`;
    setWhatsappLink(whatsappUrl);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      data-lenis-prevent="true"
      data-lenis-prevent-wheel="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
    >
      <div
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        className="relative w-full max-w-xl bg-[#FCFAF7] rounded-3xl shadow-2xl border border-[#0F3D2E]/15 overflow-hidden overscroll-contain"
      >
        {/* Header decoration */}
        <div className="bg-[#0F3D2E] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{language === "en" ? "Private Concierge Care" : "خصوصی فیملی کیئر کانسیئرج"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold tracking-tight text-white">
            {language === "en" ? "Schedule Private Consultation" : "مشاورت کا وقت طے کریں"}
          </h2>
          <p className="text-white/80 text-sm mt-1 font-body">
            {language === "en"
              ? "Connect directly with a dedicated MadedGar Care Advisor for your family back home."
              : "پاکستان میں اپنے خاندان کے لیے مددگار فیملی کیئر ایڈوائزر سے براہ راست رابطہ کریں۔"}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#0F3D2E]/10 rounded-full flex items-center justify-center mx-auto text-[#0F3D2E]">
                <CheckCircle2 className="w-10 h-10 text-[#0F3D2E]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#0F3D2E]">
                {language === "en" ? "Consultation Request Received" : "درخواست وصول کر لی گئی ہے"}
              </h3>
              <p className="text-[#161616]/75 max-w-md mx-auto text-sm leading-relaxed font-body">
                {language === "en" ? (
                  <>
                    Thank you, <span className="font-semibold text-[#0F3D2E]">{formData.name}</span>. We are opening WhatsApp to connect you directly with <span className="font-bold text-[#D4AF37]">Amin</span>.
                  </>
                ) : (
                  <>
                    شکریہ، <span className="font-semibold text-[#0F3D2E]">{formData.name}</span>۔ آپ کو براہ راست <span className="font-bold text-[#D4AF37]">امین</span> سے جوڑنے کے لیے واٹس ایپ کھولا جا رہا ہے۔
                  </>
                )}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={whatsappLink || "https://wa.me/447795109561"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm transition-colors shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{language === "en" ? "Open WhatsApp Directly" : "براہ راست واٹس ایپ کھولیں"}</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0F3D2E] text-white font-semibold text-sm hover:bg-[#165642] transition-colors shadow-lg shadow-[#0F3D2E]/20 cursor-pointer"
                >
                  {language === "en" ? "Return to Website" : "ویب سائٹ پر واپس جائیں"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#161616]/80 uppercase tracking-wider mb-1.5 font-heading">
                  {language === "en" ? "Your Full Name" : "آپ کا پورا نام"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === "en" ? "e.g. Dr. Salman Khan" : "مثال: ڈاکٹر سلمان خان"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#0F3D2E]/20 bg-white text-[#161616] placeholder:text-[#777777] focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] transition font-body"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#161616]/80 uppercase tracking-wider mb-1.5 font-heading">
                    {language === "en" ? "WhatsApp Number" : "واٹس ایپ نمبر"}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7123 456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0F3D2E]/20 bg-white text-[#161616] placeholder:text-[#777777] focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] transition font-body"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#161616]/80 uppercase tracking-wider mb-1.5 font-heading">
                    {language === "en" ? "Email Address" : "ای میل ایڈریس"}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="salman@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0F3D2E]/20 bg-white text-[#161616] placeholder:text-[#777777] focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] transition font-body"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#161616]/80 uppercase tracking-wider mb-1.5 font-heading">
                    {language === "en" ? "Parents' Location in Pakistan" : "خاندان کی پاکستان میں لوکیشن"}
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0F3D2E]/20 bg-white text-[#161616] focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] transition font-body"
                  >
                    <option value="Islamabad">{language === "en" ? "Islamabad / Rawalpindi" : "اسلام آباد / راولپنڈی"}</option>
                    <option value="Lahore">{language === "en" ? "Lahore" : "لاہور"}</option>
                    <option value="Karachi">{language === "en" ? "Karachi" : "کراچی"}</option>
                    <option value="Peshawar">{language === "en" ? "Peshawar / KPK" : "پشاور / خیبر پختونخوا"}</option>
                    <option value="Faisalabad">{language === "en" ? "Faisalabad / Multan" : "فیصل آباد / ملتان"}</option>
                    <option value="Other">{language === "en" ? "Other City in Pakistan" : "پاکستان کا کوئی دوسرا شہر"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#161616]/80 uppercase tracking-wider mb-1.5 font-heading">
                    {language === "en" ? "Primary Service Needed" : "بنیادی ضرورت"}
                  </label>
                  <select
                    value={formData.careNeeds}
                    onChange={(e) => setFormData({ ...formData, careNeeds: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0F3D2E]/20 bg-white text-[#161616] focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] transition font-body"
                  >
                    <option value="Companion Care">{language === "en" ? "Companion Care Plan" : "کمپینین کیئر پلان"}</option>
                    <option value="Mohafiz Care">{language === "en" ? "Mohafiz Care Plan" : "محافظ کیئر پلان"}</option>
                    <option value="Custom Care">{language === "en" ? "Custom Care Plan" : "کسٹم کیئر پلان"}</option>
                  </select>
                </div>
              </div>

              {/* Custom Care Specifications summary when Custom Care is selected */}
              {formData.careNeeds === "Custom Care" && (
                <div className="mt-4 p-4 rounded-2xl bg-[#0F3D2E]/5 border border-[#0F3D2E]/20 text-xs text-[#071F17] space-y-2.5">
                  <div className="flex items-center justify-between font-heading font-bold text-[#0F3D2E] pb-2 border-b border-[#0F3D2E]/15">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{language === "en" ? "Custom Package Specifications:" : "کسٹم پیکیج کی تفصیلات:"}</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0F3D2E] text-white text-[11px] font-semibold">
                      {customPlanDetails?.duration || (language === "en" ? "Single Visit" : "ایک دورہ")}
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-[#0F3D2E] block mb-1.5">
                      {language === "en" ? "Selected Privileges & Services:" : "منتخب کردہ سہولیات:"}
                    </span>
                    {customPlanDetails?.features && customPlanDetails.features.length > 0 ? (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-[#161616]/85">
                        {customPlanDetails.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="text-[#0F3D2E] font-bold">✓</span>
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[11px] text-[#777777] italic">
                        {language === "en"
                          ? "Default Custom Care Privileges Selected"
                          : "بنیادی کسٹم سہولیات منتخب ہیں"}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0F3D2E] to-[#1F6B4F] text-white font-semibold text-base shadow-lg shadow-[#0F3D2E]/30 hover:opacity-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-[#D4AF37]" />
                  <span>{language === "en" ? "Book Free Consultation Now" : "ابھی مشورے کا وقت لیں"}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#777777] pt-2 font-body">
                <HeartHandshake className="w-4 h-4 text-[#0F3D2E]" />
                <span>{language === "en" ? "100% Confidential • Dedicated Family Concierge" : "100٪ خفیہ اور محفوظ • وقف فیملی کیئر"}</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
