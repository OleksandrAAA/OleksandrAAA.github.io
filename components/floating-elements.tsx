"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-4 h-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Larger floating elements */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={`large-${i}`}
          className={`absolute w-8 h-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 1}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}
