"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Clock, User, ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  date: string
  readTime: number
}

export default function FeaturedPosts() {
  const featuredPost: BlogPost = {
    id: 1,
    title: "How AI is Transforming Software Development",
    excerpt:
      "Artificial intelligence is revolutionizing the way we build software, from automated testing to intelligent code completion and beyond. Discover how AI tools are making developers more productive and helping create better applications.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Artificial Intelligence",
    author: "Jane Smith",
    date: "May 15, 2023",
    readTime: 8,
  }

  const recentPosts: BlogPost[] = [
    {
      id: 2,
      title: "Web 3.0 – The Next Big Thing in Internet Evolution",
      excerpt:
        "Explore the decentralized future of the internet with Web 3.0 technologies and how they're reshaping digital experiences.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web Development",
      author: "John Doe",
      date: "June 22, 2023",
      readTime: 6,
    },
    {
      id: 3,
      title: "Top 10 UI/UX Trends in 2025",
      excerpt:
        "Stay ahead of the curve with these emerging user interface and experience design trends that will dominate the digital landscape.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Design",
      author: "Alex Brown",
      date: "July 8, 2023",
      readTime: 5,
    },
    {
      id: 4,
      title: "The Rise of Serverless Architecture",
      excerpt:
        "Discover how serverless computing is changing the way applications are built, deployed, and scaled in the cloud era.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Cloud Computing",
      author: "Michael Johnson",
      date: "August 3, 2023",
      readTime: 7,
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Featured Articles</h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            Dive into our latest insights and thought leadership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden h-full bg-white dark:bg-blue-900/20 border-blue-200 dark:border-blue-700/30 hover:shadow-lg transition-all duration-300">
              <div className="relative h-80 w-full">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none">
                    {featuredPost.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 mb-3 space-x-4">
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime} min read
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-3">{featuredPost.title}</h3>

                <p className="text-blue-700 dark:text-blue-300 mb-4">{featuredPost.excerpt}</p>

                <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0">
                  Read Full Article
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <div className="lg:col-span-5 space-y-6">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-white dark:bg-blue-900/20 border-blue-200 dark:border-blue-700/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 md:h-auto md:w-1/3">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4 md:w-2/3">
                      <Badge className="mb-2 bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700/50">
                        {post.category}
                      </Badge>

                      <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-blue-700 dark:text-blue-300 text-sm mb-3 line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center text-xs text-blue-600 dark:text-blue-400 space-x-3">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime} min
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/50"
          >
            View All Articles
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

