"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Layout, Shield, Smartphone, Zap } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  technologies: string[]
  projects: string[]
}

const ServiceCard = ({ icon, title, description, technologies, projects }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className={`bg-white dark:bg-blue-900/20 border-blue-200/50 dark:border-blue-700/30 shadow-lg transition-all duration-300 ${
        isExpanded ? "shadow-blue-200/50 dark:shadow-blue-700/30" : ""
      }`}
    >
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mr-4 flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">{title}</h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">{description}</p>

            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 p-0 h-auto mb-4"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show Less" : "Learn More"}
            </Button>

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">Example Projects:</h4>
                    <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 text-sm">
                      {projects.map((project) => (
                        <li key={project}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ServicesGrid() {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to address your specific business challenges and requirements.",
      technologies: ["Java", "Python", "C#", ".NET", "Node.js"],
      projects: [
        "Enterprise Resource Planning (ERP) System",
        "Customer Relationship Management (CRM) Platform",
        "Inventory Management Solution",
      ],
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Web & Mobile App Development",
      description: "Responsive web applications and native mobile apps that deliver exceptional user experiences.",
      technologies: ["React", "Angular", "Vue.js", "React Native", "Flutter"],
      projects: [
        "E-commerce Platform with Payment Integration",
        "Social Media Application",
        "Real Estate Listing Portal",
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "AI & Cloud Solutions",
      description: "Leverage the power of artificial intelligence and cloud computing to transform your business.",
      technologies: ["TensorFlow", "PyTorch", "AWS", "Azure", "Google Cloud"],
      projects: [
        "Predictive Analytics Dashboard",
        "Natural Language Processing Chatbot",
        "Cloud Migration & Infrastructure Optimization",
      ],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "UI/UX Design & Branding",
      description: "Create intuitive, engaging, and visually stunning interfaces that captivate your users.",
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"],
      projects: ["Brand Identity Redesign", "User Experience Optimization", "Design System Creation"],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersecurity & DevOps",
      description: "Protect your digital assets and streamline your development operations for maximum efficiency.",
      technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS Security"],
      projects: [
        "Security Assessment & Implementation",
        "CI/CD Pipeline Setup",
        "Infrastructure as Code Implementation",
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance and support services to ensure your software continues to perform optimally.",
      technologies: ["Jira", "Zendesk", "Slack", "GitHub", "GitLab"],
      projects: ["24/7 Application Monitoring", "Performance Optimization", "Legacy System Modernization"],
    },
  ]

  return (
    <section className="w-full py-20 bg-white dark:bg-blue-950">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Our Services</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                technologies={service.technologies}
                projects={service.projects}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

