"use client"

import { ReactNode } from "react"

interface GradientSpanProps {
  children: ReactNode
  gradient: string
  className?: string
}

export function GradientSpan({ children, gradient, className = "" }: GradientSpanProps) {
  return (
    <span className={`text-gradient bg-gradient-to-r ${gradient} ${className}`}>
      {children}
    </span>
  )
}