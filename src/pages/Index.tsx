import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import CEOSection from "@/components/CEOSection";
import BlogsSection from "@/components/BlogsSection";
import WhySection from "@/components/WhySection";
import JobSeekersSection from "@/components/JobSeekersSection";
import HiringManagersSection from "@/components/HiringManagersSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhySection />
      <JobSeekersSection />
      <HiringManagersSection />
      {/* <ServicesSection /> */}
      <StatsSection />
      <TestimonialsSection />
      <PartnersSection />
    </div>
  );
};

export default Index;