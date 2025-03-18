import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import MapSection from "@/components/contact/map-section"
import FaqSection from "@/components/contact/faq-section"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16">
      <ContactHero />
      <div className="w-full py-20 bg-white dark:bg-blue-950">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <MapSection />
      <FaqSection />
    </main>
  )
}

