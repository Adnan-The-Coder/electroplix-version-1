/* eslint-disable no-unused-vars */
"use client"

import * as React from "react"
import { motion, useAnimation } from "framer-motion"

import { cn } from "@/lib/utils"

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onCheckedChange?: (checked: boolean) => void
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, onCheckedChange, ...props }, ref) => {
    const [checked, setChecked] = React.useState(false)
    const controls = useAnimation()

    React.useEffect(() => {
      controls.start({
        x: checked ? "100%" : "0%",
        transition: { type: "spring", stiffness: 400, damping: 20 }
      })
    }, [checked, controls])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newCheckedState = event.target.checked
      setChecked(newCheckedState)
      if (onCheckedChange) {
        onCheckedChange(newCheckedState)
      }
    }

    return (
      <label
        className={cn(
          "relative rounded-2xl inline-flex items-center cursor-pointer",
          className
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="sr-only"
          {...props}
          ref={ref}
        />
        <div
          className={cn(
            "w-14 h-8 bg-gray-300 rounded-full relative transition-colors duration-300 ease-in-out",
            checked ? "bg-gradient-to-r from-purple-500 to-blue-400" : "bg-cyan-500"
          )}
        >
          <motion.div
            className="absolute left-1 top-1 size-6 rounded-full bg-white shadow-md"
            animate={controls}
            style={{ x: checked ? 'calc(100% - 1.5rem)' : '0' }}
          />
        </div>
      </label>
    )
  }
)

Switch.displayName = "Switch"

export { Switch }
