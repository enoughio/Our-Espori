"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(100, 149, 237, ${Math.random() * 0.5 + 0.1})`,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
      }

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-indigo-900/80 z-10" />

      <div className="container relative z-20 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Innovating the Future, One Solution at a Time.
            </motion.h1>

            <motion.p
              className="text-xl text-blue-100 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Espoir helps businesses scale with high-performance software solutions, AI-driven automation, and
              user-first designs.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline" size="lg" className="border-blue-300 text-white hover:bg-blue-800/20">
                <Link href="#projects" className="flex items-center">
                  Explore Our Work
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-2xl backdrop-blur-sm border border-white/10 p-6 shadow-xl">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute top-4 left-4 right-4 h-8 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-md backdrop-blur-sm border border-white/10"></div>
                <div className="absolute top-16 left-4 right-4 h-40 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-md backdrop-blur-sm border border-white/10"></div>
                <div className="absolute top-60 left-4 w-1/2 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-md backdrop-blur-sm border border-white/10"></div>
                <div className="absolute top-60 right-4 w-1/3 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-md backdrop-blur-sm border border-white/10"></div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-70"></div>
                <div className="absolute top-4 right-16 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-40"></div>
                <div className="absolute top-4 right-28 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

