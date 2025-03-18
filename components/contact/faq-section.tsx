"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "What services does Espori offer?",
      answer:
        "Espori offers a comprehensive range of software development services including custom software development, web and mobile app development, AI and cloud solutions, UI/UX design, cybersecurity, and ongoing maintenance and support.",
    },
    {
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 6-12 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
    },
    {
      question: "What is your development process?",
      answer:
        "We follow an Agile development methodology with iterative cycles. Our process includes discovery and planning, design and prototyping, development, testing and QA, deployment, and ongoing maintenance and support. We maintain transparent communication throughout the entire process.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes, we offer comprehensive post-launch support and maintenance services to ensure your software continues to perform optimally. We provide different support packages tailored to your needs, from basic bug fixes to full-scale enhancements and updates.",
    },
    {
      question: "How do you handle project pricing?",
      answer:
        "We offer flexible pricing models including fixed-price, time and materials, and retainer-based arrangements. The pricing structure depends on project complexity, timeline, and specific requirements. We provide detailed quotes after our initial consultation and requirements gathering.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-blue-900 dark:text-blue-100 hover:text-blue-700 dark:hover:text-blue-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-blue-700 dark:text-blue-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

