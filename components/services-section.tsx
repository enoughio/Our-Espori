"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Cpu, Layout, Smartphone, ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative h-[300px] perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front */}
        <Card className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/50 dark:border-blue-700/30 shadow-lg hover:shadow-blue-200/30 dark:hover:shadow-blue-700/20 transition-all duration-300">
          <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 text-white">
              {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">{title}</h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">{description}</p>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100"
            >
              Explore More
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Back */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-indigo-700 border border-blue-500/50 shadow-lg">
          <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center text-white">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <ul className="text-sm space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mr-2"></span>
                Custom solutions tailored to your needs
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mr-2"></span>
                Cutting-edge technologies
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mr-2"></span>
                Scalable architecture
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mr-2"></span>
                Ongoing support and maintenance
              </li>
            </ul>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              Learn More
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Bespoke solutions for enterprises & startups.",
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Web & Mobile App Development",
      description: "Scalable apps with top-tier UX/UI.",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI & Cloud Solutions",
      description: "Machine learning, data analytics & cloud automation.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "UI/UX Design & Branding",
      description: "Visually stunning, user-friendly interfaces.",
    },
  ]

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-blue-50 dark:from-blue-950 dark:to-indigo-950">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Our Core Services</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            We deliver cutting-edge solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard icon={service.icon} title={service.title} description={service.description} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

