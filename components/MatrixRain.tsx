"use client"
import { useEffect, useRef } from "react"

function MatrixRain({ className = "", style = {} }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = canvas.parentElement?.offsetHeight || window.innerHeight
    canvas.width = width
    canvas.height = height

    const fontSize = 18
    const columns = Math.floor(width / fontSize)
    const drops = Array.from({ length: columns }, () => Math.random() * height / fontSize)
    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*".split("")

    function draw() {
      if (!ctx) return
      ctx.fillStyle = "rgba(0,0,0,0.15)"
      ctx.fillRect(0, 0, width, height)
      ctx.font = `${fontSize}px monospace`
      ctx.fillStyle = "#10b981"
      for (let i = 0; i < columns; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    let animationId: number
    function animate() {
      draw()
      animationId = requestAnimationFrame(animate)
    }
    animate()

    function handleResize() {
      if (!canvas) return
      width = window.innerWidth
      height = canvas.parentElement?.offsetHeight || window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full opacity-30 pointer-events-none select-none z-0 ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}

export default MatrixRain; 