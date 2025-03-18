"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight * 0.6

    // Create floating text snippets
    const snippets = [
      "AI Revolution",
      "Web 3.0",
      "Cloud Computing",
      "Machine Learning",
      "UX Design",
      "DevOps",
      "Blockchain",
      "IoT",
      "Cybersecurity",
      "Digital Transformation",
      "Big Data",
      "Mobile Development",
    ]

    const textParticles: {
      x: number
      y: number
      text: string
      speed: number
      opacity: number
      size: number
    }[] = []

    snippets.forEach((snippet) => {
      textParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: snippet,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        size: Math.random() * 10 + 14,
      })
    })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#1e3a8a")
      gradient.addColorStop(1, "#3730a3")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw text particles
      textParticles.forEach((particle) => {
        ctx.font = `${particle.size}px sans-serif`
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fillText(particle.text, particle.x, particle.y)

        // Move particles
        particle.y -= particle.speed

        // Reset if off screen
        if (particle.y < -20) {
          particle.y = canvas.height + 20
          particle.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.6
    }

    animate()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 bg-blue-900/40 z-10" />

      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Stay Ahead with Espoir Insights
          </motion.h1>

          <motion.p
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert articles, industry trends, and technology insights to keep you at the forefront of digital innovation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <Input
                type="text"
                placeholder="Search articles..."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-blue-500 pr-10"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full text-white/60 hover:text-white hover:bg-transparent"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

