/*
 * Home Page — Adam Loomis Personal Brand Website
 * Design: "Editorial Authority" — light, magazine-coded, serif-led
 * Section rhythm: white > black > paper > white > white > paper > BLACK feature > white > white > white > paper > white
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
import SimplyVisibleSection from "@/components/SimplyVisibleSection";
import StrategySection from "@/components/StrategySection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <SimplyVisibleSection />
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
