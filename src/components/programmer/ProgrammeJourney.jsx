"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProgrammeJourney() {
  const items = [
    {
      img: "/assets/programmers/Ascend.png",
      title: "Enroll in Ascend",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      detail: "Rem ipsum dolor sit amet, consece labore et dolore magna aliqua.",
    },
    {
      img: "/assets/programmers/Exam.png",
      title: "Qualification Exam",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      detail: "Rem ipsum dolor sit amet, consece labore et dolore magna aliqua.",
    },
    {
      img: "/assets/programmers/Training.png",
      title: "6 Months of Structured Training",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      detail: "Rem ipsum dolor sit amet, consece labore et dolore magna aliqua.",
    },
    {
      img: "/assets/programmers/Support.png",
      title: "Placement Support",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      detail: "Rem ipsum dolor sit amet, consece labore et dolore magna aliqua.",
    },
  ];

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
    <section className="py-16 bg-[#FFF9F5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4, margin: "-100px 0px -100px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
       >
          Programme Journey
        </motion.h2>

        {/* Desktop Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25, margin: "-120px 0px -120px 0px" }}
          className="hidden md:grid grid-cols-2 gap-10"
        >
          {items.map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex items-center gap-6 bg-[#FFF9F5] rounded-lg overflow-hidden"
            >
              {/* Left Image */}
              <div className="flex-shrink-0">
                <Image
                  src={itemData.img}
                  alt={itemData.title}
                  width={300}
                  height={200}
                  className="object-cover rounded-t-lg"
                />
              </div>

              {/* Right Content */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#FE7743] mb-1">
                  {itemData.title}
                </h3>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {itemData.desc}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{itemData.detail}</p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="bg-[#FE7743] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#e25c29] transition"
                >
                  Donate now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Cards - Vertical Stack with Alternating Layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25, margin: "-120px 0px -120px 0px" }}
          className="md:hidden space-y-6"
        >
          {items.map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`flex ${i % 2 === 1 ? 'flex-row-reverse' : 'flex-row'} gap-3 items-start`}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-32 h-24">
                <Image
                  src={itemData.img}
                  alt={itemData.title}
                  width={128}
                  height={96}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className={`flex-1 ${i % 2 === 1 ? 'text-right' : 'text-left'}`}>
                <h3 className="text-lg font-bold text-[#FE7743] mb-1">
                  {itemData.title}
                </h3>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 leading-tight">
                  {itemData.desc}
                </h4>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                  {itemData.detail}
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="bg-[#FE7743] text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-[#e25c29] transition-colors"
                >
                  Donate now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}