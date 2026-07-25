"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast is MadedGar's emergency response in Pakistan?",
      a: "Our emergency dispatch desk operates 24 hours a day, 365 days a year across Islamabad, Rawalpindi, Lahore, and Karachi. When an emergency call is received, an on-ground Concierge Officer and private ambulance are dispatched immediately while our medical team coordinates hospital admission.",
    },
    {
      q: "How do you vet your Care Managers and Concierge staff?",
      a: "Security and trust are non-negotiable. All staff members undergo 5-tier vetting including NADRA biometric verification, local police character clearance, criminal background checks, medical health screenings, and mandatory elder care ethics training.",
    },
    {
      q: "How do I receive updates while living abroad?",
      a: "You receive instant WhatsApp reports after every visit or errand. This includes photo verification, voice notes from your parents, audited expense receipts, and vital health readings (blood pressure, sugar levels) recorded by our concierge.",
    },
    {
      q: "How are financial payments and utility bills handled?",
      a: "We operate a transparent digital escrow account system. Funds sent for utility bills, medicines, or repairs are tracked line-by-line. You receive itemized digital invoices and original store receipts via WhatsApp before escrow funds are released.",
    },
    {
      q: "Which cities in Pakistan do you currently support?",
      a: "We actively provide full concierge and medical oversight in Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Multan, and Faisalabad. We also service surrounding suburban areas upon request.",
    },
    {
      q: "Can I customize a care plan for specific health conditions?",
      a: "Yes! During your initial consultation call, our Care Director designs a completely bespoke protocol based on your parents' specific medical history, dietary preferences, and routine medical visits.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FCFAF7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F3D2E]/10 text-[#0F3D2E] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#0F3D2E]/15">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#161616] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-[#777777] font-body">
            Everything you need to know about our luxury care concierge services for your family.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#0F3D2E] shadow-xl"
                    : "bg-white/60 border-[#0F3D2E]/10 hover:border-[#0F3D2E]/30"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <h3 className={`text-lg sm:text-xl font-heading font-bold transition-colors ${
                    isOpen ? "text-[#0F3D2E]" : "text-[#161616]"
                  }`}>
                    {faq.q}
                  </h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "bg-[#0F3D2E] text-[#D4AF37] rotate-180" : "bg-[#0F3D2E]/10 text-[#0F3D2E]"
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-8 pt-0 text-sm sm:text-base text-[#161616]/80 font-body leading-relaxed border-t border-[#0F3D2E]/10 mt-2">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
