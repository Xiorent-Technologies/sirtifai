"use client";

import Image from "next/image";

const DEFAULT_ITEMS = [
  {
    title: "EDUCATION ➝",
    desc: "Smart Learning Platforms For Education",
    image: "/assets/grenov/Education.svg",
  },
  {
    title: "HEALTHCARE ➝",
    desc: "AR-Assisted Surgeries & AI Diagnostics",
    image: "/assets/grenov/Health.svg",
  },
  {
    title: "FINANCE ➝",
    desc: "Predictive Risk And Fraud Prevention ",
    image: "/assets/grenov/Finance.svg",
  },
  {
    title: "AEROSPACE & DEFENSE ➝",
    desc: "Advanced Simulations & Robotics",
    image: "/assets/grenov/Aerospace.svg",
  },
  {
    title: "GOVERNMENT  + ➝ \n DIGITAL",
    desc: "Governance & Public Service AI ",
    image: "/assets/grenov/Government.svg",
  },
];

export default function IndustryApplications({
  items = DEFAULT_ITEMS,
}: {
  items?: typeof DEFAULT_ITEMS;
}) {
  return (
    <section id="applications" className="w-full py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">
            Industry Applications
          </h2>
        </header>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it, idx) => (
            <article
              key={it.title + idx}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={it.image}
                alt={`${it.title} illustration`}
                width={112}
                height={112}
                className="h-full w-full object-cover"
              />

              <h3 className="text-sm font-bold uppercase tracking-wide">
                {it.title}
              </h3>
              <p className="mt-1 text-sm text-gray-700 max-w-[14ch]">
                {it.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
