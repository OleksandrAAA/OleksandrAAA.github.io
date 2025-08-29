"use client"

import { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  className?: string
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 
                  bg-clip-text text-transparent ${className}`}
      style={{
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent", // ensures CEF compatibility
      }}
    >
      {children}
    </span>
  )
}
