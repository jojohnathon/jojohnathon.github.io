"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => setIsLoading(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <div className="relative w-96 h-96">
          <motion.div
            initial={{ x: -200, y: 100 }}
            animate={{
              x: 200,
              y: -100,
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
            className="absolute"
          >
            <motion.div
              animate={{
                rotateX: [0, 20, 0],
                rotateZ: [-15, 15, -15],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "center center" }}
              className="relative w-32 h-32"
            >
              <Image
                src="/your-dove.svg" // Put your SVG file in the public folder
                alt="Flying dove"
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 2],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
              }}
            >
              <div className="w-32 h-32 bg-white/10 rounded-full blur-xl" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <motion.span
            className="text-white text-xl font-light tracking-wider"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            Taking Flight
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}

