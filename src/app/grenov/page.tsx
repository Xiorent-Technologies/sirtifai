import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
// import { ContactSupportSection } from "../../components/sections/ContactSupportSection";
import CtaBand from "@/components/sections/grenoa/cta-band";
import HeroSection from "@/components/sections/grenoa/hero-section";
import AboutGrenoa from "@/components/sections/grenoa/about-grenoa";
import IndustryApplications from "@/components/sections/grenoa/industry-applications";
import InnovationInAction from "@/components/sections/grenoa/innovation-in-action";
import LogoMarquee from "@/components/sections/grenoa/logo-marquee";
// import VisionMissionSection from "@/components/sections/drop_i_india/vision-mission";

export default function ContactPage() {
  return (
    <div className="bg-[#fff] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutGrenoa />
      <IndustryApplications />
      <InnovationInAction />
      <LogoMarquee />

      
      <CtaBand />
      
      <Footer />
    </div>
  );
}
