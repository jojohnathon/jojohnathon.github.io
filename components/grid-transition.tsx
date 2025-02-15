"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function GridTransition() {
  const [isTransitioning, setIsTransitioning] = useState(true)
  const gridItems = Array.from({ length: 50 }, (_, i) => i) // Create 50 grid items

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isTransitioning) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black grid grid-cols-5 gap-1"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => setIsTransitioning(false)}
    >
      {gridItems.map((item) => (
        <motion.div
          key={item}
          className="bg-white/10 w-full h-full"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 0],
            filter: ["brightness(1)", "brightness(2)", "brightness(1)"],
          }}
          transition={{
            duration: 0.5,
            delay: Math.random() * 0.3, // Random delay for each cell
            ease: [0.45, 0.05, 0.55, 0.95], // Custom easing
          }}
        />
      ))}
    </motion.div>
  )
}

