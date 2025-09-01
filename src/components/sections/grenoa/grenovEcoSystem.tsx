import React from "react";
import Image from "next/image";
function GrenovEcoSystem() {
  return (
    <main className="h-full bg-orange-50">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <h2 className="text-3xl lg:text-5xl text-center font-extrabold">
          Grenov Ecosystem
        </h2>
        <h2 className="text-center text-xs mt-6">
          How Grenoa fits into Sirtifai: Positioned as the R&D powerhouse
          fueling innovations across Sirtifai products.
        </h2>
        <div className="flex items-center justify-center space-x-4 w-[50%] mx-auto mt-2">
          {/* Left Circle */}
          <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>

          {/* Center line */}
          <div className="flex-1 h-px mx-1 bg-gray-800 mr-4" />

          {/* Right Circle */}
          <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/assets/grenov/GravonEcoSystem.svg"
            alt="GravonEcosystem"
            width={150}
            height={150}
            className="w-full h-auto object-contain mt-5 lg:mt-10 lg:w-[65%]"
            priority
          />
        </div>
      </div>
    </main>
  );
}

export default GrenovEcoSystem;
