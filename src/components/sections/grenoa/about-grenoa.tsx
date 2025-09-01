import React from "react";

export default function grenovOverview() {
  return (
    <main className="h-full bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex justify-between flex-wrap gap-10 p-3 lg:gap-0">
          {/* left */}
          <div className="w-full lg:w-1/2">
            {/* About Grenov */}
            <p className="text-center text-orange-600 font-sans text-[21px] font-semibold tracking-widest mb-2 lg:text-start">
              ABOUT GRENOV
            </p>
            <p className="w-[95%] text-[32px] text-center lg:text-start lg:w-[82%]">
              Grenov is Sirtifai’s advanced innovation wing, designed to push
              boundaries in AI, AR, robotics, and next-gen digital ecosystems.
            </p>

            {/* Image */}
            <img
              src="/assets/grenov/futuristic_ai_face.png"
              alt="AI Face"
              className="w-full max-w-[500px] h-auto rounded-lg"
            />
          </div>
          {/* Right */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Vision & Mission */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-0">
              <div className="flex flex-col items-center md:items-start">
                <img
                  src="/assets/grenov/Frame_3.svg"
                  alt="Vision"
                  className="mb-2 object-contain"
                />
                <p className="text-md text-gray-700 text-center text-[15px] md:text-left max-w-xs">
                  Vision: <br /> Building a future where humans and AI
                  collaborate for progress, efficiency, and creativity.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start lg:flex-col-reverse lg:mr-[-0rem]">
                <img
                  src="/assets/grenov/Frame_4.svg"
                  alt="Mission"
                  className="object-contain"
                />
                <p className="text-md text-gray-700 text-[15px] text-center md:text-left max-w-xs lg:mb-5">
                  Mission: <br /> To integrate intelligence seamlessly into
                  every sector of society.
                </p>
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="mt-8 ml-0 lg:ml-12">
              <h2 className="text-orange-500 font-extrabold uppercase tracking-widest text-[40px] text-center leading-relaxed  lg:text-start mb-3">
                Core Capabilities
              </h2>
              <ul className="list-disc ml-3 pl-5 space-y-4 text-base leading-relaxed">
                <li className="text-md">
                  <span className="font-bold text-lg">AI & Automation</span> –
                  Smart solutions tailored to industries.
                </li>
                <li className="text-md">
                  <span className="font-bold text-lg">AR & Immersive Tech</span>{" "}
                  – Bridging physical and digital experiences.
                </li>
                <li className="text-md">
                  <span className="font-bold text-lg">Data Intelligence</span> –
                  Harnessing big data for predictive insights.
                </li>
                <li className="text-md">
                  <span className="font-bold text-lg">
                    Enterprise Integration
                  </span>{" "}
                  – Cloud-ready, secure, and scalable systems.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
