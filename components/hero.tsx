import { Search } from "lucide-react"
import { TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 glass-card px-4 py-2 text-sm shadow-lg">
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">Your complete guide to health optimization</span>
          </div>

          <h1 className="mb-6 font-sans text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Discover the Best Biohacking Tests & Kits
          </h1>

          <p className="mb-10 text-lg text-muted-foreground md:text-xl text-balance leading-relaxed">
            Find comprehensive reviews, comparisons, and recommendations for biohacker tests and test kits. Make
            data-driven decisions about your health optimization journey.
          </p>

          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for your test..."
                className="w-full rounded-full border border-border/50 glass-card py-4 pl-12 pr-4 text-lg shadow-lg placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-8">
            <div className="glass-card rounded-xl p-4 shadow-lg">
              <div className="mb-2 font-mono text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Tests Reviewed</div>
            </div>
            <div className="glass-card rounded-xl p-4 shadow-lg">
              <div className="mb-2 font-mono text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Biomarkers Explained</div>
            </div>
            <div className="glass-card rounded-xl p-4 shadow-lg">
              <div className="mb-2 font-mono text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Community Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
