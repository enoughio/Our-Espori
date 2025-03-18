"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface TimelineItemProps {
  year: string
  title: string
  description: string
  index: number
}

const TimelineItem = ({ year, title, description, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`flex ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-col items-center mb-12`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"} mb-6 md:mb-0`}>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200/50 dark:border-blue-700/30 shadow-lg">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">{title}</h3>
          <p className="text-blue-700 dark:text-blue-300">{description}</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold z-10">
          {year.slice(-2)}
        </div>
        <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 h-full"></div>
      </div>

      <div className="w-full md:w-1/2"></div>
    </motion.div>
  )
}

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [100, 0, 0, -100])

  const milestones = [
    {
      year: "2015",
      title: "Founded with a vision to innovate in software",
      description:
        "Espoir was established by a team of passionate developers with a mission to create innovative software solutions.",
    },
    {
      year: "2017",
      title: "First major SaaS product launched",
      description:
        "We launched our first major SaaS product, which quickly gained traction in the market and established our reputation.",
    },
    {
      year: "2019",
      title: "Expanded to AI & ML solutions",
      description:
        "Recognizing the potential of AI and machine learning, we expanded our services to include cutting-edge AI solutions.",
    },
    {
      year: "2022",
      title: "500+ projects completed globally",
      description:
        "We reached a major milestone of completing over 500 projects for clients across the globe, solidifying our international presence.",
    },
  ]

  return (
    <section ref={sectionRef} className="w-full py-20 bg-blue-50 dark:bg-blue-950/80">
      <div className="container px-4 md:px-6">
        <motion.div className="text-center mb-16" style={{ opacity, y }}>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Our Journey</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            The milestones that have shaped our growth and success
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-800 hidden md:block"></div>

          <div className="relative z-10">
            {milestones.map((milestone, index) => (
              <TimelineItem
                key={milestone.year}
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

