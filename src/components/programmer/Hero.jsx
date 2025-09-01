"use client";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <>
      {/* Desktop & Tablet Version */}
      <section
        className="relative hidden md:flex text-white h-screen bg-cover bg-center items-center justify-center"
        style={{ backgroundImage: "url('/assets/contact/mainContact.jpg')" }}
      >
        {/* Gradient Overlay (left to right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent" />

        {/* Content */}
        <div className="relative w-full max-w-5xl mx-auto px-6 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug text-white">
            Your Gateway to the <br /> Global IT Industry
          </h1>

          <p className="text-lg mb-6 max-w-3xl leading-relaxed text-gray-200">
            "Your Gateway to the Global IT Industry" offers limitless
            opportunities and growth. The IT sector shapes modern business,
            enabling organizations to operate and compete globally. Joining this
            industry provides access to international markets, advanced tools,
            and a diverse professional network. It builds in-demand skills and
            opens career doors worldwide. With advancements in AI, cloud
            computing, and cybersecurity, the IT sector keeps entrants
            future-ready, connecting talent with global challenges.
          </p>

          {/* Buttons */}
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-[#FEF7F1] text-[#FE7743] rounded-[16px] px-6 py-3 font-medium hover:bg-[#FDEFE6]">
              Apply Now →
            </button>
            <button className="bg-[#FEF7F1] text-[#FE7743] rounded-[16px] px-6 py-3 font-medium hover:bg-[#FDEFE6]">
              View Programme
            </button>
            <button className="bg-[#FEF7F1] text-[#FE7743] rounded-[16px] px-6 py-3 font-medium hover:bg-[#FDEFE6]">
              Talk to Advisor
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Version - Updated to Match Image */}
      {/* Mobile Version - Matching Uploaded Image */}
      <section className="md:hidden">
        {/* Background Image with Title + Buttons */}
        <div
          className="relative h-screen bg-cover bg-center flex flex-col justify-center text-left px-6 text-white"
          style={{ backgroundImage: "url('/assets/contact/mainContact.jpg')" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-12 text-white leading-tight max-w-xs">
              Your Gateway to the Global IT Industry
            </h1>

            {/* Buttons Stack - Matching Image Style */}
            <div className="flex flex-col gap-3">
              <button className="bg-[#FEF7F1] text-[#FE7743] rounded-full px-6 py-3 font-medium hover:bg-[#FDEFE6] text-left flex items-center justify-between w-fit min-w-[200px]">
                Apply Now
                <span className="ml-2">→</span>
              </button>
              <button className="bg-[#FEF7F1] text-[#FE7743] rounded-full px-6 py-3 font-medium hover:bg-[#FDEFE6] text-left flex items-center justify-between w-fit min-w-[200px]">
                View Programme Matters
                <span className="ml-2">→</span>
              </button>
              <button className="bg-[#FEF7F1] text-[#FE7743] rounded-full px-6 py-3 font-medium hover:bg-[#FDEFE6] text-left flex items-center justify-between w-fit min-w-[200px]">
                Talk to Advisor
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}