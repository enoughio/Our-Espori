"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ExternalLink, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  challenge: string
  solution: string
  results: string
  technologies: string[]
}

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Investment Dashboard",
      category: "Finance",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Smart analytics platform for financial institutions with real-time market insights and AI-driven recommendations.",
      challenge:
        "The client needed a way to analyze vast amounts of financial data quickly and make informed investment decisions based on market trends and historical patterns.",
      solution:
        "We developed an AI-powered dashboard that processes market data in real-time, identifies patterns, and provides actionable investment recommendations with risk assessments.",
      results:
        "Increased investment returns by 27% for clients, reduced analysis time by 85%, and improved decision-making accuracy by 42%.",
      technologies: ["React", "Node.js", "TensorFlow", "AWS", "PostgreSQL"],
    },
    {
      id: 2,
      title: "SaaS E-commerce Platform",
      category: "Retail",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Scalable and secure e-commerce solution with multi-currency support, inventory management, and analytics.",
      challenge:
        "The client was struggling with an outdated e-commerce platform that couldn't handle their growing product catalog and international customer base.",
      solution:
        "We built a custom SaaS e-commerce platform with advanced inventory management, multi-currency support, and integrated analytics to track customer behavior.",
      results:
        "Boosted conversion rates by 35%, reduced load times by 60%, and increased average order value by 22% within the first quarter after launch.",
      technologies: ["Next.js", "GraphQL", "MongoDB", "Stripe", "Docker"],
    },
    {
      id: 3,
      title: "Cloud-Based ERP",
      category: "Enterprise",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Comprehensive enterprise resource planning system automating workflows and integrating business processes.",
      challenge:
        "The client's legacy ERP system was causing data silos, inefficient workflows, and limiting their ability to scale operations.",
      solution:
        "We developed a cloud-based ERP solution that integrated all business functions, automated key workflows, and provided real-time reporting and analytics.",
      results:
        "Reduced operational costs by 30%, increased productivity by 45%, and improved data accuracy by 98% across all departments.",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "Docker", "AWS"],
    },
    {
      id: 4,
      title: "HealthTech App",
      category: "Healthcare",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "AI-driven diagnostics platform for healthcare providers with patient monitoring and predictive analytics capabilities.",
      challenge:
        "The client needed to improve diagnostic accuracy and patient monitoring while reducing the burden on healthcare staff.",
      solution:
        "We created an AI-powered healthcare application that analyzes patient data, provides diagnostic suggestions, and continuously monitors patient vitals for early intervention.",
      results:
        "Improved diagnostic accuracy by 42%, reduced wait times by 35%, and enabled early intervention in critical cases, potentially saving lives.",
      technologies: ["React Native", "Python", "TensorFlow", "Google Cloud", "MongoDB"],
    },
    {
      id: 5,
      title: "Smart City Management System",
      category: "Government",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Integrated urban management platform with IoT sensors, data analytics, and citizen engagement tools.",
      challenge:
        "The city administration struggled with inefficient resource allocation, poor citizen communication, and lack of data-driven decision making.",
      solution:
        "We developed a comprehensive smart city platform that integrates IoT sensors, provides real-time analytics, and offers citizen engagement tools for feedback and service requests.",
      results:
        "Reduced energy consumption by 25%, improved emergency response times by 40%, and increased citizen satisfaction ratings by 65%.",
      technologies: ["Angular", "Node.js", "IoT", "Azure", "PostgreSQL"],
    },
    {
      id: 6,
      title: "EdTech Learning Platform",
      category: "Education",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Adaptive learning system with personalized content delivery and progress tracking for educational institutions.",
      challenge:
        "The client wanted to transform traditional learning with a platform that adapts to individual student needs and provides actionable insights to educators.",
      solution:
        "We built an adaptive learning platform that personalizes content based on student performance, provides detailed analytics to teachers, and gamifies the learning experience.",
      results:
        "Increased student engagement by 78%, improved test scores by 32% on average, and reduced dropout rates by 45% in pilot programs.",
      technologies: ["React", "Django", "PostgreSQL", "AWS", "Redis"],
    },
  ]

  const categories = ["All", ...new Set(projects.map((project) => project.category))]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="w-full py-20 bg-white dark:bg-blue-950">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Our Featured Projects
          </h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions across various industries
          </p>
        </motion.div>

        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className="overflow-hidden h-full bg-white dark:bg-blue-900/20 border-blue-200 dark:border-blue-700/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-4">
                          <Badge className="mb-2 bg-blue-600 hover:bg-blue-700 text-white border-none">
                            {project.category}
                          </Badge>
                          <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-blue-700 dark:text-blue-300 line-clamp-3 mb-4">{project.description}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 p-0 h-auto"
                      >
                        View Case Study
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-blue-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70 z-10"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">{selectedProject.title}</h3>
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none">
                      {selectedProject.category}
                    </Badge>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Challenge</h4>
                      <p className="text-blue-700 dark:text-blue-300">{selectedProject.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Solution</h4>
                      <p className="text-blue-700 dark:text-blue-300">{selectedProject.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Results</h4>
                      <p className="text-blue-700 dark:text-blue-300">{selectedProject.results}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
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
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0">
                      Visit Live Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

