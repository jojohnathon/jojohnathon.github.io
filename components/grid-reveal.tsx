"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface GridRevealProps {
  children: React.ReactNode
}

export function GridReveal({ children }: GridRevealProps) {
  const [isTransitioning, setIsTransitioning] = useState(true)
  const columns = 5
  const rows = 5
  const gridItems = Array.from({ length: columns * rows }, (_, i) => i)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Grid Overlay */}
      <div
        className="fixed inset-0 z-20 grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: "2px",
        }}
      >
        {gridItems.map((item) => (
          <motion.div
            key={item}
            className="bg-black"
            initial={{ scale: 1 }}
            animate={{
              scale: 0,
              filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
            }}
            transition={{
              duration: 0.75,
              delay: Math.random() * 0.5,
              ease: [0.45, 0.05, 0.55, 0.95],
            }}
          />
        ))}
      </div>
    </div>
  )
}

