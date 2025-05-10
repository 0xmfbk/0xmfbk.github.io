"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  once?: boolean
  threshold?: number
  id?: string
}

export default function SectionAnimation({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
  threshold = 0.1,
  id,
  ...props
}: SectionAnimationProps) {
  // Define animation variants based on direction
  const getVariants = () => {
    const distance = 50 // pixels to move during animation

    switch (direction) {
      case "up":
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "down":
        return {
          hidden: { y: -distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "left":
        return {
          hidden: { x: distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "right":
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      default:
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
    }
  }

  return (
    <motion.div
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, threshold }}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier easing for a smooth feel
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
