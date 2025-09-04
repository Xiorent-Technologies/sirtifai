"use client";

import { motion } from "framer-motion";

export default function Roles() {
  const roles = [
    {
      title: "Product and Design",
      desc: "Product Manager, UI/UX Designer, Business Analyst",
    },
    {
      title: "Engineering",
      desc: "Frontend Developer, Backend Developer, Full-Stack Developer, Mobile Engineer",
    },
    {
      title: "Infrastructure and DevOps",
      desc: "Cloud Engineer, DevOps Engineer, Database admin, Security",
    },
    {
      title: "QA And Testing",
      desc: "Manual Tester, Automation Engineer, Performance Tester",
    },
    {
      title: "Support And Ops",
      desc: "Tech Support, Customer Success Manager, Project Manager",
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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4, margin: "-100px 0px -100px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          Roles You Can Build With Ascend
        </motion.h2>

        {/* Roles Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25, margin: "-120px 0px -120px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12 text-left"
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex items-start gap-4"
            >
              {/* Circle */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-8 h-8 rounded-full bg-[#FDEEE7] flex-shrink-0 mt-1"
              />

              {/* Text */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{role.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{role.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl md:text-3xl font-bold text-gray-900 pt-24 pb-0"
       >
          Pod Structure (How You Learn And Grow)
        </motion.h1>
      </div>
    </section>
  );
}
