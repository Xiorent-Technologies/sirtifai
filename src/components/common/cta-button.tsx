import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "../../../lib/utils"

type Props = {
  href: string
  children: React.ReactNode
  variant?: "solid" | "outline" | "ghost"
  className?: string
  withArrow?: boolean
}

export function CtaButton({
  href,
  children,
  variant = "solid",
  className,
  withArrow = true,
}: Props) {
  const base =
    "cursor-pointer px-2 py-2 sm:px-6 sm:py-[14px] rounded-lg text-[10px] sm:text-sm font-medium flex items-center justify-between gap-2 sm:min-w-[140px] group hover:shadow-md transition-all duration-300 hover:scale-105"

  const styles = {
    solid: "bg-[#FEF7F1] text-gray-700 hover:bg-gray-50",
    outline: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  } as const

  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      <span className="text-[#FC4C03]">{children}</span>
      {withArrow && (
        <ArrowRight
          size={16}
          className="group-hover:translate-x-2 transition-transform duration-300"
        />
      )}
    </Link>
  )
}
