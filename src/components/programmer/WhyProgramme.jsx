"use client";

import { motion } from "framer-motion";

export default function WhyProgramme() {
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

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25, margin: "-120px 0px -120px 0px" }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative"
      >
        {/* Left Image (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden md:flex justify-center"
        >
          <img
            src="/assets/programmers/Socialmedia.png"
            alt="Why this Programme"
            className="rounded-2xl max-w-md"
          />
        </motion.div>

        {/* Right Content */}
        <div className="relative">
          {/* Decorative Top-Right Design */}
          <motion.img
            initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src="/assets/programmers/Sirtifai Design.png"
            alt="Decorative Design"
            className="absolute -top-16 -right-16 w-56 md:w-64 opacity-90"
          />

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#FF6200] mb-6 relative z-10 text-center md:text-left"
          >
            Why this Programme <br className="hidden md:block" /> matters
          </motion.h2>

          {/* Image (Mobile Only) */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center mb-8 md:hidden"
          >
            <img
              src="/assets/programmers/Socialmedia.png"
              alt="Why this Programme"
              className="rounded-2xl max-w-[250px]"
            />
          </motion.div>

          {/* List */}
          <motion.ul
            variants={containerVariants}
            className="list-disc pl-6 space-y-5 text-[#000000] text-lg relative z-10"
          >
            {[ 
              "🌍 Access to global IT ecosystems (USA, Singapore, Australia, UK, Germany).",
              "📜 Structured Pod-based training model that mirrors real IT companies.",
              "🎯 Direct alignment with in-demand IT roles (SaaS, Web, Mobile, Cloud, DevOps, QA).",
              "💼 Clear pathway from training → exams → placement.",
              "🔑 Career-first approach: Designed to remove uncertainty in training investments.",
            ].map((text, idx) => (
              <motion.li key={idx} variants={itemVariants}>
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
