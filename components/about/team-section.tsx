"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

interface TeamMember {
  id: number
  name: string
  position: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      bio: "Driving the vision & growth of Espori with over 15 years of experience in software development and business leadership.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "john@esporitech.com",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CTO",
      bio: "Innovating with AI & Cloud Solutions. Jane leads our technical strategy with expertise in emerging technologies and scalable architectures.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "jane@esporitech.com",
      },
    },
    {
      id: 3,
      name: "Alex Brown",
      position: "Head of Design",
      bio: "Creating intuitive & stunning UI/UX. Alex brings creative vision and user-centered design principles to every project.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@esporitech.com",
      },
    },
    {
      id: 4,
      name: "Michael Johnson",
      position: "Lead Developer",
      bio: "Building scalable backend systems. Michael specializes in high-performance, secure, and maintainable code architecture.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@esporitech.com",
      },
    },
  ]

  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <section id="team-section" className="w-full py-20 bg-white dark:bg-blue-950">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Meet the Team</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">The experts behind Espori's success</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-square mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredMember === member.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent transition-opacity duration-300 ${
                    hoveredMember === member.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm mb-4">{member.bio}</p>
                    <div className="flex space-x-2">
                      {member.social.linkedin && (
                        <Button variant="ghost" size="icon" className="bg-white/20 text-white hover:bg-white/30">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      )}
                      {member.social.twitter && (
                        <Button variant="ghost" size="icon" className="bg-white/20 text-white hover:bg-white/30">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      )}
                      {member.social.email && (
                        <Button variant="ghost" size="icon" className="bg-white/20 text-white hover:bg-white/30">
                          <Mail className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">{member.name}</h3>
              <p className="text-blue-700 dark:text-blue-300">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

