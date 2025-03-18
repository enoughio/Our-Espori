"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, Clock, Shield, Users } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  details: string
}

const FeatureCard = ({ icon, title, description, details }: FeatureCardProps) => {
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
        <Card className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/50 dark:border-blue-700/30 shadow-lg">
          <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 text-white">
              {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">{title}</h3>
            <p className="text-blue-700 dark:text-blue-300">{description}</p>
          </CardContent>
        </Card>

        {/* Back */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-indigo-700 border border-blue-500/50 shadow-lg">
          <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center text-white">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-sm">{details}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function WhyWorkWithUs() {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award-Winning Development Team",
      description: "Recognized excellence in software development",
      details:
        "Our team has received multiple industry awards for innovation, design excellence, and technical implementation. We bring this award-winning expertise to every project we undertake.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Agile & Transparent Development Process",
      description: "Collaborative approach with regular updates",
      details:
        "We follow Agile methodologies that ensure flexibility, transparency, and continuous improvement. Our clients are always informed and involved throughout the development process.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cutting-Edge Technology & Security",
      description: "Latest tech stack with robust security",
      details:
        "We stay at the forefront of technology trends while implementing industry-leading security practices. Your data and applications are protected with the highest standards of security.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer-Centric Approach",
      description: "Your success is our priority",
      details:
        "We build long-term relationships with our clients by focusing on their specific needs and goals. Our solutions are tailored to deliver measurable business value and ROI.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Why Work With Us?</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">What makes Espori different?</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                details={feature.details}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

