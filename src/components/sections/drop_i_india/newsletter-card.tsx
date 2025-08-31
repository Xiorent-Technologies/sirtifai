"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "../../../../lib/utils"

export default function NewsletterCard({
  onSubmit,
}: {
  onSubmit?: (email: string) => void
}) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    onSubmit?.(email)
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h4 className="font-sans text-lg font-semibold text-gray-900">Get in touch with Sirtifai</h4>
            <p className="mt-1 text-sm text-gray-600">
              Subscribe for updates and opportunities to make your drop count.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full max-w-md items-center gap-2">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={cn(
                "h-10 w-full flex-1 rounded-full border border-gray-300 px-4 text-sm outline-none",
                "focus:border-orange-400 focus:ring-2 focus:ring-orange-200",
              )}
            />
            <button
              type="submit"
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800"
            >
              Build Future
            </button>
          </form>
        </div>

        {submitted && <p className="mt-3 text-xs text-gray-500">Thanks! We&apos;ll reach out soon.</p>}
      </div>
    </section>
  )
}
