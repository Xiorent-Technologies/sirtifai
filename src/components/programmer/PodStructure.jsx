"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function PodStructure() {
  const [open, setOpen] = useState(null);

  const pods = [
    "1 Pod = 1,000 candidates + 22 Expert staff",
    "Staff roles mirror global IT companies – you gain real-world exposure",
    "800 Pods Worldwide – 8,00,000 learners trained, 17,600 IT professionals guiding",
    "Every pod functions as a mini IT company, ensuring practical, project-driven learning",
  ];

  return (
    <section className="bg-[#fef6f2] relative overflow-hidden">
      {/* Top Full Orange Strip */}
      <div className="w-full bg-[#FE7743] h-4" />

      <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
        {/* Cards */}
        {pods.map((pod, i) => (
          <div
            key={i}
            className="flex items-center gap-10 bg-white shadow-lg rounded-lg p-12 mb-6 cursor-pointer hover:shadow-xl transition"
          >
            <Plus className="text-black-800 w-6 h-6" />
            <p className="text-gray-800 text-base font-medium">{pod}</p>
          </div>
        ))}
      </div>


      {/* Decorative Image Bottom Left */}
     {/* <div className="absolute bottom-0 left-0 w-40 md:w-60 lg:w-72 opacity-90">
  <Image
    src="/assets/programmers/Sirtifai Design.png"
    alt="Decorative Curve"
    width={300}
    height={300}
    className="object-contain"
  />
</div> */}

    </section>
  );
}
