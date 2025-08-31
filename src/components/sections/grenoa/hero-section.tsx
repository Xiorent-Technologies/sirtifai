"use client"

import Image from "next/image"
import { CtaButton } from "../../common/cta-button"

export default function HeroSection() {
  return (
    <section className="relative isolate">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 px-4 md:grid-cols-2 md:gap-10">
        <div className="order-2 flex flex-col justify-start md:order-1 pt-[120px]">
          <h1 className="text-pretty font-sans text-xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            One Drop Can Change Millions of Lives
          </h1>

          <p className="mt-4 font-sans text-lg font-semibold text-gray-900 sm:text-3xl">
            From Learning to Lifetime Careers
          </p>

          <p className="mt-3 max-w-prose text-sm leading-6 text-gray-600 sm:text-lg">
            1dropindia is Sirtifai’s flagship social mission dedicated to water sustainability, access and innovation for every. We integrate technology, community, and education to solve India’s water challenges.
          </p>
          <p className="mt-3 max-w-prose text-sm leading-6 text-gray-600 sm:text-lg">
            Join SPP Now
          </p>

          <div className="mt-6 flex flex-wrap md:min-w-[600px] items-center gap-2 overflow-visible">
            <CtaButton href="#join" variant="solid">
              Join the Movement
            </CtaButton>
            <CtaButton href="#donate" variant="solid">
              Donate A Drop
            </CtaButton>
            <CtaButton href="#partner" variant="solid">
              Partner with Us
            </CtaButton>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="w-[1062px] h-[708px] rotate-[-1.651deg] flex-shrink-0 aspect-[3/2]">
            <Image
              src={"/assets/drop_i_india/flat_globe.png"}
              alt="Water droplet shaped globe illustrating global impact"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

    </section>
  )
}
