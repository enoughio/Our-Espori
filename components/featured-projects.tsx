"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  results: string
}

export default function FeaturedProjects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "FinTech AI Dashboard",
      description: "Smart investment tracking platform with AI-powered insights and real-time analytics.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Node.js", "TensorFlow", "AWS"],
      results: "Increased investment returns by 27% for clients",
    },
    {
      id: 2,
      title: "E-commerce Web App",
      description: "Scalable e-commerce platform built for global brands with multi-currency support.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Next.js", "GraphQL", "MongoDB", "Stripe"],
      results: "Boosted conversion rates by 35% and reduced load times by 60%",
    },
    {
      id: 3,
      title: "Healthcare AI System",
      description: "Real-time patient insights platform for healthcare providers with predictive analytics.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Python", "Django", "PyTorch", "Google Cloud"],
      results: "Improved diagnostic accuracy by 42% and reduced wait times",
    },
    {
      id: 4,
      title: "Cloud ERP for Enterprises",
      description: "Comprehensive ERP solution automating workflows and integrating business processes.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "Docker"],
      results: "Reduced operational costs by 30% and increased productivity",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
    scrollToProject((activeIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
    scrollToProject((activeIndex - 1 + projects.length) % projects.length)
  }

  const scrollToProject = (index: number) => {
    if (scrollRef.current) {
      const scrollAmount = index * (scrollRef.current.scrollWidth / projects.length)
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="projects" className="w-full py-20 bg-blue-50 dark:bg-blue-950">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Featured Projects</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">Transforming Ideas into Digital Reality</p>
        </motion.div>

        <div className="relative">
          <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="min-w-full snap-center px-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-white dark:bg-blue-900/20 border-blue-200 dark:border-blue-700/30">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="relative h-[300px] lg:h-auto overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-3">{project.title}</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">{project.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700/50"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">Results:</h4>
                        <p className="text-blue-700 dark:text-blue-300">{project.results}</p>
                      </div>

                      <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0 w-fit">
                        View Full Case Study
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-blue-900/80 border-blue-200 dark:border-blue-700/50 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-800/50 z-10 hidden md:flex"
            onClick={prevProject}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-blue-900/80 border-blue-200 dark:border-blue-700/50 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-800/50 z-10 hidden md:flex"
            onClick={nextProject}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-blue-600 dark:bg-blue-400" : "bg-blue-200 dark:bg-blue-700"
              }`}
              onClick={() => {
                setActiveIndex(index)
                scrollToProject(index)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

