import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const guides = [
  {
    slug: "reading-blood-test-results",
    title: "Complete Guide to Reading Your Blood Test Results"
  },
  {
    slug: "biohacking-tests-for-beginners",
    title: "Top 5 Biohacking Tests Every Beginner Should Start With"
  },
  {
    slug: "ultimate-biohacker-test-list",
    title: "Ultimate Biohacker Test List"
  },
  {
    slug: "order-lab-tests-without-doctor",
    title: "How to Order Lab Tests Without a Doctor"
  }
]

export default function GuidesPage() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Biohacking Guides</h1>

        <ul className="space-y-4">
          {guides.map(guide => (
            <li key={guide.slug}>
              <Link
                href={`/guides/${guide.slug}`}
                className="text-xl text-blue-600 hover:underline"
              >
                {guide.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
