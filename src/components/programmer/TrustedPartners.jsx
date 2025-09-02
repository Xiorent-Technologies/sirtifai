"use client";
import Image from "next/image";

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

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Orange Top Bar */}
      <div className="w-full bg-[#FE7743] py-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Trusted Partners in Training And <br /> Placement
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Left Image with ONLY Top & Left Orange Border */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden relative">
            <Image
              src="/assets/programmers/Partners.png"
              alt="Partner"
              width={500}
              height={400}
              className="rounded-lg shadow-lg relative z-10"
            />
            {/* Orange Border Overlay */}
            <div className="absolute top-0 left-0 w-full h-full border-t-[10px] border-l-[10px] border-[#FE7743] rounded-lg pointer-events-none"></div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="space-y-6">
          {partners.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
              <span className="inline-block text-xs font-medium bg-[#FDEEE7] text-[#FE7743] px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
