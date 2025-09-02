"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PodStructure() {
  const [open, setOpen] = useState(null);

  const pods = [
    "1 Pod = 1,000 candidates + 22 Expert staff",
    "Staff roles mirror global IT companies – you gain real-world exposure",
    "800 Pods Worldwide – 8,00,000 learners trained, 17,600 IT professionals guiding",
    "Every pod functions as a mini IT company, ensuring practical, project-driven learning",
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#fef6f2] relative overflow-hidden">
      {/* Top Full Orange Strip */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full bg-[#FE7743] h-4 origin-left"
      />

      <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25, margin: "-120px 0px -120px 0px" }}
        >
          {pods.map((pod, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex items-center gap-10 bg-white shadow-lg rounded-lg p-12 mb-6 cursor-pointer hover:shadow-xl transition"
            >
              <motion.span
                initial={{ rotate: -90, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Plus className="text-black-800 w-6 h-6" />
              </motion.span>
              <p className="text-gray-800 text-base font-medium">{pod}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Image Bottom Left */}
      {/*
      <div className="absolute bottom-0 left-0 w-40 md:w-60 lg:w-72 opacity-90">
        <Image
          src="/assets/programmers/Sirtifai Design.png"
          alt="Decorative Curve"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      */}
    </section>
  );
}
