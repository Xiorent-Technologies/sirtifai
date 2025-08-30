import React from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function PrimeInvestor() {
  return (
    <section className="w-full bg-[#FFF9F6] py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src="/assets/investors_page/vakati.jpg"
              alt="Vakati Ravichandra Reddy"
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="bg-white p-3 text-sm italic text-gray-800 border-t border-gray-200">
              - I believe every learner deserves not just skills, but verified income and lifelong career security.
              Sirtifai is the bridge between today’s talent and tomorrow’s opportunities.
            </div>
          </div>
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600 md:text-3xl">
            Vakati Ravichandra Reddy
          </h2>
          <h3 className="mt-1 text-lg font-semibold text-gray-800">Prime Investor & Visionary</h3>
          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            Vakati Ravichandra Reddy is the founding visionary and prime investor behind Sirtifai. A serial entrepreneur
            and global investor, he has led diverse ventures across education, technology, finance, aerospace, and civic
            innovation. With his strategic backing, Sirtifai is set to become the world’s first true career
            transformation engine.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-500 mt-1" />
              <span>
                Spearheading Sirtifai’s global vision to empower learners across India and international markets.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-500 mt-1" />
              <span>
                Driving investments into SPP, International, and Freelancer editions for large-scale adoption.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-500 mt-1" />
              <span>
                Championing Tier-2 & Tier-3 inclusivity, ensuring rural and underprivileged talent get global
                opportunities.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-orange-500 mt-1" />
              <span>
                Positioning Sirtifai within the Raador Holdings innovation ecosystem.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
