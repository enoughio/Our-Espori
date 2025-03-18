import ServicesHero from "@/components/services/services-hero"
import ServicesGrid from "@/components/services/services-grid"
import ProcessSection from "@/components/services/process-section"
import TechnologiesSection from "@/components/services/technologies-section"
import ServicesCta from "@/components/services/services-cta"

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <TechnologiesSection />
      <ServicesCta />
    </main>
  )
}

