import { Card, CardContent } from "@/components/ui/card"
import { Activity, Beaker, Brain, Dna, Heart, Pill, Sparkles, Zap } from "lucide-react"

const categories = [
  {
    icon: Beaker,
    title: "Blood Tests",
    count: "45 tests",
    description: "Comprehensive panels for metabolic health",
  },
  {
    icon: Dna,
    title: "Genetic Testing",
    count: "12 tests",
    description: "DNA analysis for personalized insights",
  },
  {
    icon: Heart,
    title: "Cardiovascular",
    count: "28 tests",
    description: "Heart health and circulation markers",
  },
  {
    icon: Brain,
    title: "Cognitive",
    count: "18 tests",
    description: "Brain health and neurotransmitters",
  },
  {
    icon: Zap,
    title: "Hormones",
    count: "32 tests",
    description: "Complete hormone optimization panels",
  },
  {
    icon: Activity,
    title: "Performance",
    count: "22 tests",
    description: "Athletic and physical performance",
  },
  {
    icon: Sparkles,
    title: "Longevity",
    count: "15 tests",
    description: "Aging and healthspan biomarkers",
  },
  {
    icon: Pill,
    title: "Nutrition",
    count: "25 tests",
    description: "Vitamin, mineral, and nutrient status",
  },
]

export function CategorySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-sans text-3xl font-bold text-foreground md:text-4xl">Browse by Category</h2>
          <p className="text-lg text-muted-foreground">Find the right tests for your health goals</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="glass-card group cursor-pointer transition-all hover:border-primary hover:shadow-xl hover:scale-[1.02]"
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{category.title}</h3>
                    <p className="mb-2 text-xs text-muted-foreground">{category.count}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
