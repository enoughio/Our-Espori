"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function TechnologiesSection() {
  const technologies = {
    Frontend: [
      "React",
      "Angular",
      "Vue.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "GraphQL",
    ],
    Backend: ["Node.js", "Python", "Java", "C#", ".NET Core", "Express", "Django", "Spring Boot", "Laravel"],
    Mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
    Database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "DynamoDB", "Elasticsearch"],
    "Cloud & DevOps": [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
      "Ansible",
    ],
    "AI & Data Science": [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "OpenAI",
      "Pandas",
      "NumPy",
      "Apache Spark",
      "LangChain",
    ],
  }

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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Our Technology Stack</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            Cutting-edge technologies we use to build powerful solutions
          </p>
        </motion.div>

        <div className="space-y-10">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 border-b border-blue-200 dark:border-blue-700 pb-2">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700/50 hover:bg-blue-200 dark:hover:bg-blue-700/50">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

