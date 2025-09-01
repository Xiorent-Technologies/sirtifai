"use client";
import Image from "next/image";

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

  return (
    <section className="py-16 bg-[#FFF9F5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Programme Journey
        </h2>

        {/* Desktop Cards Grid */}
        <div className="hidden md:grid grid-cols-2 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-6 bg-[#FFF9F5] rounded-lg overflow-hidden"
            >
              {/* Left Image */}
              <div className="flex-shrink-0">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="object-cover rounded-t-lg"
                />
              </div>

              {/* Right Content */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#FE7743] mb-1">
                  {item.title}
                </h3>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {item.desc}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{item.detail}</p>
                <button className="bg-[#FE7743] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#e25c29] transition">
                  Donate now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards - Vertical Stack with Alternating Layout */}
        <div className="md:hidden space-y-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex ${
                i % 2 === 1 ? 'flex-row-reverse' : 'flex-row'
              } gap-3 items-start`}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-32 h-24">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={128}
                  height={96}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className={`flex-1 ${i % 2 === 1 ? 'text-right' : 'text-left'}`}>
                <h3 className="text-lg font-bold text-[#FE7743] mb-1">
                  {item.title}
                </h3>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 leading-tight">
                  {item.desc}
                </h4>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                  {item.detail}
                </p>
                <button className="bg-[#FE7743] text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-[#e25c29] transition-colors">
                  Donate now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}