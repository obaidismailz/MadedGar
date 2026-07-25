"use client";

import { useState } from "react";
import { Check, Sparkles, ShieldCheck, Zap, Crown, ArrowRight } from "lucide-react";

interface CarePlanPricingProps {
  onOpenConsultation: () => void;
}

export default function CarePlanPricing({ onOpenConsultation }: CarePlanPricingProps) {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Companion Care",
      tagline: "Essential Support & Errands",
      monthlyPrice: "$149",
      annualPrice: "$119",
      period: "/month",
      desc: "Ideal for independent parents who need routine errand support, bill management, and wellness checks.",
      features: [
        "24/7 Emergency Helpline Dispatch",
        "Bi-weekly In-Person Concierge Visit",
        "Prescription & Grocery Delivery",
        "Utility Bill Payment Handling",
        "Monthly WhatsApp Summary Report",
      ],
      cta: "Select Companion Plan",
      highlighted: false,
      icon: ShieldCheck,
    },
    {
      name: "Mohafiz Care",
      tagline: "Complete Medical & VIP Concierge",
      monthlyPrice: "$299",
      annualPrice: "$239",
      period: "/month",
      desc: "Our most popular comprehensive package. Full medical coordination, accompanied doctor visits, and property checks.",
      features: [
        "Everything in Companion Plan",
        "24/7 Priority Emergency & Ambulance Escort",
        "Accompanied Doctor & Hospital Visits",
        "Weekly In-Person Wellness & Health Vitals Check",
        "Property Maintenance & Worker Supervision",
        "Instant Audio/Video WhatsApp Family Logs",
        "Dedicated Personal Care Manager",
      ],
      cta: "Select Mohafiz Plan",
      highlighted: true,
      popularBadge: "Most Popular Overseas Choice",
      icon: Zap,
    },
    {
      name: "Royal Concierge",
      tagline: "Bespoke VIP & 24/7 Nurse Placement",
      monthlyPrice: "$599",
      annualPrice: "$479",
      period: "/month",
      desc: "For parents requiring continuous specialized medical attention, full-time nurse placement, or multi-property management.",
      features: [
        "Everything in Mohafiz Plan",
        "Full-time or Night Nurse Placement Coordination",
        "Unlimited Accompanied Medical Appointments",
        "Multi-Property Security & Tenant Management",
        "Dedicated Senior Executive Concierge",
        "Quarterly Specialist Physician Consultations",
      ],
      cta: "Contact VIP Desk",
      highlighted: false,
      icon: Crown,
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
            <span>Transparent Luxury Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#161616] tracking-tight">
            Invest In Total Peace Of Mind
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#777777] font-body">
            No hidden charges. Fully audited billing backed by secure banking escrow.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-white border border-[#0F3D2E]/15 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                !annual ? "bg-[#0F3D2E] text-white shadow-md" : "text-[#777777] hover:text-[#161616]"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                annual ? "bg-[#0F3D2E] text-white shadow-md" : "text-[#777777] hover:text-[#161616]"
              }`}
            >
              <span>Annual Plan</span>
              <span className="px-2 py-0.5 rounded-full bg-[#D4AF37] text-[#071F17] text-[10px] font-bold">
                Save 20%
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
                className={`relative rounded-[36px] p-8 sm:p-10 transition-all duration-500 flex flex-col justify-between ${
                  plan.highlighted
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
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      plan.highlighted ? "bg-[#D4AF37] text-[#071F17]" : "bg-[#0F3D2E]/10 text-[#0F3D2E]"
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
                      Included Privileges:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm font-body">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-[#D4AF37]" : "text-[#0F3D2E]"}`} />
                        <span className={plan.highlighted ? "text-white/90" : "text-[#161616]"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={onOpenConsultation}
                  className={`w-full py-4 px-6 rounded-2xl font-heading font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group ${
                    plan.highlighted
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
        </div>

      </div>
    </section>
  );
}
