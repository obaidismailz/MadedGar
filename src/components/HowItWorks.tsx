"use client";

import { useEffect, useRef } from "react";
import { MessageSquarePlus, ClipboardList, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Progress line draw on scroll
      gsap.fromTo(
        progressLineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 0.8,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      step: "01",
      title: "Consultation",
      subtitle: "Personal Intake",
      desc: "We discuss your family's exact needs abroad—medical conditions, emergency protocols, grocery preferences, and property monitoring.",
      icon: MessageSquarePlus,
      highlight: "30-Min Intake Call",
    },
    {
      step: "02",
      title: "Custom Planning",
      subtitle: "Dedicated Protocol",
      desc: "We assign a verified Care Manager in Islamabad, Lahore, or Karachi and establish a tailored schedule and escalation plan.",
      icon: ClipboardList,
      highlight: "Personal Care Manager",
    },
    {
      step: "03",
      title: "Peace of Mind",
      subtitle: "24/7 Execution",
      desc: "Receive real-time WhatsApp reports, photo verifications, and instant support whenever your parents need assistance.",
      icon: ShieldCheck,
      highlight: "Real-Time Updates",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-24 bg-[#071F17] text-white relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0F3D2E] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#D4AF37]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Apple-Inspired Seamless Flow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight text-white">
            How MadedGar Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 font-body font-light">
            Three simple steps to deliver world-class care and absolute peace of mind back home.
          </p>
        </div>

        {/* Timeline Container with Connecting Animated Line */}
        <div className="relative">
          
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden z-0">
            <div
              ref={progressLineRef}
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] origin-left rounded-full shadow-lg shadow-[#D4AF37]/50"
            />
          </div>

          {/* Step Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card-dark p-8 rounded-[32px] border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-2 group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-number font-bold text-4xl sm:text-5xl text-[#D4AF37] opacity-90 group-hover:scale-110 transition-transform">
                        {item.step}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-[#0F3D2E] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#071F17] transition-all">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37] mb-1">
                      {item.subtitle}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/75 font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card Footer Badge */}
                  <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-medium text-white/80">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37]">
                      {item.highlight}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
