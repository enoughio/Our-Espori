import BlogHero from "@/components/blog/blog-hero"
import FeaturedPosts from "@/components/blog/featured-posts"
import CategorySection from "@/components/blog/category-section"
import NewsletterSection from "@/components/blog/newsletter-section"

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16">
      <BlogHero />
      <FeaturedPosts />
      <CategorySection />
      <NewsletterSection />
    </main>
  )
}

