"use client";

import { motion, MotionProps } from "framer-motion";

type DivMotionComponentProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;
const MotionDiv = motion.div as unknown as React.FC<DivMotionComponentProps>;

type H2MotionComponentProps = React.HTMLAttributes<HTMLHeadingElement> & MotionProps;
const MotionH2 = motion.h2 as unknown as React.FC<H2MotionComponentProps>;

type PMotionComponentProps = React.HTMLAttributes<HTMLParagraphElement> & MotionProps;
const MotionP = motion.p as unknown as React.FC<PMotionComponentProps>;

type ButtonMotionComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps;
const MotionButton = motion.button as unknown as React.FC<ButtonMotionComponentProps>;

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function CtaBand() {
  return (
    <section>
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-12 md:py-16 lg:py-20"
      >
        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25, margin: "-120px 0px -120px 0px" }}
          className="w-[80%] flex flex-wrap justify-between gap-5 mx-auto items-center"
        >
          {/* left */}
          <div>
            <MotionH2 variants={item} className="text-3xl text-white font-extrabold">
              Grenov: Reimagine the Futrue
            </MotionH2>
            <MotionP variants={item} className="text-white text-lg w-[80%]">
              “Grenov, part of Sirtifai, advances AI, augmented reality, and
              robotics to redefine the future.”
            </MotionP>
          </div>
          {/* Right */}
          <div className="flex gap-6">
            <MotionButton
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 text-white px-5 py-3 rounded-full shadow hover:bg-gray-800 transition"
            >
              Partner With Grenov
            </MotionButton>
            <MotionButton
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-gray-900 px-5 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Explore the Sirtital Ecosystem
            </MotionButton>
          </div>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}
