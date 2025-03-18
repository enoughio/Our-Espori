import PortfolioHero from "@/components/portfolio/portfolio-hero"
import ProjectsGrid from "@/components/portfolio/projects-grid"
import ClientsSection from "@/components/portfolio/clients-section"
import PortfolioCta from "@/components/portfolio/portfolio-cta"

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16">
      <PortfolioHero />
      <ProjectsGrid />
      <ClientsSection />
      <PortfolioCta />
    </main>
  )
}

