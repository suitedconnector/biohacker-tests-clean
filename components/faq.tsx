import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are biohacker tests?",
    answer:
      "Biohacker tests are advanced diagnostic tools that measure biomarkers, hormones, nutrients, and other health indicators to help optimize your physical and mental performance. These include blood tests, genetic tests, metabolic panels, and specialized at-home test kits designed for health-conscious individuals seeking data-driven insights.",
  },
  {
    question: "Which biohacker test should I start with?",
    answer:
      "For beginners, we recommend starting with a comprehensive blood panel that covers essential biomarkers like vitamin D, B12, thyroid hormones (TSH, T3, T4), testosterone, cortisol, and inflammatory markers (CRP). This provides a solid baseline for understanding your current health status and identifying areas for optimization.",
  },
  {
    question: "How accurate are at-home biohacker test kits?",
    answer:
      "Modern at-home biohacker test kits use the same laboratory technology as traditional medical tests and are highly accurate when performed correctly. Most reputable companies are CLIA-certified and CAP-accredited, ensuring clinical-grade results. However, proper sample collection and following instructions carefully are essential for accuracy.",
  },
  {
    question: "How often should I take biohacker tests?",
    answer:
      "Testing frequency depends on your goals and what you're tracking. For general health optimization, quarterly comprehensive panels (every 3 months) are ideal. If you're actively experimenting with supplements, diet changes, or protocols, monthly testing of specific biomarkers helps track progress. Annual genetic testing is sufficient as your DNA doesn't change.",
  },
  {
    question: "Are biohacker tests covered by insurance?",
    answer:
      "Most biohacker tests are not covered by insurance as they're considered elective wellness testing rather than diagnostic medical tests. However, if your doctor orders specific tests due to symptoms or medical necessity, insurance may cover them. Many biohackers prefer direct-to-consumer testing for privacy and convenience despite the out-of-pocket cost.",
  },
  {
    question: "What's the difference between biohacker tests and regular medical tests?",
    answer:
      "Biohacker tests often provide more comprehensive panels with optimal ranges (not just disease ranges), faster turnaround times, and detailed interpretations focused on performance optimization rather than disease diagnosis. They typically include advanced biomarkers not routinely checked in standard medical practice, such as omega-3 index, advanced lipid panels, or continuous glucose monitoring.",
  },
]

export function FAQ() {
  // Generate JSON-LD schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="py-20 px-4">
      {/* JSON-LD Schema for search engines */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about biohacker tests and test kits
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
