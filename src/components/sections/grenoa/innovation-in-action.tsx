"use client"

import { CheckCircle2 } from "lucide-react"

type Feature = { title: string; desc: string }

const DEFAULT_FEATURES: Feature[] = [
  {
    title: "Showcase case studies / demos:",
    desc: "Work on actual client projects with guaranteed monthly payments.",
  },
  {
    title: "AI+AR Prototype Videos.",
    desc: "Get professional guidance to improve your skills with each project.",
  },
  {
    title: "Grenov Labs – experimental hub.",
    desc: "Professional legal protection for your freelance work.",
  },
]

export default function InnovationInAction({ features = DEFAULT_FEATURES }: { features?: Feature[] }) {
  return (
    <section id="innovation" className="w-full bg-[#FFF9F6] py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Innovation In Action</h2>
        </header>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-start text-left">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}