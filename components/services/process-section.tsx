"use client"

import { motion } from "framer-motion"
import { Search, PenTool, CodeIcon, Zap, CheckCircle, BarChart } from "lucide-react"

const steps = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and project requirements.",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Design & Prototyping",
    description: "Our designers create wireframes and interactive prototypes to visualize the solution.",
  },
  {
    icon: <CodeIcon className="h-6 w-6" />,
    title: "Development",
    description: "Our engineers build your solution using the latest technologies and best practices.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Testing & QA",
    description: "Rigorous testing ensures your product is bug-free and performs optimally.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Deployment",
    description: "We launch your solution and ensure a smooth transition to production.",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Maintenance & Growth",
    description: "Ongoing support, monitoring, and enhancements to keep your solution evolving.",
  },
]

export default function ProcessSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Our Development Process
          </h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            A structured approach to delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-300 dark:bg-blue-700 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
              >
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} mb-6 md:mb-0`}
                >
                  <div className="bg-white dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200/50 dark:border-blue-700/30 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">{step.title}</h3>
                    <p className="text-blue-700 dark:text-blue-300">{step.description}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white z-10">
                    {step.icon}
                  </div>
                </div>

                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

