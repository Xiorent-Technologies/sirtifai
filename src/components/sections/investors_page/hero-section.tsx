"use client"

import Image from "next/image"
import { CtaButton } from "../../common/cta-button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
const heroIllustration = "/assets/investors_page/hero-illustration.png"

const MotionDiv = motion.div as React.ComponentType<any>
const MotionImg = motion.img as React.ComponentType<any>
const MotionH1 = motion.h1 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionSection = motion.section as React.ComponentType<any>
export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null)
  const whySertifaiRef = useRef<HTMLDivElement>(null)
  const industriesRef = useRef<HTMLDivElement>(null)
  const howDifferentRef = useRef<HTMLDivElement>(null)

  const heroInView = useInView(heroRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
          <MotionSection
        ref={heroRef}
        className="pt-2 sm:pt-10 md:pt-16 pb-10 bg-white"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Heading */}
            <MotionH1
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Learn. Earn. Get
              <br />
              Placed. Rise.
            </MotionH1>

            {/* Subheading */}
            <MotionP
              className="text-xs sm:text-sm md:text-base lg:text-lg mt-4 sm:mt-5 text-[#989491] max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              India's first Job-First Education Ecosystem, building skilled professionals with real work experience and
              lifetime career support.
            </MotionP>

            {/* Join Now Section */}
            <MotionDiv
              className="mt-6 sm:mt-8 w-full overflow-hidden text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-nowrap items-center justify-start gap-2 sm:gap-4 w-full whitespace-nowrap leading-none text-[clamp(0.95rem,3vw,1rem)] md:text-[clamp(0.85rem,2vw,1.4rem)]">
                {/* Label */}
                <span className="font-semibold text-orange-600">Join Now :</span>

                {/* Links */}
                <a href="/sirtifai-international" className="text-orange-600 font-medium">
                  International
                </a>
                <span className="text-orange-600">|</span>
                <a href="/freelancer" className="text-orange-600 font-medium">
                  Freelance
                </a>
                <span className="text-orange-600">|</span>
                <a href="/program" className="text-orange-600 font-medium">
                  SPP Student
                </a>
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* Right illustration */}
          <MotionDiv
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MotionImg
              src={heroIllustration}
              alt="Hero illustration"
              className="w-full max-w-lg mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </MotionDiv>
        </div>
            </MotionSection>
  )
}
