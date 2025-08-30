'use client';

import { Calendar, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

// ✅ Strongly typed motion components
const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;

const MotionH1 = motion.h1 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionP = motion.p as React.ComponentType<
  React.HTMLAttributes<HTMLParagraphElement> & import('framer-motion').MotionProps
>;

const MotionButton = motion.button as React.ComponentType<
  React.ButtonHTMLAttributes<HTMLButtonElement> & import('framer-motion').MotionProps
>;

const MotionImg = motion.img as React.ComponentType<
  React.ImgHTMLAttributes<HTMLImageElement> & import('framer-motion').MotionProps
>;

export const TrainingPartnerHeroSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center pt-[20px] lg:pt-[100px] px-8 lg:px-20 xl:px-32 overflow-hidden">

      {/* Left Section - Text and Buttons */}
      <MotionDiv
        className="relative w-full lg:max-w-[800px] xl:max-w-[900px] flex flex-col justify-start items-start gap-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full flex flex-col gap-6">
          {/* Main Headline */}
          <div className="relative w-[100%] sm:w-full">
            <MotionImg
              className="absolute right-[10%] lg:right-[-1%] top-[12%] lg:top-[-8%] w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]"
              src="/assets/star.png"
              alt="Star"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

                         <MotionH1
               className="text-[8vw] sm:text-[1.5rem] lg:text-[3.2rem] xl:text-[3.5rem] leading-12 sm:leading-tight font-semibold pt-10 sm:pt-16 lg:pt-0 font-open-sans text-black"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >Ascend B2B welcomes small and mid-sized training companies from across the world as official Sirtifai partners.
             </MotionH1>
          </div>





          {/* First Sub-text */}
          <MotionP
            className="text-lg lg:text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            You provide the trainers, classrooms, laptops & infra →{' '}
            <span className="text-[#FE7642] font-semibold">
              Sirtifai provides candidates, exams, placement, and guaranteed monthly billing.
            </span>
          </MotionP>

          {/* Second Sub-text */}
          <MotionP
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join Ascend B2B. A small company can make a big impact.
          </MotionP>

          {/* Call-to-Action Buttons */}
          <div className="hidden sm:flex flex-col sm:flex-row gap-4 mb-6">
            {/* Start Your Global Career Button */}
            <button className="relative bg-[#1f2937] text-white rounded-full px-8 py-4 font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-[#111827] before:content-[''] before:absolute before:top-[6px] before:left-[6px] before:right-[6px] before:bottom-[6px] before:bg-transparent before:border before:border-white/45 before:rounded-full before:z-[1] before:pointer-events-none">
            Become a Partner
            </button>

            {/* Download Brochure Button */}
            <button className="px-8 py-4 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg flex items-center gap-2">

              Request B2B Prospectus
            </button>
          </div>
        </div>
      </MotionDiv>

      {/* Right Section - Circular Image */}
      <MotionDiv
        className=" relative flex justify-center items-center mt-10 lg:mt-0 w-full lg:w-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Circular Container with Gradient Border */}
        <div className="relative w-[320px] h-[320px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px]">
          {/* Gradient Border */}

          {/* Image */}
          <div className="w-full h-full rounded-full overflow-hidden">
            <MotionImg
              className="w-full h-full object-cover"
              src="/assets/training partner program/hero-section-pic.png"
              alt="Training Companies Meeting - Sirtifai Partners"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

          </div>
        </div>
      </MotionDiv>
    </div>
  );
};
