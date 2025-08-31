"use client"

import Image from "next/image"
import Marquee from "react-fast-marquee"

type Logo = { alt: string; src: string }

const DEFAULT_LOGOS: Logo[] = [
  { alt: "coinmarketcap", src: "/logos/coinmarketcap.png" },
  { alt: "coingecko", src: "/logos/coingecko.png" },
  { alt: "cryptocompare", src: "/logos/cryptocompare.png" },
  { alt: "coinpaprika", src: "/logos/coinpaprika.png" },
  { alt: "nomics", src: "/logos/nomics.png" },
  { alt: "messari", src: "/logos/messari.png" },
  { alt: "livecoinwatch", src: "/logos/livecoinwatch.png" },
]

export default function LogoMarquee({ logos = DEFAULT_LOGOS }: { logos?: Logo[] }) {
  return (
    <section id="partners" className="w-full py-16">
      <div className="mx-auto max-w-6xl px-6">

        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="flex items-center gap-12"
        >
          {logos.map((logo, idx) => (
            <div key={logo.alt + idx} className="mx-6 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={`${logo.alt} logo`}
                width={140}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
