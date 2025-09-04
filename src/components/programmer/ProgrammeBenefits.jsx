"use client";

import { motion } from "framer-motion";

export default function ProgrammeBenefits() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative py-16 bg-[#FEF7F1]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4, margin: "-100px 0px -100px 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="inline-block text-3xl font-bold text-[#FC4C03] bg-white px-6 py-3  shadow-lg"
        >
          Programme Benefits For Candidate
        </motion.h2>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25, margin: "-120px 0px -120px 0px" }}
        className="relative flex items-center justify-center"
      >
        {/* Center Image */}
        <motion.div
          variants={item}
          className="relative w-[350px] h-[450px] rounded-2xl shadow-lg"
        >
          <img
            src="/assets/programmers/Hands.png" 
            alt="Programme Benefits"
            className="w-full h-full object-cover rounded-2xl overflow-hidden"
          />

          {/* Left Side Benefits (attached to image edge) */}
          <motion.div
            variants={container}
            className="absolute inset-y-0 -left-40 flex flex-col justify-between py-10"
          >
            <div className="relative left-[10px]">
              <BenefitItem img="/assets/programmers/Ellipse 33.png" text="World-Class Training" />
            </div>
            <BenefitItem img="/assets/programmers/Ellipse 33-3.png" text="Future-Proof Skills" />
            <BenefitItem img="/assets/programmers/Ellipse 33-4.png" text="Pod-Based Ecosystem" />
          </motion.div>

          {/* Right Side Benefits (attached to image edge) */}
          <motion.div
            variants={container}
            className="absolute inset-y-0 -right-40 flex flex-col justify-around py-16"
          >
            <BenefitItem img="/assets/programmers/Ellipse 33-1.png" text="Placement Support" />
            <BenefitItem img="/assets/programmers/Ellipse 33-2.png" text="Global Exposure" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* 🔥 Reusable Benefit Item */
function BenefitItem({ img, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-3 bg-[#FEF7F1]  rounded-[16px] px-4 py-2"
    >
      <img
        src={img}
        alt={text}
        className="w-10 h-10 rounded-full object-cover"
      />
      <span className="text-base font-medium text-gray-700">{text}</span>
      <div className="w-6 h-6 flex items-center justify-center bg-[#FC4C03] text-white rounded-full text-sm">
        💬
      </div>
    </motion.div>
  );
}
