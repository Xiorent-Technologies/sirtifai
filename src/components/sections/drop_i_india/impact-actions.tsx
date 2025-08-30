import Image from "next/image"
import { CtaButton } from "../../common/cta-button"

export default function ImpactActions() {
  return (
    <section className="relative mx-auto  px-4 pb-12 sm:pb-16">
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-10">
        <Image
          src="/assets/drop_i_india/autumn.jpg"
          alt="autumn"
          fill
          className="object-cover opacity-20 w-[100vw]" // adjust opacity as needed
          priority
        />
      </div> */}

      <div className="mx-auto w-[70%] rounded-md bg-[#FEF7F1] py-6 shadow-2xl relative z-10">
        <h2 className="text-center font-sans text-xl font-extrabold tracking-wide text-[#FE7743] sm:text-4xl">
          “Every Drop Counts. Make Yours Matter.”
        </h2>
      </div>

      <div className="max-w-2xl mx-auto px-4 pb-12 pt-20 sm:pb-16 relative z-10">
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-6 text-center">
            “Every Drop Counts. Make Yours Matter.” is a powerful reminder that even the smallest actions can create meaningful impact. Just like a single drop of water contributes to filling an ocean, every individual effort—whether it’s donating, volunteering, or spreading awareness—adds up to create lasting change. The phrase emphasizes both collective responsibility and personal accountability, inspiring people not to underestimate their contribution. It’s a call to action that urges everyone to recognize the value of their role and to use it for something bigger than themselves. Ultimately, it means that no effort is too small, and when we choose to make our “drop” count, we help shape a better, brighter future.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-[#FE7743] hover:bg-[#FE7743] text-white font-medium text-[.75rem] md:text-base px-2 md:px-10 py-2 md:py-4 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
              Donate Now
            </button>
            <button className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-[#284050] text-white font-medium text-[.75rem] md:text-base px-10 py-4 shadow-sm hover:bg-[#284050] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
              Schedule A Free Call
            </button>
        </div>
      </div>
    </section>
  )
}
