import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 glass-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-lg">
              <span className="font-mono text-lg font-bold text-primary-foreground">BH</span>
            </div>
            <span className="font-sans text-xl font-semibold text-foreground">Biohacker Tests</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/tests"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Tests
            </Link>
            <Link
              href="/guides"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Guides
            </Link>
            <Link
              href="/biomarkers"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Biomarkers
            </Link>
            <Link
              href="/articles"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Articles
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Community
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm" className="hidden md:flex shadow-lg">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
