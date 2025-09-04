"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import React from "react";

// Typed motion components
const MotionDiv = motion.div as unknown as React.FC<
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>;
const MotionH2 = motion.h2 as unknown as React.FC<
  React.HTMLAttributes<HTMLHeadingElement> & MotionProps
>;
const MotionP = motion.p as unknown as React.FC<
  React.HTMLAttributes<HTMLParagraphElement> & MotionProps
>;

// Variants
const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function VisionMissionSection() {
  return (
    <section id="vision" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Heading Band */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3, margin: "-100px 0px -100px 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-[100%] rounded-md bg-[#FE7743] py-3 shadow-2xl"
      >
        <MotionH2
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center font-sans text-xl font-extrabold tracking-wide text-[#284050] sm:text-6xl"
        >
          VISION AND MISSION
        </MotionH2>
      </MotionDiv>

      {/* Grid Content */}
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25, margin: "-120px 0px -120px 0px" }}
        className="sm:mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10"
      >
        {/* Image - 1/3 (hidden on mobile) */}
        <div className="relative col-span-1 hidden md:block">
          <MotionDiv
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-2xl sm:w-[700px] flex-shrink-0 aspect-[207/194] left-[-200px] bottom-[40px]"
          >
            <Image
              src={"/assets/drop_i_india/leaf_with_droplets.png"}
              alt="Close-up of a leaf with droplets representing sustainability"
              fill
              className="object-cover"
            />
          </MotionDiv>
        </div>

        {/* Text - 2/3 */}
        <div className="relative z-10 col-span-2 space-y-4 text-gray-700 pt-10">
          <MotionP
            variants={itemVariants}
            className="text-sm leading-5 sm:text-lg sm:leading-6 text-center sm:text-left"
          >
            To achieve equitable, sustainable, and smart water access for every
            household, farm, and industry in India, a holistic approach is
            essential. This involves the collaboration of governments,
            industries, scientists, farmers, and local communities. Policies
            should be inclusive, technology-driven, and focused on long-term
            sustainability. By prioritizing water conservation, technology, and
            community participation, India can ensure that its water resources
            are available for future generations while meeting the growing
            demands of its population and economy.
          </MotionP>

          <MotionP
            variants={itemVariants}
            className="text-sm leading-5 sm:text-lg sm:leading-6 text-center sm:text-left"
          >
            By integrating AI, IoT, and grassroots engagement, we can create
            water-secure communities that are resilient to climate change,
            capable of managing water resources efficiently, and adaptable to
            future challenges. These technologies offer powerful tools for
            monitoring, managing, and conserving water, but their real potential
            is realized when they are used in collaboration with local
            communities who are empowered to take charge of their water futures.
            <br />
            Building a future-ready ecosystem requires a deep commitment to both
            technological innovation and community involvement. Together, these
            forces can create a sustainable water future that not only meets
            current needs but also secures water resources for generations to
            come.
          </MotionP>
        </div>
      </MotionDiv>
    </section>
  );
}
