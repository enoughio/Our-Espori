"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PortfolioHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight * 0.7

    // Create 3D carousel effect
    const projects = [
      { x: 0, y: 0, z: 0, opacity: 1, scale: 1, image: "/placeholder.svg?height=400&width=600" },
      { x: 0, y: 0, z: 0, opacity: 0.7, scale: 0.8, image: "/placeholder.svg?height=400&width=600" },
      { x: 0, y: 0, z: 0, opacity: 0.5, scale: 0.6, image: "/placeholder.svg?height=400&width=600" },
      { x: 0, y: 0, z: 0, opacity: 0.3, scale: 0.4, image: "/placeholder.svg?height=400&width=600" },
    ]

    const images: HTMLImageElement[] = []
    let imagesLoaded = 0

    projects.forEach((project, index) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = project.image
      img.onload = () => {
        imagesLoaded++
        if (imagesLoaded === projects.length) {
          animate()
        }
      }
      images.push(img)
    })

    const calculatePositions = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.2

      projects.forEach((project, index) => {
        const angle = (index / projects.length) * Math.PI * 2 + Date.now() * 0.0005
        project.x = centerX + Math.cos(angle) * radius
        project.y = centerY + Math.sin(angle) * radius * 0.3 // Flatten the circle to make it more like an oval
        project.z = Math.sin(angle) * radius

        // Adjust opacity and scale based on z position
        project.opacity = 0.4 + ((project.z + radius) / (radius * 2)) * 0.6
        project.scale = 0.4 + ((project.z + radius) / (radius * 2)) * 0.6
      })

      // Sort by z-index for proper rendering
      projects.sort((a, b) => a.z - b.z)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#1e3a8a")
      gradient.addColorStop(1, "#3730a3")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      calculatePositions()

      // Draw projects
      projects.forEach((project, index) => {
        const width = 300 * project.scale
        const height = 200 * project.scale

        ctx.globalAlpha = project.opacity
        ctx.drawImage(images[index], project.x - width / 2, project.y - height / 2, width, height)
      })

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.7
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
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
            Building the Future, One Project at a Time
          </motion.h1>

          <motion.p
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our portfolio of innovative digital solutions that have transformed businesses across industries
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 border-0">
              See All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

