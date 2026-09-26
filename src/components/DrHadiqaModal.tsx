"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Sparkles,
  Award,
  CheckCircle2,
  Calendar,
  Phone,
  ShieldCheck,
  Activity,
  Dumbbell,
  Heart,
  MapPin,
  Clock,
  Zap,
  Percent,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Stethoscope,
  ShoppingBag
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface DrHadiqaModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "overview" | "physio" | "fitness" | "pricing";
  onBookSession?: (serviceName: string) => void;
}

interface PackageOption {
  id: string;
  name: string;
  nameUrdu: string;
  category: "physio" | "fitness";
  unitPrice: number;
  originalPrice?: number;
  discount?: string;
  unitLabel: string;
  unitLabelUrdu: string;
  desc: string;
  descUrdu: string;
  badge?: string;
}

const PACKAGE_OPTIONS: PackageOption[] = [
  // Physiotherapy Packages
  {
    id: "physio_first_visit",
    name: "First Visit (Assessment + Treatment)",
    nameUrdu: "پہلا معائنہ (تشخیص + مکمل فزیوتھراپی)",
    category: "physio",
    unitPrice: 5500,
    unitLabel: "Session",
    unitLabelUrdu: "سیشن",
    desc: "Complete 40-min clinical diagnostic, physical examination & treatment",
    descUrdu: "40 منٹ کا مکمل تشخیصی معائنہ اور پہلا فزیوتھراپی سیشن",
    badge: "Recommended First",
  },
  {
    id: "physio_regular",
    name: "Regular Follow-up Session",
    nameUrdu: "معمول کا فالو اپ سیشن",
    category: "physio",
    unitPrice: 5000,
    unitLabel: "Session",
    unitLabelUrdu: "سیشن",
    desc: "40-min therapeutic exercises, pain relief & hands-on therapy",
    descUrdu: "40 منٹ کی رہنمائی میں ایکسرسائز اور درد سے نجات کی تھراپی",
  },
  {
    id: "physio_neuro",
    name: "Neuro / Post-Surgical Rehab Session",
    nameUrdu: "نیورو / پوسٹ سرجیکل بحالی سیشن",
    category: "physio",
    unitPrice: 5000,
    unitLabel: "Session",
    unitLabelUrdu: "سیشن",
    desc: "Specialized intensive rehabilitation for stroke, replacement & spinal surgery",
    descUrdu: "فالج، جوڑوں کے آپریشن یا ریڑھ کی ہڈی کی سرجری کے بعد خصوصی بحالی",
  },
  {
    id: "physio_weekly_3",
    name: "Weekly Plan (3 Sessions)",
    nameUrdu: "ہفتہ وار پیکیج (3 سیشنز)",
    category: "physio",
    unitPrice: 15000,
    unitLabel: "Week",
    unitLabelUrdu: "ہفتہ",
    desc: "3 targeted home sessions per week for steady recovery",
    descUrdu: "مستقل صحت یابی کے لیے ہفتے میں 3 تفصیلی وزٹس",
  },
  {
    id: "physio_weekly_5",
    name: "Weekly Plan (5 Sessions)",
    nameUrdu: "ہفتہ وار انٹینسیو پیکیج (5 سیشنز)",
    category: "physio",
    unitPrice: 25000,
    unitLabel: "Week",
    unitLabelUrdu: "ہفتہ",
    desc: "5 sessions per week for active daily rehabilitation",
    descUrdu: "روزمرہ ایکٹیو بحالی کے لیے ہفتے میں 5 وزٹس",
  },
  {
    id: "physio_monthly_12",
    name: "Monthly Plan (12 Sessions — 3/wk)",
    nameUrdu: "ماہانہ پیکیج (12 سیشنز — 3 فی ہفتہ)",
    category: "physio",
    unitPrice: 54000,
    originalPrice: 60000,
    discount: "10% OFF",
    unitLabel: "Month",
    unitLabelUrdu: "ماہ",
    desc: "Complete 1-month program (Save Rs 6,000)",
    descUrdu: "پورے ایک ماہ کا باقاعدہ پروگرام (6,000 روپے کی بچت)",
    badge: "10% OFF",
  },
  {
    id: "physio_monthly_20",
    name: "Monthly Intensive (20 Sessions — 5/wk)",
    nameUrdu: "ماہانہ انٹینسیو پیکیج (20 سیشنز — 5 فی ہفتہ)",
    category: "physio",
    unitPrice: 85000,
    originalPrice: 100000,
    discount: "15% OFF",
    unitLabel: "Month",
    unitLabelUrdu: "ماہ",
    desc: "Maximum progress program (Save Rs 15,000)",
    descUrdu: "تیز ترین نتائج کے لیے جامع پروگرام (15,000 روپے کی بچت)",
    badge: "Best Value • 15% OFF",
  },

  // Fitness Packages
  {
    id: "fitness_single_session",
    name: "Single Person — Per Session",
    nameUrdu: "اکیلی خاتون — فی سیشن",
    category: "fitness",
    unitPrice: 3000,
    unitLabel: "Session",
    unitLabelUrdu: "سیشن",
    desc: "60-min 1-on-1 private home workout with DPT trainer",
    descUrdu: "60 منٹ کا مکمل پرائیویٹ گھریلو فٹنس سیشن",
  },
  {
    id: "fitness_single_week",
    name: "Single Person — Weekly Plan (3 Sessions)",
    nameUrdu: "اکیلی خاتون — ہفتہ وار پلان (3 سیشنز)",
    category: "fitness",
    unitPrice: 8000,
    unitLabel: "Week",
    unitLabelUrdu: "ہفتہ",
    desc: "3 personal sessions per week tailored for fitness & toning",
    descUrdu: "ہفتے میں 3 ذاتی فٹنس اور ٹوننگ سیشنز",
  },
  {
    id: "fitness_single_month",
    name: "Single Person — Monthly Plan (12 Sessions)",
    nameUrdu: "اکیلی خاتون — ماہانہ پلان (12 سیشنز)",
    category: "fitness",
    unitPrice: 30000,
    unitLabel: "Month",
    unitLabelUrdu: "ماہ",
    desc: "12 structured sessions per month with custom exercise & activity plan",
    descUrdu: "ماہانہ 12 سیشنز بمشول تفصیلی ایکٹیویٹی پلان",
    badge: "Most Popular",
  },
  {
    id: "fitness_group3_session",
    name: "Group of 3 Ladies — Per Session",
    nameUrdu: "3 خواتین کا گروپ — فی سیشن (فی کس)",
    category: "fitness",
    unitPrice: 1800,
    unitLabel: "Session/person",
    unitLabelUrdu: "سیشن/فی کس",
    desc: "Private group training at home (Rs 1,800 per person)",
    descUrdu: "گھر پر 3 خواتین کے گروپ کے لیے ذاتی ٹریننگ (1,800 روپے فی کس)",
  },
  {
    id: "fitness_group3_month",
    name: "Group of 3 Ladies — Monthly Plan (12 Sessions)",
    nameUrdu: "3 خواتین کا گروپ — ماہانہ پلان (12 سیشنز)",
    category: "fitness",
    unitPrice: 19000,
    unitLabel: "Month/person",
    unitLabelUrdu: "ماہ/فی کس",
    desc: "12 group sessions (Rs 19,000 per person for the entire month)",
    descUrdu: "ماہانہ 12 گروپ سیشنز (19,000 روپے فی کس ماہانہ)",
  },
  {
    id: "fitness_group5_session",
    name: "Group of 5 Ladies — Per Session",
    nameUrdu: "5 خواتین کا گروپ — فی سیشن (فی کس)",
    category: "fitness",
    unitPrice: 1400,
    unitLabel: "Session/person",
    unitLabelUrdu: "سیشن/فی کس",
    desc: "Private group training at home (Rs 1,400 per person)",
    descUrdu: "گھر پر 5 خواتین کے گروپ کے لیے ذاتی ٹریننگ (1,400 روپے فی کس)",
  },
  {
    id: "fitness_group5_month",
    name: "Group of 5 Ladies — Monthly Plan (12 Sessions)",
    nameUrdu: "5 خواتین کا گروپ — ماہانہ پلان (12 سیشنز)",
    category: "fitness",
    unitPrice: 15000,
    unitLabel: "Month/person",
    unitLabelUrdu: "ماہ/فی کس",
    desc: "12 group sessions (Rs 15,000 per person for the entire month)",
    descUrdu: "ماہانہ 12 گروپ سیشنز (15,000 روپے فی کس ماہانہ)",
  },
];

export default function DrHadiqaModal({
  isOpen,
  onClose,
  initialTab = "overview",
  onBookSession,
}: DrHadiqaModalProps) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"overview" | "physio" | "fitness" | "pricing">(initialTab);
  
  // Package Selector State
  const [pricingCategory, setPricingCategory] = useState<"all" | "physio" | "fitness">("all");
  const [selectedPackageId, setSelectedPackageId] = useState<string>("physio_first_visit");
  const [quantity, setQuantity] = useState<number>(1);

  // Sync initial tab whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Prevent background website scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.documentElement.classList.remove("lenis-stopped");
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedPkg = PACKAGE_OPTIONS.find((p) => p.id === selectedPackageId) || PACKAGE_OPTIONS[0];
  const totalPrice = selectedPkg.unitPrice * quantity;
  const totalOriginalPrice = selectedPkg.originalPrice ? selectedPkg.originalPrice * quantity : null;
  const totalSavings = totalOriginalPrice ? totalOriginalPrice - totalPrice : null;

  const handleIncrease = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const handleDecrease = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleSelectPackage = (pkgId: string) => {
    setSelectedPackageId(pkgId);
    setQuantity(1);
  };

  const whatsappBaseUrl = "https://wa.me/447795109561";

  const getWhatsAppBookingLink = () => {
    const pkgName = language === "en" ? selectedPkg.name : selectedPkg.nameUrdu;
    const categoryName = selectedPkg.category === "physio" ? "Home-Based Physiotherapy" : "Women's Home Fitness Training";
    const qtyText = `${quantity} ${selectedPkg.unitLabel}${quantity > 1 ? "s" : ""}`;

    let msg = `🌟 *Booking Request: Dr. Hadiqa Shahroom (DPT) Homecare*\n\n`;
    msg += `• *Service:* ${categoryName}\n`;
    msg += `• *Selected Package:* ${pkgName}\n`;
    msg += `• *Quantity:* ${qtyText}\n`;
    msg += `• *Calculated Fee:* Rs ${totalPrice.toLocaleString()}`;
    if (totalSavings && totalSavings > 0) {
      msg += ` (Includes Rs ${totalSavings.toLocaleString()} Package Discount)`;
    }
    msg += `\n• *Location:* Islamabad (Home Visit)\n\n`;
    msg += `Please confirm the earliest available schedule slot with Dr. Hadiqa.`;

    return `${whatsappBaseUrl}?text=${encodeURIComponent(msg)}`;
  };

  const filteredPackages = PACKAGE_OPTIONS.filter((p) => {
    if (pricingCategory === "all") return true;
    return p.category === pricingCategory;
  });

  return (
    <div
      data-lenis-prevent="true"
      data-lenis-prevent-wheel="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-hidden animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        className="relative w-full max-w-5xl bg-[#FCFAF7] rounded-[32px] sm:rounded-[40px] shadow-2xl border border-[#0F3D2E]/20 overflow-hidden my-auto max-h-[92vh] flex flex-col overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="relative bg-gradient-to-r from-[#071F17] via-[#0F3D2E] to-[#1F6B4F] text-white p-6 sm:p-8 shrink-0 overflow-hidden border-b border-[#D4AF37]/20">
          {/* Background Decorative Pattern */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-1/3 -bottom-10 w-48 h-48 bg-[#0F3D2E]/40 rounded-full blur-2xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 sm:top-7 sm:right-7 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10 pr-12">
            {/* Doctor Photo */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-xl shrink-0 bg-[#071F17]">
              <Image
                src="/DR.png"
                alt="Dr. Hadiqa Shahroom"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Profile Intro */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === "en" ? "Homecare Specialist Profile" : "ہوم کیئر اسپیشلسٹ پروفائل"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight">
                {language === "en" ? "Dr. Hadiqa Shahroom" : "ڈاکٹر حدیقہ شاہ روم"}
              </h2>
              <p className="text-[#D4AF37] font-heading font-medium text-sm sm:text-base mt-0.5">
                DPT | {language === "en" ? "Physiotherapist & Women's Fitness Trainer" : "ماہر فزیوتھراپسٹ اور ویمنز فٹنس ٹرینر"}
              </p>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-xs sm:text-sm text-white/80 font-body">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  Shifa International & PAF Hospital Trained
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  Islamabad, DHA & Bahria Town
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pt-6 mt-2 border-t border-white/15 no-scrollbar">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-semibold transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "overview"
                  ? "bg-[#D4AF37] text-[#071F17] shadow-lg shadow-[#D4AF37]/25 font-bold"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>{language === "en" ? "Overview & Bio" : "تعارف اور پروفائل"}</span>
            </button>
            <button
              onClick={() => setActiveTab("physio")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-semibold transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "physio"
                  ? "bg-[#D4AF37] text-[#071F17] shadow-lg shadow-[#D4AF37]/25 font-bold"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>{language === "en" ? "Home Physiotherapy" : "گھریلو فزیوتھراپی"}</span>
            </button>
            <button
              onClick={() => setActiveTab("fitness")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-semibold transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "fitness"
                  ? "bg-[#D4AF37] text-[#071F17] shadow-lg shadow-[#D4AF37]/25 font-bold"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>{language === "en" ? "Women's Fitness" : "خواتین فٹنس ٹریننگ"}</span>
            </button>

            {/* Glossy Rounded Charges & Packages Button */}
            <button
              onClick={() => setActiveTab("pricing")}
              className={`relative group/pkg px-4.5 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-1.5 overflow-hidden ${
                activeTab === "pricing"
                  ? "bg-gradient-to-r from-[#D4AF37] via-[#FFF3B0] to-[#D4AF37] text-[#071F17] shadow-[0_0_20px_rgba(212,175,55,0.6)] border border-white"
                  : "bg-gradient-to-r from-[#0F3D2E] to-[#1F6B4F] text-[#D4AF37] border border-[#D4AF37]/60 shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
              }`}
            >
              {/* Glossy animated light sweep across the button */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-shimmer-sweep" />

              <Percent className={`w-4 h-4 ${activeTab === "pricing" ? "text-[#071F17]" : "text-[#D4AF37]"}`} />
              <span className="relative z-10">{language === "en" ? "Charges & Packages" : "پیکیجز اور فیس"}</span>
              <span className={`relative z-10 px-1.5 py-0.2 rounded-full text-[10px] font-extrabold uppercase ${
                activeTab === "pricing" ? "bg-[#071F17] text-[#D4AF37]" : "bg-[#D4AF37] text-[#071F17]"
              }`}>
                Book Online
              </span>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body with native smooth scroll inside */}
        <div
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 font-body text-[#161616] overscroll-contain"
        >
          {/* TAB 1: OVERVIEW & BIO */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div>
                <div className="flex items-center gap-2 text-[#0F3D2E] font-heading font-bold text-xs uppercase tracking-widest mb-2">
                  <span className="w-6 h-[2px] bg-[#D4AF37]" />
                  <span>01 PROFILE & EXPERIENCE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F3D2E] mb-4">
                  {language === "en" ? "Hospital-Standard Physical Therapy, at Your Doorstep" : "ہسپتال کے معیار کی فزیوتھراپی، اب آپ کے گھر پر"}
                </h3>
                <p className="text-base text-[#161616]/80 leading-relaxed">
                  Dr. Hadiqa Shahroom is a qualified Doctor of Physical Therapy from Shifa Tameer-e-Millat University. She has clinical experience at two of Islamabad&apos;s leading hospitals, <span className="font-semibold text-[#0F3D2E]">Shifa International Hospital</span> and <span className="font-semibold text-[#0F3D2E]">PAF Hospital Islamabad</span>. There she treated patients recovering from surgery, injury, stroke, and chronic pain, as well as elderly patients working to stay mobile and independent.
                </p>
                <p className="text-base text-[#161616]/80 leading-relaxed mt-3">
                  She now brings the same hospital-standard care to patients at home. Home sessions save patients the stress of travel and waiting rooms, which matters most for elderly patients and anyone recovering from surgery. Each treatment plan is built around the patient&apos;s condition, home setting, and goals.
                </p>
                <p className="text-base text-[#161616]/80 leading-relaxed mt-3">
                  As a female therapist, Dr. Hadiqa also offers private personal fitness training for women — a comfortable, highly dignified option for women who prefer to train at home.
                </p>
              </div>

              {/* Qualifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm hover:border-[#D4AF37] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center font-bold mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-[#0F3D2E] text-base mb-1">Doctor of Physical Therapy</h4>
                  <p className="text-xs text-[#777777]">Shifa Tameer-e-Millat University</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm hover:border-[#D4AF37] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center font-bold mb-3">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-[#0F3D2E] text-base mb-1">Physiotherapist</h4>
                  <p className="text-xs text-[#777777]">Shifa International Hospital, Islamabad</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm hover:border-[#D4AF37] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#0F3D2E]/10 text-[#0F3D2E] flex items-center justify-center font-bold mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-[#0F3D2E] text-base mb-1">Physiotherapist</h4>
                  <p className="text-xs text-[#777777]">PAF Hospital Islamabad</p>
                </div>
              </div>

              {/* Why Choose Dr. Hadiqa */}
              <div>
                <h4 className="text-xl font-heading font-bold text-[#0F3D2E] mb-4">Why Choose Dr. Hadiqa</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#0F3D2E]/10">
                    <div className="w-9 h-9 rounded-xl bg-[#0F3D2E] text-[#D4AF37] flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-heading font-bold text-[#161616] text-sm">Hospital Trained</h5>
                      <p className="text-xs text-[#777777] mt-0.5">Clinical experience at Shifa International and PAF Hospital</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#0F3D2E]/10">
                    <div className="w-9 h-9 rounded-xl bg-[#0F3D2E] text-[#D4AF37] flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-heading font-bold text-[#161616] text-sm">Female Therapist & Trainer</h5>
                      <p className="text-xs text-[#777777] mt-0.5">A comfortable, respectful choice for women and elderly family members</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#0F3D2E]/10">
                    <div className="w-9 h-9 rounded-xl bg-[#0F3D2E] text-[#D4AF37] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-heading font-bold text-[#161616] text-sm">Care at Your Doorstep</h5>
                      <p className="text-xs text-[#777777] mt-0.5">Treatment at home with zero travel stress or hospital waiting</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#0F3D2E]/10">
                    <div className="w-9 h-9 rounded-xl bg-[#0F3D2E] text-[#D4AF37] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-heading font-bold text-[#161616] text-sm">Personalised Plans</h5>
                      <p className="text-xs text-[#777777] mt-0.5">Custom rehabilitation and training built around every patient</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Coverage Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0F3D2E]/5 to-[#D4AF37]/10 border border-[#0F3D2E]/15 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0F3D2E] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#0F3D2E] text-base">Service Coverage Area</h4>
                  <p className="text-xs sm:text-sm text-[#161616]/80 mt-0.5">
                    Home visits available across <span className="font-semibold text-[#0F3D2E]">all sectors of Islamabad</span>, including DHA, Bahria Town, and surrounding residential communities.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HOME PHYSIOTHERAPY */}
          {activeTab === "physio" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div>
                <div className="flex items-center gap-2 text-[#0F3D2E] font-heading font-bold text-xs uppercase tracking-widest mb-2">
                  <span className="w-6 h-[2px] bg-[#D4AF37]" />
                  <span>02 CLINICAL PHYSIOTHERAPY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F3D2E] mb-2">
                  Home-Based Physiotherapy Sessions
                </h3>
                <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                  Each <span className="font-semibold text-[#0F3D2E]">40-minute session</span> includes a clinical assessment, hands-on treatment, guided therapeutic exercises, and a customized home exercise plan the patient can follow between visits.
                </p>
              </div>

              {/* Conditions Treated Grid */}
              <div>
                <h4 className="text-lg font-heading font-bold text-[#0F3D2E] mb-4">Conditions Treated</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm">
                    <h5 className="font-heading font-bold text-[#0F3D2E] text-sm mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      Back, Neck & Joint Pain
                    </h5>
                    <p className="text-xs text-[#161616]/75">Lower back pain, sciatica, cervical pain, disc problems, stiffness</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm">
                    <h5 className="font-heading font-bold text-[#0F3D2E] text-sm mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      Orthopaedic Conditions
                    </h5>
                    <p className="text-xs text-[#161616]/75">Frozen shoulder, knee and hip osteoarthritis, sprains, muscle strains</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm">
                    <h5 className="font-heading font-bold text-[#0F3D2E] text-sm mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      Post-Surgical Rehabilitation
                    </h5>
                    <p className="text-xs text-[#161616]/75">Knee and hip replacement, fracture recovery, spinal surgery rehab</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm">
                    <h5 className="font-heading font-bold text-[#0F3D2E] text-sm mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      Neurological Rehabilitation
                    </h5>
                    <p className="text-xs text-[#161616]/75">Stroke recovery, Bell&apos;s palsy, Parkinson&apos;s disease, nerve injuries</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm">
                    <h5 className="font-heading font-bold text-[#0F3D2E] text-sm mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      Elderly Care & Mobility
                    </h5>
                    <p className="text-xs text-[#161616]/75">Mobility and balance training, fall prevention, weakness after illness</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm">
                    <h5 className="font-heading font-bold text-[#0F3D2E] text-sm mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      Sports & Posture Injuries
                    </h5>
                    <p className="text-xs text-[#161616]/75">Ligament tears, tendonitis, desk work posture correction and ergonomics</p>
                  </div>
                </div>
              </div>

              {/* Equipment Brought */}
              <div className="p-5 rounded-2xl bg-[#0F3D2E]/5 border border-[#0F3D2E]/15">
                <h4 className="font-heading font-bold text-[#0F3D2E] text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#D4AF37]" />
                  Medical Equipment Brought to Every Home Visit
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {["TENS Electrotherapy", "EMS Muscle Stimulation", "Therabands & Resistance Bands", "Medical Hot & Cold Packs", "Goniometer & Assessment Tools"].map((item, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 rounded-full bg-white border border-[#0F3D2E]/20 text-xs font-semibold text-[#0F3D2E] flex items-center gap-1.5 shadow-sm">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PHYSICAL FITNESS FOR WOMEN */}
          {activeTab === "fitness" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div>
                <div className="flex items-center gap-2 text-[#0F3D2E] font-heading font-bold text-xs uppercase tracking-widest mb-2">
                  <span className="w-6 h-[2px] bg-[#D4AF37]" />
                  <span>03 WOMEN&apos;S FITNESS & WELLNESS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F3D2E] mb-2">
                  Physical Fitness & Personal Training for Women
                </h3>
                <p className="text-sm sm:text-base text-[#161616]/80 leading-relaxed">
                  Private, personalised fitness sessions for women at home with a female, medically qualified trainer. Available one-to-one or in small private groups of 3 to 5 ladies.
                </p>
              </div>

              {/* Programs Offered */}
              <div>
                <h4 className="text-lg font-heading font-bold text-[#0F3D2E] mb-4">Specialized Programs</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm">
                    <h5 className="font-heading font-bold text-[#0F3D2E] text-sm mb-1">Weight Loss & Toning</h5>
                    <p className="text-xs text-[#161616]/75">Fat loss through structured calorie-burning workouts and activity guidance</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm">
                    <h5 className="font-heading font-bold text-[#0F3D2E] text-sm mb-1">Strength & Conditioning</h5>
                    <p className="text-xs text-[#161616]/75">Safe progressive resistance training to build muscle density and bone health</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm">
                    <h5 className="font-heading font-bold text-[#0F3D2E] text-sm mb-1">Endurance & Stamina</h5>
                    <p className="text-xs text-[#161616]/75">Cardiovascular energy conditioning for daily active lifestyle and vitality</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm">
                    <h5 className="font-heading font-bold text-[#0F3D2E] text-sm mb-1">Post-Pregnancy Fitness</h5>
                    <p className="text-xs text-[#161616]/75">Safe rehabilitation of pelvic floor, core strength, and postpartum fitness</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm">
                    <h5 className="font-heading font-bold text-[#0F3D2E] text-sm mb-1">Senior Female Fitness</h5>
                    <p className="text-xs text-[#161616]/75">Balance, joint mobility, flexibility, and muscle retention for mature adults</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm">
                    <h5 className="font-heading font-bold text-[#0F3D2E] text-sm mb-1">Posture Correction</h5>
                    <p className="text-xs text-[#161616]/75">Realigning rounded shoulders, forward head strain, and upper spine curvature</p>
                  </div>
                </div>
              </div>

              {/* Why Physio Trainer Benefit */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0F3D2E] to-[#1F6B4F] text-white">
                <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>The Clinical Advantage</span>
                </div>
                <h4 className="font-heading font-bold text-xl mb-2">Why Train with a Doctor of Physical Therapy?</h4>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-body">
                  Dr. Hadiqa understands biomechanics, movement dysfunctions, and injury prevention at a clinical level. Every workout is customized to be safe and effective — especially for women with previous knee pain, disc issues, slip disc history, or joint sensitivities.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: PRICING & INTERACTIVE PACKAGE SELECTOR */}
          {activeTab === "pricing" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              {/* Header Intro */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-[#0F3D2E] font-heading font-bold text-xs uppercase tracking-widest mb-1">
                    <span className="w-6 h-[2px] bg-[#D4AF37]" />
                    <span>04 INTERACTIVE PACKAGES & PRICING</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F3D2E]">
                    {language === "en" ? "Select Your Package & Quantity" : "اپنا پیکیج اور تعداد منتخب کریں"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#777777] mt-1">
                    {language === "en" 
                      ? "Choose a service, adjust quantity (+ / -), and send your booking directly to WhatsApp." 
                      : "پیکیج منتخب کریں، تعداد تبدیل کریں اور تمام تفصیلات واٹس ایپ پر بھیجیں۔"}
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-[#0F3D2E]/15 shadow-sm self-start">
                  <button
                    onClick={() => setPricingCategory("all")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                      pricingCategory === "all" ? "bg-[#0F3D2E] text-white shadow-sm" : "text-[#777777] hover:text-[#0F3D2E]"
                    }`}
                  >
                    {language === "en" ? "All Plans" : "تمام"}
                  </button>
                  <button
                    onClick={() => setPricingCategory("physio")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      pricingCategory === "physio" ? "bg-[#0F3D2E] text-white shadow-sm" : "text-[#777777] hover:text-[#0F3D2E]"
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>{language === "en" ? "Physiotherapy" : "فزیوتھراپی"}</span>
                  </button>
                  <button
                    onClick={() => setPricingCategory("fitness")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      pricingCategory === "fitness" ? "bg-[#0F3D2E] text-white shadow-sm" : "text-[#777777] hover:text-[#0F3D2E]"
                    }`}
                  >
                    <Dumbbell className="w-3.5 h-3.5" />
                    <span>{language === "en" ? "Women Fitness" : "فٹنس"}</span>
                  </button>
                </div>
              </div>

              {/* Package Cards List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {filteredPackages.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => handleSelectPackage(pkg.id)}
                      className={`relative p-4.5 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-white border-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.22)] ring-2 ring-[#D4AF37]/30 scale-[1.01]"
                          : "bg-white border-[#0F3D2E]/10 hover:border-[#0F3D2E]/30 hover:bg-[#FCFAF7] shadow-sm"
                      }`}
                    >
                      {/* Top Header of Card */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          {/* Radio / Selection Indicator */}
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 transition-all shrink-0 ${
                            isSelected ? "border-[#0F3D2E] bg-[#0F3D2E] text-[#D4AF37]" : "border-[#777777]/40 bg-white"
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0F3D2E]/70 block">
                              {pkg.category === "physio" ? "Physiotherapy" : "Women Fitness Trainer"}
                            </span>
                            <h4 className={`font-heading font-bold text-sm sm:text-base leading-snug ${isSelected ? "text-[#0F3D2E]" : "text-[#161616]"}`}>
                              {language === "en" ? pkg.name : pkg.nameUrdu}
                            </h4>
                          </div>
                        </div>

                        {/* Discount or Badges */}
                        {pkg.badge && (
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase shrink-0 ${
                            pkg.badge.includes("OFF") 
                              ? "bg-[#D4AF37] text-[#071F17] shadow-sm" 
                              : "bg-[#0F3D2E]/10 text-[#0F3D2E]"
                          }`}>
                            {pkg.badge}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#777777] mb-3 font-body">
                        {language === "en" ? pkg.desc : pkg.descUrdu}
                      </p>

                      {/* Pricing Row */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#0F3D2E]/10 mt-auto">
                        <span className="text-xs text-[#777777]">
                          Per {pkg.unitLabel}
                        </span>
                        <div className="flex items-baseline gap-2">
                          {pkg.originalPrice && (
                            <span className="line-through text-xs text-[#777777]">
                              Rs {pkg.originalPrice.toLocaleString()}
                            </span>
                          )}
                          <span className="font-heading font-bold text-base text-[#0F3D2E]">
                            Rs {pkg.unitPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* DYNAMIC CART & QUANTITY CALCULATOR BAR */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#071F17] via-[#0F3D2E] to-[#164837] text-white shadow-2xl border-2 border-[#D4AF37]/50 space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  
                  {/* Selected Package Details */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#071F17] text-[10px] font-extrabold uppercase">
                        Active Selection
                      </span>
                      <span className="text-xs text-white/75">
                        {selectedPkg.category === "physio" ? "Home Physiotherapy" : "Women Fitness Trainer"}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
                      {language === "en" ? selectedPkg.name : selectedPkg.nameUrdu}
                    </h4>
                    <p className="text-xs text-white/70">
                      Unit Price: Rs {selectedPkg.unitPrice.toLocaleString()} per {selectedPkg.unitLabel}
                    </p>
                  </div>

                  {/* Quantity Stepper [- 1 +] */}
                  <div className="flex items-center gap-3 bg-white/10 p-2 rounded-2xl border border-white/20 self-start lg:self-center">
                    <span className="text-xs font-semibold text-white/80 px-2">
                      {language === "en" ? "Quantity:" : "تعداد:"}
                    </span>
                    <button
                      onClick={handleDecrease}
                      disabled={quantity <= 1}
                      className="w-9 h-9 rounded-xl bg-white/15 hover:bg-white/25 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    
                    <span className="w-8 text-center font-heading font-bold text-lg text-[#D4AF37]">
                      {quantity}
                    </span>

                    <button
                      onClick={handleIncrease}
                      className="w-9 h-9 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2e] text-[#071F17] flex items-center justify-center font-bold transition-all cursor-pointer active:scale-95 shadow-md"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4 stroke-[3]" />
                    </button>
                  </div>

                  {/* Calculated Price Display */}
                  <div className="text-left lg:text-right">
                    <span className="text-xs text-white/75 block">
                      {language === "en" ? `Total for ${quantity} ${selectedPkg.unitLabel}${quantity > 1 ? "s" : ""}:` : `کل قیمت (${quantity} سیشن):`}
                    </span>
                    <div className="flex items-baseline lg:justify-end gap-2">
                      {totalOriginalPrice && (
                        <span className="line-through text-sm text-white/50">
                          Rs {totalOriginalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="font-heading font-bold text-2xl sm:text-3xl text-[#D4AF37]">
                        Rs {totalPrice.toLocaleString()}
                      </span>
                    </div>
                    {totalSavings && totalSavings > 0 && (
                      <span className="text-[11px] text-[#25D366] font-semibold block">
                        ✓ {language === "en" ? `You save Rs ${totalSavings.toLocaleString()}` : `آپ کی بچت: ${totalSavings.toLocaleString()} روپے`}
                      </span>
                    )}
                  </div>
                </div>

                {/* Direct Action Inside Pricing Box */}
                <div className="pt-2 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-white/75 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    {language === "en" ? "Zero booking fee • Pay after visit & treatment" : "کوئی ایڈوانس بکنگ فیس نہیں • مکمل اطمینان"}
                  </span>

                  <a
                    href={getWhatsAppBookingLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer group/send"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{language === "en" ? `Book ${quantity} ${selectedPkg.unitLabel}${quantity > 1 ? "s" : ""} on WhatsApp` : `یہ پیکیج واٹس ایپ پر بک کریں`}</span>
                    <ArrowRight className="w-4 h-4 group-send:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>

            </div>
          )}
        </div>

        {/* Global Footer Actions */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#0F3D2E]/15 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#777777] hidden sm:block">
            <span className="font-semibold text-[#0F3D2E]">Direct Coordinator:</span> Amin (+44 7795 109561) • Islamabad Home Visits
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={getWhatsAppBookingLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{language === "en" ? `Book ${selectedPkg.name} (Rs ${totalPrice.toLocaleString()})` : "واٹس ایپ پر بک کریں"}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                if (onBookSession) {
                  onBookSession(`Dr. Hadiqa Shahroom - ${selectedPkg.name} (${quantity} ${selectedPkg.unitLabel})`);
                }
              }}
              className="flex-1 sm:flex-initial py-3.5 px-6 rounded-2xl bg-[#0F3D2E] hover:bg-[#165642] text-white font-heading font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>{language === "en" ? "Schedule Consultation" : "مشاورت کا وقت طے کریں"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
