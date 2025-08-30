import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { TrainingPartnerHeroSection } from "@/components/sections/TrainingPartnerHeroSection"
import { PartnerNetworkSection } from "@/components/sections/PartnerNetworkSection"
import { WhyJoinAscendSection } from "@/components/sections/WhyJoinAscendSection"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import { CTABannerSection } from "@/components/sections/CTABannerSection"

export default function TrainingPartnerProgramPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <TrainingPartnerHeroSection />
      <PartnerNetworkSection />
      <WhyJoinAscendSection />
      <HowItWorksSection />
      <CTABannerSection />
      <Footer />
    </div>
  )
}
