import { Header } from "@/components/layout/Header";
import Hero from "@/components/programmer/Hero";
import WhyProgramme from "@/components/programmer/WhyProgramme";
import ProgrammeBenefits from "@/components/programmer/ProgrammeBenefits";
import Roles from "@/components/programmer/Roles";
import PodStructure from "@/components/programmer/PodStructure";
import TrustedPartners from "@/components/programmer/TrustedPartners";
import ProgrammeJourney from "@/components/programmer/ProgrammeJourney";
import PriceBlock from "@/components/programmer/PriceBlock";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyProgramme />
      <ProgrammeBenefits />
      <Roles />
      <PodStructure />
      <TrustedPartners />
      <ProgrammeJourney />
      <PriceBlock />
      <Footer />
    </>
  );
}
