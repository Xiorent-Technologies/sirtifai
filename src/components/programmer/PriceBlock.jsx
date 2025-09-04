"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PriceBlock() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 md:py-16 bg-[#fdf6f1] flex justify-center px-4">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-120px 0px -120px 0px" }}
        className="bg-white shadow-lg rounded-2xl p-6 md:p-10 w-full max-w-4xl flex flex-col md:flex-row items-start justify-between"
      >
        {/* Left Section */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <motion.div variants={item} className="flex items-center space-x-4">
            {/* Orange Image Icon */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/assets/programmers/X.png"
                alt="Price Icon"
                width={64}
                height={64}
                className="object-contain"
              />
            </motion.div>
            <motion.h2
              variants={item}
              className="text-2xl md:text-3xl font-bold text-gray-900"
            >
              Price Block
            </motion.h2>
          </motion.div>
          {/* Underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-32 md:w-40 border-b border-gray-400 mt-3 origin-left"
          ></motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          variants={container}
          className="text-left space-y-3 md:space-y-4 w-full md:w-auto"
        >
          <motion.p
            variants={item}
            className="text-lg md:text-xl font-medium flex justify-between md:justify-start"
          >
            Programme Fee
            <span className="ml-4 md:ml-8 font-semibold">: 6,00,000</span>
          </motion.p>
          <motion.p
            variants={item}
            className="text-lg md:text-xl font-medium flex justify-between md:justify-start"
          >
            GST (18%)
            <span className="ml-4 md:ml-[75px] font-semibold">: 1,08,000</span>
          </motion.p>
          <motion.p
            variants={item}
            className="text-xl md:text-2xl font-bold flex justify-between md:justify-start"
          >
            Total Payable
            <span className="ml-4 md:ml-10 text-orange-600">: 7,08,000</span>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
