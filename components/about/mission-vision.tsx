"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function MissionVision() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section ref={sectionRef} className="w-full py-20 bg-white dark:bg-blue-950">
      <div className="container px-4 md:px-6">
        <motion.div className="text-center mb-16" style={{ opacity, y }}>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Our Mission & Vision</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            Guiding principles that drive our innovation and growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border border-blue-200/50 dark:border-blue-700/30 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold mr-4">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Our Mission</h3>
            </div>
            <p className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed">
              "To develop cutting-edge, scalable, and impactful software solutions that drive business growth and
              digital innovation."
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border border-blue-200/50 dark:border-blue-700/30 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold mr-4">
                🚀
              </div>
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Our Vision</h3>
            </div>
            <p className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed">
              "To be the go-to technology partner for businesses looking to innovate and scale in the digital era."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

