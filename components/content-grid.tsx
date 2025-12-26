import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"

const articles = [
  {
    image: "/blood-test-laboratory.png",
    category: "Guides",
    title: "Complete Guide to Reading Your Blood Test Results",
    excerpt: "Learn how to interpret every biomarker on your blood panel and what optimal ranges really mean.",
    author: "Dr. Sarah Chen",
    readTime: "12 min read",
    date: "Oct 25, 2025",
  },
  {
    image: "/dna-helix-genetic-testing.jpg",
    category: "Research",
    title: "The Science Behind Genetic Testing for Health",
    excerpt: "Understanding how genetic variants influence your health and what you can do about it.",
    author: "Michael Torres",
    readTime: "8 min read",
    date: "Oct 22, 2025",
  },
  {
    image: "/metabolic-health-nutrition.jpg",
    category: "Optimization",
    title: "Optimizing Metabolic Health: A Data-Driven Approach",
    excerpt: "Evidence-based strategies for improving insulin sensitivity and metabolic flexibility.",
    author: "Dr. James Wilson",
    readTime: "15 min read",
    date: "Oct 20, 2025",
  },
]

export function ContentGrid() {
  return (
    <section className="border-t border-border/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-4 font-sans text-3xl font-bold text-foreground md:text-4xl">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">Expert insights and evidence-based guides</p>
          </div>
          <button className="hidden text-sm font-medium text-primary hover:underline md:block">
            View All Articles →
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="glass-card group overflow-hidden transition-all hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4">
                  <Badge variant="secondary" className="shadow-lg backdrop-blur-sm">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 font-sans text-xl font-semibold leading-tight text-foreground group-hover:text-primary text-balance">
                  {article.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
                <div className="flex items-center justify-between border-t border-border/50 pt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
