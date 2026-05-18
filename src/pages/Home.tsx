/*
 * Home Page — Adam Loomis Personal Brand Website
 * Design: "Midnight Forge" — Premium Dark Craftsmanship
 * Single-page layout with anchor sections
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SpeakingSection from "@/components/SpeakingSection";
import PodcastSection from "@/components/PodcastSection";
import BookSection from "@/components/BookSection";
import AboutSection from "@/components/AboutSection";
import CompanySection from "@/components/CompanySection";
import VisibleLocalSection from "@/components/VisibleLocalSection";
import SimplyVisibleSection from "@/components/SimplyVisibleSection";
import StrategySection from "@/components/StrategySection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <SimplyVisibleSection />
      <VisibleLocalSection />
      <ExpertiseSection />
      <SpeakingSection />
      <PodcastSection />
      <BookSection />
      <AboutSection />
      <CompanySection />
      <StrategySection />
      <LeadMagnetSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
