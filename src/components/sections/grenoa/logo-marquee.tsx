"use client";

import Image from "next/image";

type Logo = { alt: string; src: string; title: string };

const DEFAULT_LOGOS: Logo[] = [
  {
    alt: "coinmarketcap",
    src: "/assets/Logos/coinmarketcamp.svg",
    title: "coinmarketcamp",
  },
  {
    alt: "coinpaprika",
    src: "/assets/Logos/coinpaprika.svg",
    title: "coinpaprika",
  },
  { alt: "nomics", src: "/assets/Logos/nomics.svg", title: "nomics" },
  { alt: "messari", src: "/assets/Logos/messari.svg", title: "messari" },
  {
    alt: "livecoinwatch",
    src: "/assets/Logos/livecoinwatch.svg",
    title: "livecoinwatch",
  },
  {
    alt: "coingeeco",
    src: "/assets/Logos/coingeeco.svg",
    title: "coingeeco",
  },
  {
    alt: "cryptocompare",
    src: "/assets/Logos/cryptocompare.svg",
    title: "cryptocompare",
  },
  {
    alt: "coinmarketcap",
    src: "/assets/Logos/coinmarketcap_2.svg",
    title: "coinmarketcap",
  },
];

export default function LogoMarquee({
  logos = DEFAULT_LOGOS,
}: {
  logos?: Logo[];
}) {
  return (
    <section id="partners" className="w-full py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between flex-col gap-12 lg:flex-row lg:gap-0">
          {logos.map((logo, idx) => (
            <div
              key={logo.alt + idx}
              className="mx-6 flex items-center justify-center"
            >
              <div className="flex flex-col justify-center items-center py-1">
                <Image
                  src={logo.src}
                  alt={`${logo.alt} logo`}
                  width={150}
                  height={150}
                  className="h-22 w-auto object-contain"
                />
                <h2 className="text-md font-semibold">{logo.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
