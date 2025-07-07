"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-0 shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:scale-110 hover:shadow-xl dark:shadow-blue-500/25"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </Button>
      )}
    </>
  )
}
