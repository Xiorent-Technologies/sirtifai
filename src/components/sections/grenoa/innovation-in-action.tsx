"use client";

import { CircleCheck } from "lucide-react";
import { motion, MotionProps } from "framer-motion";
import React from "react";

// Typed motion components
type DivMotionComponentProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;
const MotionDiv = motion.div as unknown as React.FC<DivMotionComponentProps>;

type H2MotionComponentProps = React.HTMLAttributes<HTMLHeadingElement> & MotionProps;
const MotionH2 = motion.h2 as unknown as React.FC<H2MotionComponentProps>;

type IconWrapperProps = React.HTMLAttributes<HTMLSpanElement> & MotionProps;
const MotionSpan = motion.span as unknown as React.FC<IconWrapperProps>;

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

export default function InnovationInAction() {
  return (
    <section className="bg-orange-50 py-16 lg:py-24 px-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <MotionH2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4, margin: "-100px 0px -100px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance"
          >
            Innovation In Action
          </MotionH2>
        </div>

        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25, margin: "-120px 0px -120px 0px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Showcase case studies */}
          <MotionDiv variants={item} className="space-y-4">
            <div className="flex items-start gap-3">
              <MotionSpan
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-orange-500 text-white rounded-full p-1"
              >
                <CircleCheck />
              </MotionSpan>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Showcase case studies / demos:
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Work on actual client projects with guaranteed monthly
                  payments.
                </p>
              </div>
            </div>
          </MotionDiv>

          {/* AI+AR Prototype Videos */}
          <MotionDiv variants={item} className="space-y-4">
            <div className="flex items-start gap-3">
              <MotionSpan
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-orange-500 text-white rounded-full p-1"
              >
                <CircleCheck />
              </MotionSpan>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  AI+AR Prototype Videos:
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get professional guidance to improve your skills with each
                  project.
                </p>
              </div>
            </div>
          </MotionDiv>

          {/* Grenoa Labs */}
          <MotionDiv variants={item} className="space-y-4">
            <div className="flex items-start gap-3">
              <MotionSpan
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-orange-500 text-white rounded-full p-1"
              >
                <CircleCheck />
              </MotionSpan>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Grenoa Labs – experimental hub:
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional legal protection for your freelance work.
                </p>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
