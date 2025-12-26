import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, Dna, Droplet, Brain, Heart, Zap } from "lucide-react"

const tests = [
  {
    icon: Droplet,
    title: "Comprehensive Blood Panel",
    description: "Complete metabolic analysis including lipids, hormones, and inflammation markers",
    category: "Blood Tests",
    price: "$199",
    popular: true,
  },
  {
    icon: Dna,
    title: "Genetic Testing",
    description: "Unlock insights from your DNA for personalized health optimization",
    category: "Genetic",
    price: "$299",
    popular: false,
  },
  {
    icon: Activity,
    title: "Metabolic Health Panel",
    description: "Assess insulin sensitivity, glucose metabolism, and energy production",
    category: "Metabolic",
    price: "$149",
    popular: true,
  },
  {
    icon: Brain,
    title: "Cognitive Function Test",
    description: "Evaluate neurotransmitters and brain health biomarkers",
    category: "Cognitive",
    price: "$249",
    popular: false,
  },
  {
    icon: Heart,
    title: "Cardiovascular Panel",
    description: "Advanced heart health markers including ApoB and Lp(a)",
    category: "Cardiovascular",
    price: "$179",
    popular: false,
  },
  {
    icon: Zap,
    title: "Hormone Optimization",
    description: "Complete hormone panel for men and women",
    category: "Hormones",
    price: "$229",
    popular: true,
  },
]

export function FeaturedTests() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-sans text-3xl font-bold text-foreground md:text-4xl">Popular Tests</h2>
          <p className="text-lg text-muted-foreground">Most recommended tests by our community of biohackers</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tests.map((test, index) => {
            const Icon = test.icon
            return (
              <Card
                key={index}
                className="glass-card group relative overflow-hidden transition-all hover:shadow-2xl hover:scale-[1.02]"
              >
                {test.popular && (
                  <div className="absolute right-4 top-4">
                    <Badge variant="default" className="bg-accent text-accent-foreground shadow-lg">
                      Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg backdrop-blur-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{test.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{test.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">{test.category}</div>
                      <div className="font-mono text-lg font-semibold text-foreground">{test.price}</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Learn More
                    </Button>
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
