"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { logos } from "./logos";

// Logo component with enhanced scroll animation
interface LogoCardProps {
  logo: { id: string; file: string };
  index: number;
}

const LogoCard: React.FC<LogoCardProps> = ({ logo, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Immediate animation trigger for fast scrolling
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "15px 0px 15px 0px", // Much larger detection area for fast scrolling
      }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Determine animation direction (left/right) based on position
  const isEven = index % 2 === 0;
  const delay = (index % 18) * 5; // Stagger delay for every 18 items (3 rows)

  return (
    <div>
      {/* <p>{index}</p>
      <p>{logo.file}</p> */}
      <div
        ref={logoRef}
        className={`
        bg-white rounded-lg shadow-md hover:shadow-lg 
        p-4 flex items-center justify-center
        cursor-pointer border border-gray-100
        transition-all duration-500 ease-out
        hover:scale-105
        ${
          isVisible
            ? "opacity-100 translate-x-0 scale-100"
            : `opacity-0 scale-75 ${
                isEven ? "-translate-x-12" : "translate-x-12"
              }`
        }
      `}
        style={{
          aspectRatio: "1",
          minHeight: "120px",
          transitionDelay: isVisible ? `${delay}ms` : "0ms",
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src={`/assets/media-campaign/logo/${logo.file}`}
            alt={`Logo ${logo.id}`}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

function MediaPR() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px 0px 100px 0px",
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40">
        {/* Header */}
        <div
          ref={headerRef}
          className={`
            text-center mb-12 transition-all duration-800 ease-out
            ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Media Partners & Recognition
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;re proud to be featured and recognized by leading media
            outlets, publications, and organizations worldwide.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {logos.map((logo, index) => (
            <LogoCard key={logo.id} logo={logo} index={index} />
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            And many more trusted partners and media outlets
          </p>
        </div>
      </div>
    </section>
  );
}

export default MediaPR;
