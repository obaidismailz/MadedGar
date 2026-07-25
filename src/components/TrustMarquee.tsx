"use client";

import { Stethoscope, Ambulance, UserCheck, Lock, MessageSquare, ShieldCheck, Home } from "lucide-react";

export default function TrustMarquee() {
  const marqueeItems = [
    { icon: Stethoscope, label: "Top Healthcare Partners" },
    { icon: Ambulance, label: "24/7 Emergency Dispatch" },
    { icon: UserCheck, label: "100% Verified Medical Staff" },
    { icon: Lock, label: "Secure Bank Escrow Payments" },
    { icon: MessageSquare, label: "Instant WhatsApp Photo/Video Updates" },
    { icon: ShieldCheck, label: "Supervised Home visits" },
    { icon: Home, label: "Property Guarding & Maintenance" },
  ];

  return (
    <div className="relative w-full bg-[#0F3D2E] py-5 border-y border-[#D4AF37]/20 overflow-hidden shadow-inner">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D2E] via-[#165642] to-[#0F3D2E] opacity-50" />

      {/* Infinite marquee ticker */}
      <div className="flex w-full overflow-hidden select-none">
        <div className="flex shrink-0 animate-marquee items-center justify-around gap-12 min-w-full">
          {marqueeItems.concat(marqueeItems).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 text-white/90 font-heading text-sm font-semibold tracking-wide hover:text-[#D4AF37] transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                  <Icon className="w-4 h-4" />
                </div>
                <span>{item.label}</span>
                <span className="ml-8 text-[#D4AF37]/40 text-xs">✦</span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
