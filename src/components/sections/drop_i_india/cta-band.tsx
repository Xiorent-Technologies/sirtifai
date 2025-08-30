import { CtaButton } from "../../common/cta-button"

export default function CtaBand() {
  return (
    <section className="bg-orange-500">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-10 sm:items-center sm:justify-between sm:py-12 md:flex-row">
        <div className="max-w-2xl">
          <h3 className="text-pretty font-sans text-xl font-bold text-white sm:text-2xl">
            Start your journey today and build a successful career.
          </h3>
          <p className="mt-2 text-sm leading-6 text-orange-50">
            Our expert advisors are here to guide you in selecting the perfect plan—whether local or global—to align
            with your professional aspirations.
          </p>
        </div>

        <div className="shrink-0">
          <CtaButton href="#volunteer" variant="solid" className="bg-white text-orange-600 hover:bg-orange-50 rounded-4xl ">
            <p className="text-2xl">Volunteer Today</p>
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
