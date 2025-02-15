"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen pt-16 flex flex-col justify-center relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I'm Johnathon Zheng</h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8">
            Developer, Educator, and Computer Science Student passionate about building innovative solutions and sharing
            knowledge.
          </p>
          <div className="flex gap-4">
            <Link
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  )
}

