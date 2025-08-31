import React from "react";

export default function grenovOverview() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start font-sans text-gray-900">
      {/* LEFT SECTION */}
      <div className="space-y-6">
        <div>
          <h3 className="text-[#ff6a00] uppercase tracking-widest font-semibold text-sm">
            About grenov
          </h3>
          <p className="mt-2 text-gray-800 leading-relaxed text-xl max-w-prose">
            grenov is Sirtifai’s advanced innovation wing, designed to push boundaries in AI, AR, robotics,and next-gen digital ecosystems.          </p>
        </div>

        <div className="mt-4">
          {/* large AI head image (provided) */}
          <img
            src="/assets/grenov/futuristic_ai_face.png"
            alt="Futuristic AI face"
            className="w-[80%] object-contain rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col justify-start space-y-8">
        {/* Top: two oval images with short captions (stacked) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission: Image first, then text */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-40 h-56 rounded-3xl overflow-hidden bg-gray-50 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
                alt="Mission visual"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-sm max-w-xs">
              <p className="font-semibold text-gray-800">Mission:</p>
              <p className="text-gray-700 leading-tight">
                To integrate intelligence seamlessly into every sector of society.
              </p>
            </div>
          </div>

          {/* Vision: Text first, then image */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="text-sm max-w-xs">
              <p className="font-semibold text-gray-800">Vision:</p>
              <p className="text-gray-700 leading-tight">
                Building a future where humans and AI collaborate for progress,
                efficiency, and creativity.
              </p>
            </div>
            <div className="w-40 h-56 rounded-3xl overflow-hidden bg-gray-50 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
                alt="Vision visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>




        {/* Core Capabilities */}
        <div>
          <h3 className="text-[#ff6a00] uppercase tracking-widest font-bold text-2xl mb-4">
            Core Capabilities
          </h3>

          <ul className="space-y-4 text-gray-800 text-xl">
            <li className="flex items-start gap-3">
              {/* <span className="mt-1 text-black text-lg">•</span> */}
              <p className="leading-tight">
                <span className="font-bold">AI & Automation –</span> Smart
                solutions tailored to industries.
              </p>
            </li>

            <li className="flex items-start gap-3">
              {/* <span className="mt-1 text-black text-lg">•</span> */}
              <p className="leading-tight">
                <span className="font-bold">AR & Immersive Tech –</span>{" "}
                Bridging physical and digital experiences.
              </p>
            </li>

            <li className="flex items-start gap-3">
              {/* <span className="mt-1 text-black text-lg">•</span> */}
              <p className="leading-tight">
                <span className="font-bold">Data Intelligence –</span>{" "}
                Harnessing big data for predictive insights.
              </p>
            </li>

            <li className="flex items-start gap-3">
              {/* <span className="mt-1 text-black text-lg">•</span> */}
              <p className="leading-tight">
                <span className="font-bold">Enterprise Integration –</span>{" "}
                Cloud-ready, secure, and scalable systems.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
