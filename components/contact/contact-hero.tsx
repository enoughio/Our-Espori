"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function ContactHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight * 0.5

    // Create abstract wave animation
    const waves = [
      { y: canvas.height * 0.2, amplitude: 20, frequency: 0.02, speed: 0.05, color: "rgba(59, 130, 246, 0.3)" },
      { y: canvas.height * 0.5, amplitude: 30, frequency: 0.01, speed: 0.03, color: "rgba(79, 70, 229, 0.3)" },
      { y: canvas.height * 0.8, amplitude: 25, frequency: 0.015, speed: 0.04, color: "rgba(99, 102, 241, 0.3)" },
    ]

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#1e3a8a")
      gradient.addColorStop(1, "#3730a3")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw waves
      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, wave.y)

        for (let x = 0; x < canvas.width; x++) {
          const y = wave.y + Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        ctx.fillStyle = wave.color
        ctx.fill()
      })

      time += 1
      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.5

      // Update wave positions on resize
      waves[0].y = canvas.height * 0.2
      waves[1].y = canvas.height * 0.5
      waves[2].y = canvas.height * 0.8
    }

    animate()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Build Something Amazing Together
          </motion.h1>

          <motion.p
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reach out to discuss your project, ask questions, or schedule a consultation
          </motion.p>
        </div>
      </div>
    </section>
  )
}

