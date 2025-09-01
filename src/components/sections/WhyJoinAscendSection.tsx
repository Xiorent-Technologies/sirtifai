'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { FileText, Globe, Wrench, Building2, Award, Users } from 'lucide-react';

// ✅ Strongly typed motion components
const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;

const MotionH2 = motion.h2 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionH3 = motion.h3 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionP = motion.p as React.ComponentType<
  React.HTMLAttributes<HTMLParagraphElement> & import('framer-motion').MotionProps
>;

const benefits = [
  {
    id: 1,
    icon: FileText,
    title: "Guaranteed Monthly Revenue",
    description: "like central govt. bills, no receivable risk.",
    delay: 0.1
  },
  {
    id: 2,
    icon: Globe,
    title: "Steady Flow of Candidates",
    description: "Sirtifai brings the learners",
    delay: 0.2
  },
  {
    id: 3,
    icon: Wrench,
    title: "Zero Finance Involvement",
    description: "no dealing with loans or subsidies.",
    delay: 0.3
  },
  {
    id: 4,
    icon: Building2,
    title: "Infra Utilization",
    description: "fill your classrooms, labs, and trainers with consistent demand.",
    delay: 0.4
  },
  {
    id: 5,
    icon: Award,
    title: "Global Recognition",
    description: "get listed as an official Ascend Training Partner.",
    delay: 0.5
  },
  {
    id: 6,
    icon: Users,
    title: "24+ Industries",
    description: "Choose your career - not just tech",
    delay: 0.6
  }
];

export const WhyJoinAscendSection = () => {
  return (
  <section className="w-full bg-[#FEF7F1] py-16 lg:py-24 px-6 sm:px-8 lg:px-16 xl:px-24">
  <div className="w-full mx-auto">
    {/* Section Header */}
    <MotionDiv
      className="text-center mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <MotionH2
        className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 whitespace-nowrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Why Small Companies Join Ascend
      </MotionH2>
    </MotionDiv>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
      {benefits.map((benefit) => {
        const IconComponent = benefit.icon;
        return (
          <MotionDiv
            key={benefit.id}
            className="flex items-start gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: benefit.delay }}
          >
            {/* Icon */}
            <MotionDiv
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: benefit.delay + 0.2 }}
            >
              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
            </MotionDiv>

            {/* Content */}
            <MotionDiv
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: benefit.delay + 0.3 }}
            >
              <MotionH3
                className="text-sm sm:text-base lg:text-xl font-bold text-black mb-1 sm:mb-2 whitespace-nowrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: benefit.delay + 0.4 }}
              >
                {benefit.title}
              </MotionH3>
              <MotionP
                className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: benefit.delay + 0.5 }}
              >
                {benefit.description}
              </MotionP>
            </MotionDiv>
          </MotionDiv>
        );
      })}
    </div>
  </div>
</section>

  );
};
