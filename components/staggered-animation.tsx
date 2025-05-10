"use client"

import React, { type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StaggeredAnimationProps {
  children: ReactNode
  className?: string
  delayIncrement?: number
  initialDelay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  staggerChildren?: boolean
  once?: boolean
  threshold?: number
}

export default function StaggeredAnimation({
  children,
  className,
  delayIncrement = 0.1,
  initialDelay = 0,
  direction = "up",
  duration = 0.5,
  staggerChildren = true,
  once = true,
  threshold = 0.1,
  ...props
}: StaggeredAnimationProps) {
  // Define animation variants based on direction
  const getVariants = () => {
    const distance = 30 // pixels to move during animation

    const directionVariants = {
      up: {
        hidden: { y: distance, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      },
      down: {
        hidden: { y: -distance, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      },
      left: {
        hidden: { x: distance, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      },
      right: {
        hidden: { x: -distance, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      },
    }

    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerChildren ? delayIncrement : 0,
          delayChildren: initialDelay,
        },
      },
      item: directionVariants[direction],
    }
  }

  const variants = getVariants()

  // Clone children and wrap each in a motion.div
  const animatedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child

    return (
      <motion.div
        variants={variants.item}
        transition={{
          duration,
          ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier easing for a smooth feel
        }}
      >
        {child}
      </motion.div>
    )
  })

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, threshold }}
      variants={variants}
      {...props}
    >
      {animatedChildren}
    </motion.div>
  )
}
