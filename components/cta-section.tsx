"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to take your business to the next level?
          </motion.h2>

          <motion.p
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's build something amazing together. Schedule a free strategy call & discuss your next big idea!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 border-0 text-lg px-8 py-6 h-auto">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="absolute -inset-0.5 bg-blue-400/20 blur-sm rounded-md animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

