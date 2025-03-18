"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Layout, Database, Shield, Smartphone, Cpu } from "lucide-react"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

interface Category {
  name: string
  description: string
  icon: React.ReactNode
  count: number
}

export default function CategorySection() {
  const categories: Category[] = [
    {
      name: "Artificial Intelligence",
      description: "Machine learning, neural networks, and AI applications",
      icon: <Cpu className="h-6 w-6" />,
      count: 24,
    },
    {
      name: "Web Development",
      description: "Frontend, backend, and full-stack web technologies",
      icon: <Code className="h-6 w-6" />,
      count: 36,
    },
    {
      name: "UI/UX Design",
      description: "User experience, interface design, and visual aesthetics",
      icon: <Layout className="h-6 w-6" />,
      count: 18,
    },
    {
      name: "Cloud Computing",
      description: "Cloud infrastructure, serverless, and DevOps",
      icon: <Database className="h-6 w-6" />,
      count: 29,
    },
    {
      name: "Cybersecurity",
      description: "Security best practices, threats, and protection",
      icon: <Shield className="h-6 w-6" />,
      count: 15,
    },
    {
      name: "Mobile Development",
      description: "iOS, Android, and cross-platform app development",
      icon: <Smartphone className="h-6 w-6" />,
      count: 22,
    },
  ]

  return (
    <section className="w-full py-20 bg-blue-50 dark:bg-blue-950/80">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Browse by Category</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            Explore our articles by topic to find exactly what you're looking for
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="#" className="block h-full">
                <Card className="h-full bg-white dark:bg-blue-900/20 border-blue-200 dark:border-blue-700/30 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
                  <CardContent className="p-6 flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mr-4 flex-shrink-0">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">{category.name}</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-2">{category.description}</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">{category.count} articles</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

