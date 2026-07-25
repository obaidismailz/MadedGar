"use client";

import { ShieldCheck, Phone, Mail, MapPin, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071F17] text-white pt-20 pb-12 border-t border-[#D4AF37]/20 relative overflow-hidden">
      
      {/* Decorative top border gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#0F3D2E] flex items-center justify-center text-[#D4AF37] font-bold text-xl border border-[#D4AF37]/40 shadow-lg">
                M
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Maded<span className="text-[#D4AF37]">Gar</span>
              </span>
            </div>

            <p className="text-sm text-white/75 font-body leading-relaxed max-w-sm">
              Pakistan’s premiere luxury care & concierge brand for overseas Pakistanis. Providing 24/7 emergency support, medical oversight, errand management, and complete peace of mind.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-white/60">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Operations Active in ISB, LHR, KHI & KPK</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#D4AF37] mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70 font-body">
                <li><a href="#services" className="hover:text-white transition-colors">Emergency Support</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Errand Management</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Financial Services</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Supervisory Support</a></li>
                <li><a href="#pillars" className="hover:text-white transition-colors">Four Pillars</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#D4AF37] mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70 font-body">
                <li><a href="#about" className="hover:text-white transition-colors">About MadedGar</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Care Plans</a></li>
                <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact & Global Desks */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#D4AF37] mb-4">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-xs text-white/80 font-body">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>HQ: Blue Area, Islamabad | London Liaison Desk</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>24/7 Helpline: +92 51 111 MADEDGAR</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>concierge@madedgar.com</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Concierge</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-body gap-4">
          <p>© {new Date().getFullYear()} MadedGar VIP Care Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Escrow Protection</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
