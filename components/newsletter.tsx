import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="border-y border-border/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl glass-card rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h2 className="mb-4 font-sans text-3xl font-bold text-foreground md:text-4xl">Stay Updated</h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Get the latest biohacking insights, test reviews, and optimization strategies delivered to your inbox
            weekly.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row">
            <Input type="email" placeholder="Enter your email" className="flex-1 glass-card" />
            <Button type="submit" size="lg" className="shadow-lg">
              Subscribe
            </Button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">Join 50,000+ biohackers. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
