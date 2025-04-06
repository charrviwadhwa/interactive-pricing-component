"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Check, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function PricingComponent() {
  const [pageviews, setPageviews] = useState(100)
  const [price, setPrice] = useState(16)
  const [yearlyBilling, setYearlyBilling] = useState(false)
  const { theme, setTheme } = useTheme()

  // Update price when pageviews or billing period changes
  useEffect(() => {
    // Base price calculation (simplified for demo)
    let basePrice = 16 * (pageviews / 100)

    // Apply yearly discount if applicable
    if (yearlyBilling) {
      basePrice = basePrice * 0.75 // 25% discount
    }

    setPrice(basePrice)
  }, [pageviews, yearlyBilling])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-4 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background patterns */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url('/bg-pattern.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      />

      <div
        className="absolute top-20 left-1/2 transform -translate-x-1/2 pointer-events-none"
        style={{
          backgroundImage: `url('/pattern-circles.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "146px",
          height: "145px",
          zIndex: 1,
        }}
      />

      {/* Theme toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute right-4 top-4 rounded-full p-2 bg-white dark:bg-slate-700 shadow-md z-10"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      <div className="max-w-3xl text-center z-10">
        <h1 className="mb-3 text-3xl font-bold text-slate-800 md:text-4xl">
          Simple, traffic-based pricing
        </h1>
        <p className="mb-12 text-gray-500">Sign-up for our 30-day trial. No credit card required.</p>

        <div className="relative overflow-hidden rounded-lg bg-white p-8 shadow-lg dark:bg-slate-800">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="text-left">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {pageviews}K PAGEVIEWS
              </p>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end">
                <span className="text-4xl font-bold text-slate-800 dark:text-white">${price.toFixed(2)}</span>
                <span className="ml-2 text-gray-500 dark:text-gray-400">/ month</span>
              </div>
            </div>
          </div>

          <div className="my-8">
            <Slider
              defaultValue={[100]}
              max={200}
              min={10}
              step={10}
              onValueChange={(value) => setPageviews(value[0])}
              className="py-4"
              trackClassName="bg-gradient-to-r from-teal-200 to-teal-300"
              thumbClassName="h-8 w-8 bg-teal-500 shadow-lg shadow-teal-200/50 flex items-center justify-center"
              thumbContent={
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('/icon-slider.svg')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "60%",
                  }}
                />
              }
            />
          </div>

          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">Monthly Billing</span>
            <Switch
              checked={yearlyBilling}
              onCheckedChange={setYearlyBilling}
              className="data-[state=checked]:bg-teal-500 data-[state=unchecked]:bg-gray-300 dark:data-[state=unchecked]:bg-gray-600"
            />
            <span className="text-sm text-gray-500 dark:text-gray-400">Yearly Billing</span>
            <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-400 dark:bg-orange-900 dark:text-orange-300">
              25% discount
            </span>
          </div>

          <hr className="mb-6 dark:border-gray-700" />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-teal-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Unlimited websites</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-teal-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">100% data ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-teal-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Email reports</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <Button className="rounded-full bg-slate-800 px-6 py-6 text-white hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">
                Start my trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

