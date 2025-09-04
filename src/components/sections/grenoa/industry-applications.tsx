"use client";

import Image from "next/image";
import { motion, MotionProps } from "framer-motion";

// Typed motion components
type DivMotionComponentProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;
const MotionDiv = motion.div as unknown as React.FC<DivMotionComponentProps>;

type HeaderMotionComponentProps = React.HTMLAttributes<HTMLHeadingElement> & MotionProps;
const MotionHeader = motion.h2 as unknown as React.FC<HeaderMotionComponentProps>;

type ArticleMotionComponentProps = React.HTMLAttributes<HTMLElement> & MotionProps;
const MotionArticle = motion.article as unknown as React.FC<ArticleMotionComponentProps>;

const DEFAULT_ITEMS = [
  {
    title: "EDUCATION ➝",
    desc: "Smart Learning Platforms For Education",
    image: "/assets/grenov/Education.svg",
  },
  {
    title: "HEALTHCARE ➝",
    desc: "AR-Assisted Surgeries & AI Diagnostics",
    image: "/assets/grenov/Health.svg",
  },
  {
    title: "FINANCE ➝",
    desc: "Predictive Risk And Fraud Prevention ",
    image: "/assets/grenov/Finance.svg",
  },
  {
    title: "AEROSPACE & DEFENSE ➝",
    desc: "Advanced Simulations & Robotics",
    image: "/assets/grenov/Aerospace.svg",
  },
  {
    title: "GOVERNMENT  + ➝ \n DIGITAL",
    desc: "Governance & Public Service AI ",
    image: "/assets/grenov/Government.svg",
  },
];

export default function IndustryApplications({
  items = DEFAULT_ITEMS,
}: {
  items?: typeof DEFAULT_ITEMS;
}) {
  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="applications" className="w-full py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <MotionHeader
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.4,
            margin: "-100px 0px -100px 0px",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 sm:mb-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide md:text-4xl">
            Industry Applications
          </h2>
        </MotionHeader>

        {/* Grid */}
        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
            margin: "-120px 0px -120px 0px",
          }}
          className="grid gap-8 sm:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        >
          {items.map((it, idx) => (
            <MotionArticle
              key={it.title + idx}
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex flex-col items-center text-center"
            >
              <MotionDiv
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="w-20 h-20 sm:w-[112px] sm:h-[112px]"
              >
                <Image
                  src={it.image}
                  alt={`${it.title} illustration`}
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </MotionDiv>

              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                {it.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-700 max-w-[16ch] sm:max-w-[14ch]">
                {it.desc}
              </p>
            </MotionArticle>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
