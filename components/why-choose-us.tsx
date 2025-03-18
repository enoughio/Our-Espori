"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Award, Globe, Users, CheckCircle } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface StatProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  duration: number
}

const StatCard = ({ icon, value, label, suffix, duration }: StatProps) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      setCount(Math.min(Math.floor(start), end))

      if (start >= end) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, duration, isInView])

  return (
    <Card className="bg-white dark:bg-blue-900/20 border-blue-200 dark:border-blue-700/30 shadow-lg hover:shadow-blue-200/30 dark:hover:shadow-blue-700/20 transition-all duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 text-white">
          {icon}
        </div>
        <div className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-2">
          <motion.span ref={countRef} onViewportEnter={() => setIsInView(true)}>
            {count}
          </motion.span>
          {suffix}
        </div>
        <p className="text-blue-700 dark:text-blue-300">{label}</p>
      </CardContent>
    </Card>
  )
}

export default function WhyChooseUs() {
  const stats = [
    {
      icon: <Award className="h-6 w-6" />,
      value: 10,
      label: "Years in Software Development",
      suffix: "+",
      duration: 1500,
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: 20,
      label: "Countries with Clients",
      suffix: "+",
      duration: 1500,
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: 150,
      label: "In-house Engineers",
      suffix: "+",
      duration: 1500,
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      value: 500,
      label: "Successful Projects",
      suffix: "+",
      duration: 1500,
    },
  ]

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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Why Espori?</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">Why do top brands trust us?</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatCard
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                duration={stat.duration}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

