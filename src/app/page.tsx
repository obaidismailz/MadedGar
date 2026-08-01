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
import ExplainerVideo from "@/components/ExplainerVideo";
import CoreValues from "@/components/CoreValues";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import WhatsAppWidget from "@/components/WhatsAppWidget";

import { LanguageProvider } from "@/context/LanguageContext";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [customDetails, setCustomDetails] = useState<{ duration?: string; features?: string[] } | undefined>(undefined);

  const handleOpenConsultation = (
    planOrService?: string,
    details?: { duration?: string; features?: string[] }
  ) => {
    setSelectedPlan(planOrService);
    setCustomDetails(details);
    setIsConsultationOpen(true);
  };

  return (
    <LanguageProvider>
      <SmoothScroll>
        <main className="min-h-screen bg-[#FCFAF7] font-body text-[#161616] selection:bg-[#0F3D2E] selection:text-[#D4AF37]">
        {/* Navigation Bar */}
        <Navbar onOpenConsultation={handleOpenConsultation} />

        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Trust Marquee */}
        <TrustMarquee />

        {/* About Section */}
        <AboutSection />

        {/* Explainer Video Section */}
        <ExplainerVideo onOpenConsultation={handleOpenConsultation} />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Services Section */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* Four Pillars */}
        <FourPillars />

        {/* Care Plan Pricing */}
        <CarePlanPricing onOpenConsultation={handleOpenConsultation} />

        {/* Story Section */}
        <StorySection />

        {/* Core Values */}
        <CoreValues />

        {/* Testimonials */}
        <Testimonials />

        {/* Call To Action */}
        <CallToAction onOpenConsultation={handleOpenConsultation} />

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Widget */}
        <WhatsAppWidget />

        {/* Consultation Modal Dialog */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          initialCareNeeds={selectedPlan}
          customPlanDetails={customDetails}
          onClose={() => {
            setIsConsultationOpen(false);
            setSelectedPlan(undefined);
            setCustomDetails(undefined);
          }}
        />
      </main>
    </SmoothScroll>
  </LanguageProvider>
  );
}
