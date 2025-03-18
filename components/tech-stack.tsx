"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function TechStack() {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: "Ruby on Rails", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Firebase", category: "Database" },
    { name: "AWS", category: "Cloud & DevOps" },
    { name: "Google Cloud", category: "Cloud & DevOps" },
    { name: "Docker", category: "Cloud & DevOps" },
    { name: "Kubernetes", category: "Cloud & DevOps" },
    { name: "TensorFlow", category: "AI & Data Science" },
    { name: "OpenAI", category: "AI & Data Science" },
    { name: "LangChain", category: "AI & Data Science" },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollWidth = container.scrollWidth
    const clientWidth = container.clientWidth

    if (scrollWidth <= clientWidth) return

    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0
      }

      if (container) {
        container.scrollLeft = scrollPosition
      }

      requestAnimationFrame(scroll)
    }

    const animation = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animation)
  }, [])

  const categories = ["Frontend", "Backend", "Database", "Cloud & DevOps", "AI & Data Science"]

  return (
    <section className="w-full py-20 bg-blue-50 dark:bg-blue-950">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Our Technology Stack</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            Building with the best technologies for optimal performance
          </p>
        </motion.div>

        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-3"
            >
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-white dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-700/50 text-blue-800 dark:text-blue-200 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                    >
                      {tech.name}
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

