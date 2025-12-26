import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedTests } from "@/components/featured-tests"
import { ContentGrid } from "@/components/content-grid"
import { CategorySection } from "@/components/category-section"
import { FAQ } from "@/components/faq"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <FeaturedTests />
        <ContentGrid />
        <CategorySection />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
