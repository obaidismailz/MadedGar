"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import ServicesSection from "@/components/ServicesSection";
import FourPillars from "@/components/FourPillars";
import CarePlanPricing from "@/components/CarePlanPricing";
import StorySection from "@/components/StorySection";
import CoreValues from "@/components/CoreValues";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#FCFAF7] font-body text-[#161616] selection:bg-[#0F3D2E] selection:text-[#D4AF37]">
        {/* Navigation Bar */}
        <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Hero Section */}
        <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Trust Marquee */}
        <TrustMarquee />

        {/* About Section */}
        <AboutSection />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Services Section */}
        <ServicesSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Four Pillars */}
        <FourPillars />

        {/* Care Plan Pricing */}
        <CarePlanPricing onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Story Section */}
        <StorySection />

        {/* Core Values */}
        <CoreValues />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQSection />

        {/* Call To Action */}
        <CallToAction onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Footer */}
        <Footer />

        {/* Consultation Modal Dialog */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      </main>
    </SmoothScroll>
  );
}
