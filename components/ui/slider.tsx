"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  trackClassName?: string
  thumbClassName?: string
  thumbContent?: React.ReactNode
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, trackClassName, thumbClassName, thumbContent, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full touch-none select-none items-center", className)}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          "relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700",
          trackClassName,
        )}
      >
        <SliderPrimitive.Range className="absolute h-full bg-teal-300 dark:bg-teal-500" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(
          "block h-5 w-5 rounded-full border-2 border-white bg-teal-300 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-800 dark:bg-teal-500 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
          thumbClassName,
        )}
      >
        {thumbContent}
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  ),
)
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

