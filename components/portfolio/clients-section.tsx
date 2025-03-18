"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientsSection() {
  const clients = [
    { name: "Tech Corp", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Finance Plus", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Health Innovations", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Retail Giants", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Education First", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Smart City", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Travel Connect", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Media Group", logo: "/placeholder.svg?height=100&width=200" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            We've partnered with companies across various sectors to deliver exceptional digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="bg-white dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200/50 dark:border-blue-700/30 shadow-sm hover:shadow-md transition-all duration-300 w-full h-32 flex items-center justify-center">
                <div className="relative w-full h-16">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    fill
                    className="object-contain filter dark:brightness-200 dark:contrast-75"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

