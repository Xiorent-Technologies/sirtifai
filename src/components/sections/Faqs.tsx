"use client";

import { useMemo, useState } from "react";
import { GeneralFaq } from "@/components/sections/GeneralFaq";
import type { FAQItem } from "@/components/Accordion";

export const Faqs = () => {
  const [currentTab, setCurrentTab] = useState("General FAQ");

  const faqContent = useMemo(() => {
    const general: FAQItem[] = [
      {
        question: "What is Sirtifai and how is it different?",
        answer:
          "Sirtifai is a job-aligned learning and earning platform. Instead of passive courses, you build real projects, get mentorship, and access placement assistance with lifetime support.",
      },
      {
        question: "Do I need prior experience?",
        answer:
          "No. We support beginners to advanced learners. You can join at your current level and progress through Foundation, Practice, and Placement phases.",
      },
      {
        question: "Is the program online?",
        answer:
          "Yes, the program is fully online with live support, async guidance, and a structured project workflow.",
      },
      {
        question: "Do I get lifetime access?",
        answer:
          "Yes. You get lifetime access to resources, mentorship re-entry, and placement assistance.",
      },
    ];

    const pricing: FAQItem[] = [
      {
        question: "What are the pricing plans?",
        answer:
          "We offer flexible plans for each phase. You can enroll per phase or opt for bundled discounts. Contact us for the latest offers.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "Yes. Please refer to our Refund Policy page. If you're not satisfied during the early stage, you may be eligible for a refund as per policy.",
      },
      {
        question: "Do you offer EMI or installments?",
        answer:
          "Yes, installment options are available through trusted payment partners.",
      },
    ];

    const certifications: FAQItem[] = [
      {
        question: "Are certifications recognized?",
        answer:
          "Yes. Our programs are NSQF-aligned. You also build a verifiable portfolio and resume artifacts that employers value.",
      },
      {
        question: "How do I obtain certificates?",
        answer:
          "Complete the required deliverables for the phase. Certificates are issued digitally and can be verified.",
      },
      {
        question: "Do certificates expire?",
        answer:
          "No. Certificates do not expire and remain verifiable.",
      },
    ];

    const career: FAQItem[] = [
      {
        question: "What career support do you provide?",
        answer:
          "Interview preparation, resume and portfolio building, referrals, job matching, and lifetime re-entry support.",
      },
      {
        question: "Do you guarantee placements?",
        answer:
          "We provide strong placement assistance and matching. Outcomes vary by candidate performance and market conditions.",
      },
      {
        question: "Can I start earning during the program?",
        answer:
          "Yes. In the Practice phase you work on paid real-world assignments matched to your skill level.",
      },
    ];

    return {
      "General FAQ": general,
      "Plans & Pricing": pricing,
      "Certifications": certifications,
      "Career Support": career,
    } as Record<string, FAQItem[]>;
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="w-full bg-[#fef7f1] min-h-[80px] lg:h-[100px] flex justify-between items-center px-4 sm:px-6 lg:px-[100px] py-4 lg:py-[30px]">
        <div className="w-full flex justify-start lg:justify-between items-center gap-6 sm:gap-8 lg:gap-10 overflow-x-auto border-b border-b-[#D9D9D9]">
          {[
            "General FAQ",
            "Plans & Pricing",
            "Certifications",
            "Career Support",
          ].map((option, index) => (
            <button
              onClick={() => setCurrentTab(option)}
              key={index}
              className={`shrink-0 h-[36px] sm:h-[40px] text-[#FE7743] cursor-pointer text-[1rem] sm:text-[1.1rem] lg:text-[1.25rem] font-medium leading-[150%] ${
                currentTab === option ? "border-b border-[#FE7743]" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1125px] pt-5 lg:pt-[20px] pb-[50px] px-4 sm:px-6 mx-auto flex flex-col gap-8 lg:gap-[76px] justify-between items-center">
        <h1 className="text-[#35332F] font-semibold text-[1.75rem] lg:text-[2.5rem] leading-[150%] font-inter">
          Frequently Asked Questions
        </h1>

        <GeneralFaq items={faqContent[currentTab]} />
      </div>
    </section>
  );
};
