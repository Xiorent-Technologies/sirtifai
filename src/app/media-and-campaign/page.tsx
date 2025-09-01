import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import  FeaturedLearnerStories from "../../components/media-campaign/FeaturedLearnerStories";
import  IncomeTrackerWall from "../../components/media-campaign/IncomeTrackerWall";
import SuccessGallery from "../../components/media-campaign/SuccessGallery";
import UpcomingWebinars from "../../components/media-campaign/UpcomingWebinars";
import CampusActivities from "../../components/media-campaign/CampusActivities";
import FooterCTA from "../../components/media-campaign/FooterCta";

export default function MediaCampaignPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <FeaturedLearnerStories />
      <IncomeTrackerWall />
      <SuccessGallery />
      <UpcomingWebinars />
      <CampusActivities />
      <FooterCTA />
      <Footer />
    </div>
  )
}
