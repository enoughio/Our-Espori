"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "contact@espoirtech.com",
      link: "mailto:contact@espoirtech.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+1 (234) 567-8900",
      link: "tel:+12345678900",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      value: "123 Innovation St, Tech City, USA",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Business Hours",
      value: "Monday - Friday: 9AM - 6PM",
      link: null,
    },
  ]

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", link: "#" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", link: "#" },
    { icon: <Facebook className="h-5 w-5" />, name: "Facebook", link: "#" },
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", link: "#" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6">Contact Information</h2>

          <div className="space-y-6">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-300 mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-1">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-blue-700 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-200 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-blue-700 dark:text-blue-300">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6">Connect With Us</h2>

          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700/50 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800/50"
                asChild
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200/50 dark:border-blue-700/30">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Schedule a Free Consultation</h3>
          <p className="text-blue-700 dark:text-blue-300 mb-4">
            Book a 30-minute call with our experts to discuss your project requirements and explore how we can help.
          </p>
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0">
            Book a Call
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

