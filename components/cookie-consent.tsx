"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
    // Enable analytics/tracking here if needed
    if (typeof window !== "undefined" && "gtag" in window) {
      const gtag = (window as { gtag?: (command: string, action: string, params: { analytics_storage: string }) => void }).gtag
      if (gtag) {
        gtag("consent", "update", {
          analytics_storage: "granted",
        })
      }
    }
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
    // Disable analytics/tracking here if needed
    if (typeof window !== "undefined" && "gtag" in window) {
      const gtag = (window as { gtag?: (command: string, action: string, params: { analytics_storage: string }) => void }).gtag
      if (gtag) {
        gtag("consent", "update", {
          analytics_storage: "denied",
        })
      }
    }
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-emerald-500/10" />

          <div className="relative p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Cookie Preferences</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By
                  clicking &quot;Accept All&quot;, you consent to our use of cookies. You can manage your preferences or decline
                  non-essential cookies.
                </p>
                <a
                  href="/privacy-policy"
                  className="inline-block text-sm text-teal-700 hover:text-teal-800 underline underline-offset-4"
                >
                  Learn more about our privacy policy
                </a>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  className="border-gray-300 bg-white/50 hover:bg-white/70 text-gray-700 backdrop-blur-sm"
                >
                  Decline
                </Button>
                <Button
                  onClick={handleAccept}
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
