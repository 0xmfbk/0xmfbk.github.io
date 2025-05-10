"use client"

import { useState, useEffect } from "react"

/**
 * Hook to track the active section based on scroll position
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      // Find the current section in view
      const currentSection = sectionIds.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        // Consider a section "active" when it's top is within the viewport
        // and at least 30% visible (for smaller sections)
        return rect.top <= 100 && rect.bottom >= window.innerHeight * 0.3
      })

      if (currentSection) {
        setActiveSection(currentSection)
      } else if (window.scrollY < 100) {
        // If at the top of the page, set the first section as active
        setActiveSection(sectionIds[0])
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check for active section
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds])

  return activeSection
}
