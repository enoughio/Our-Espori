import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import FeaturedProjects from "@/components/featured-projects"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import TechStack from "@/components/tech-stack"
import BlogSection from "@/components/blog-section"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <TechStack />
      <BlogSection />
      <CtaSection />
    </main>
  )
}

