"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustedPartners() {
  const partners = [
    {
      title: "EdTech and Training Partners",
      desc: "Coursera, Udemy Business, Pluralsight, NIIT",
      tag: "Basic/Pro Plan",
    },
    {
      title: "IT Consulting And Delivery Partners",
      desc: "Infosys, TCS, Wipro, Accenture",
      tag: "Basic/Pro Plan",
    },
    {
      title: "Technology Ecosystem",
      desc: "AWS, Microsoft Azure, Google Cloud, GitHub",
      tag: "Basic/Pro Plan",
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
    <section className="bg-white relative overflow-hidden">
      {/* Orange Top Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full bg-[#FE7743] py-10 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-bold text-white"
        >
          Trusted Partners in Training And <br /> Placement
        </motion.h2>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Image with ONLY Top & Left Orange Border */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="rounded-lg overflow-hidden relative">
            <Image
              src="/assets/programmers/Partners.png"
              alt="Partner"
              width={500}
              height={400}
              className="rounded-lg shadow-lg relative z-10"
            />
            {/* Orange Border Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full h-full border-t-[10px] border-l-[10px] border-[#FE7743] rounded-lg pointer-events-none"
            ></motion.div>
          </div>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25, margin: "-120px 0px -120px 0px" }}
          className="space-y-6"
        >
          {partners.map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {itemData.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{itemData.desc}</p>
              <span className="inline-block text-xs font-medium bg-[#FDEEE7] text-[#FE7743] px-3 py-1 rounded-full">
                {itemData.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
