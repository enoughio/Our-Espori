"use client"

import { motion } from "framer-motion"
import { Clock, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  readTime: number
  date: string
}

export default function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How AI is Revolutionizing Software Development",
      excerpt:
        "Explore how artificial intelligence is transforming the way we build and maintain software applications.",
      image: "/placeholder.svg?height=400&width=600",
      readTime: 5,
      date: "May 15, 2023",
    },
    {
      id: 2,
      title: "The Future of Web 3.0 and Blockchain Apps",
      excerpt: "Discover the potential of decentralized applications and how they're reshaping the digital landscape.",
      image: "/placeholder.svg?height=400&width=600",
      readTime: 7,
      date: "June 22, 2023",
    },
    {
      id: 3,
      title: "Top 10 UI/UX Trends for 2025",
      excerpt: "Stay ahead of the curve with these emerging user interface and experience design trends.",
      image: "/placeholder.svg?height=400&width=600",
      readTime: 4,
      date: "July 8, 2023",
    },
  ]

  return (
    <section className="w-full py-20 bg-white dark:bg-blue-950">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Blog & Insights</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            Latest tech insights and thought leadership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full bg-white dark:bg-blue-900/20 border-blue-200 dark:border-blue-700/30 hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime} min read
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 line-clamp-2">{post.title}</h3>

                  <p className="text-blue-700 dark:text-blue-300 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex justify-between items-center mt-auto">
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      <Link href="#">Read Now</Link>
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            className="border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/50"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}

