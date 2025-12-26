import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AnalyticsWrapper } from "@/components/analytics-wrapper"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Biohacker Tests - Discover the Best Biohacking Tests & Kits",
  description:
    "Find comprehensive reviews, comparisons, and recommendations for biohacker tests and test kits.",
  keywords: [
    "biohacker tests",
    "biohacking tests",
    "biohacking test kits",
    "health optimization tests",
  ],
  openGraph: {
    title: "Biohacker Tests - Discover the Best Biohacking Tests & Kits",
    description:
      "Find comprehensive reviews, comparisons, and recommendations for biohacker tests and test kits.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Page content */}
        {children}

        {/* Analytics & Cookie Consent */}
        <AnalyticsWrapper />
        <CookieConsent />
      </body>
    </html>
  )
}
