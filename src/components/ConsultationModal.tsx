"use client";

import { useState } from "react";
import { X, CheckCircle2, Phone, Calendar, ShieldCheck, HeartHandshake } from "lucide-react";
import confetti from "canvas-confetti";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "Islamabad",
    careNeeds: "Emergency & Medical Oversight",
  });

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
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl bg-[#FCFAF7] rounded-3xl shadow-2xl border border-[#0F3D2E]/15 overflow-hidden">
        {/* Header decoration */}
        <div className="bg-[#0F3D2E] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> Private Concierge Care
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold tracking-tight text-white">
            Schedule Private Consultation
          </h2>
          <p className="text-white/80 text-sm mt-1 font-body">
            Connect directly with a dedicated MadedGar Care Advisor for your family back home.
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
                Consultation Request Received
              </h3>
              <p className="text-[#161616]/75 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <span className="font-semibold text-[#0F3D2E]">{formData.name}</span>. A senior MadedGar Care Advisor will contact you directly via WhatsApp & Email within <span className="font-bold text-[#D4AF37]">2 hours</span>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0F3D2E] text-white font-semibold text-sm hover:bg-[#165642] transition-colors shadow-lg shadow-[#0F3D2E]/20"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#161616]/80 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Salman Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#0F3D2E]/20 bg-white text-[#161616] placeholder:text-[#777777] focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#161616]/80 uppercase tracking-wider mb-1.5">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7123 456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0F3D2E]/20 bg-white text-[#161616] placeholder:text-[#777777] focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#161616]/80 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="salman@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0F3D2E]/20 bg-white text-[#161616] placeholder:text-[#777777] focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#161616]/80 uppercase tracking-wider mb-1.5">
                    Parents' Location in Pakistan
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0F3D2E]/20 bg-white text-[#161616] focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] transition"
                  >
                    <option value="Islamabad">Islamabad / Rawalpindi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Peshawar">Peshawar / KPK</option>
                    <option value="Faisalabad">Faisalabad / Multan</option>
                    <option value="Other">Other City in Pakistan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#161616]/80 uppercase tracking-wider mb-1.5">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.careNeeds}
                    onChange={(e) => setFormData({ ...formData, careNeeds: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0F3D2E]/20 bg-white text-[#161616] focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] transition"
                  >
                    <option value="Emergency & Medical Oversight">24/7 Medical & Emergency</option>
                    <option value="Errand & Daily Grocery Management">Errand & Doctor Visits</option>
                    <option value="Financial & Utility Bill Services">Financial & Escrow Management</option>
                    <option value="Supervisory & Property Checks">Property & Home Supervision</option>
                    <option value="All-Inclusive Concierge Care">Full Royal Concierge</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0F3D2E] to-[#1F6B4F] text-white font-semibold text-base shadow-lg shadow-[#0F3D2E]/30 hover:opacity-95 transition-all flex items-center justify-center gap-2 group"
                >
                  <Calendar className="w-5 h-5 text-[#D4AF37]" />
                  <span>Book Free Consultation Now</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#777777] pt-2">
                <HeartHandshake className="w-4 h-4 text-[#0F3D2E]" />
                <span>100% Confidential • Dedicated Family Concierge</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
