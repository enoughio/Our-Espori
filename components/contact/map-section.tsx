"use client"

import { motion } from "framer-motion"

export default function MapSection() {
  return (
    <section className="w-full py-20 bg-blue-50 dark:bg-blue-950/80">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Visit Our Office</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">We're located in the heart of Tech City</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-lg border border-blue-200 dark:border-blue-700/30"
        >
          <div className="relative w-full h-[400px]">
            {/* This would typically be a Google Maps embed */}
            <div className="absolute inset-0 bg-blue-200 dark:bg-blue-800/30 flex items-center justify-center">
              <p className="text-blue-700 dark:text-blue-300 text-center p-4">
                Interactive Google Map would be embedded here.
                <br />
                For implementation, you would use the Google Maps API or an iframe embed.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

