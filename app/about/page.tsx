import AboutHero from "@/components/about/about-hero"
import MissionVision from "@/components/about/mission-vision"
import Timeline from "@/components/about/timeline"
import TeamSection from "@/components/about/team-section"
import WhyWorkWithUs from "@/components/about/why-work-with-us"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16">
      <AboutHero />
      <MissionVision />
      <Timeline />
      <TeamSection />
      <WhyWorkWithUs />
    </main>
  )
}

