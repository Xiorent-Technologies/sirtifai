"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
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
    <>
      {/* Desktop & Tablet Version */}
      <section
        className="relative hidden md:flex text-white h-screen bg-cover bg-center items-center justify-center"
        style={{ backgroundImage: "url('/assets/contact/mainContact.jpg')" }}
      >
        {/* Gradient Overlay (left to right) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent"
        />

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative w-full max-w-5xl mx-auto px-6 text-left"
        >
          <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold mb-4 leading-snug text-white">
            Your Gateway to the <br /> Global IT Industry
          </motion.h1>

          <motion.p variants={item} className="text-lg mb-6 max-w-3xl leading-relaxed text-gray-200">
            "Your Gateway to the Global IT Industry" offers limitless
            opportunities and growth. The IT sector shapes modern business,
            enabling organizations to operate and compete globally. Joining this
            industry provides access to international markets, advanced tools,
            and a diverse professional network. It builds in-demand skills and
            opens career doors worldwide. With advancements in AI, cloud
            computing, and cybersecurity, the IT sector keeps entrants
            future-ready, connecting talent with global challenges.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={container} className="flex flex-col md:flex-row gap-4">
            <motion.button variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="bg-[#FEF7F1] text-[#FE7743] rounded-[16px] px-6 py-3 font-medium hover:bg-[#FDEFE6]">
              Apply Now →
            </motion.button>
            <motion.button variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="bg-[#FEF7F1] text-[#FE7743] rounded-[16px] px-6 py-3 font-medium hover:bg-[#FDEFE6]">
              View Programme
            </motion.button>
            <motion.button variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="bg-[#FEF7F1] text-[#FE7743] rounded-[16px] px-6 py-3 font-medium hover:bg-[#FDEFE6]">
              Talk to Advisor
            </motion.button>
          </motion.div>
        </motion.div>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 bg-black/50"
          />

          {/* Content */}
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="relative z-10">
            <motion.h1 variants={item} className="text-4xl font-bold mb-12 text-white leading-tight max-w-xs">
              Your Gateway to the Global IT Industry
            </motion.h1>

            {/* Buttons Stack - Matching Image Style */}
            <motion.div variants={container} className="flex flex-col gap-3">
              <motion.button variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="bg-[#FEF7F1] text-[#FE7743] rounded-full px-6 py-3 font-medium hover:bg-[#FDEFE6] text-left flex items-center justify-between w-fit min-w-[200px]">
                Apply Now
                <span className="ml-2">→</span>
              </motion.button>
              <motion.button variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="bg-[#FEF7F1] text-[#FE7743] rounded-full px-6 py-3 font-medium hover:bg-[#FDEFE6] text-left flex items-center justify-between w-fit min-w-[200px]">
                View Programme Matters
                <span className="ml-2">→</span>
              </motion.button>
              <motion.button variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="bg-[#FEF7F1] text-[#FE7743] rounded-full px-6 py-3 font-medium hover:bg-[#FDEFE6] text-left flex items-center justify-between w-fit min-w-[200px]">
                Talk to Advisor
                <span className="ml-2">→</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}