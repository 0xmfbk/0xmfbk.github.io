"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"
import { ANIMATION_CONFIG } from "@/components/animation-config"

interface UseSectionAnimationOptions {
  threshold?: number
  once?: boolean
  delay?: number
}

/**
 * Custom hook for section animations
 * Returns whether the section is in view and animation classes
 */
export function useSectionAnimation({
  threshold = ANIMATION_CONFIG.viewport.amount,
  once = true,
  delay = 0,
}: UseSectionAnimationOptions = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [isInView, hasAnimated, delay])

  // Animation classes based on state
  const animationClass = hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"

  return { ref, isInView, hasAnimated, animationClass }
}
