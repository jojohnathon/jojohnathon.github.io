"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedText } from "@/components/animated-text"

const projects = [
  {
    title: "Project One",
    description: "Creative Development",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Project Two",
    description: "Digital Art",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Project Three",
    description: "Interactive Design",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Project Four",
    description: "Visual Experience",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function ProjectGrid() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <AnimatedText text="Featured Projects" className="text-4xl md:text-5xl font-bold mb-16 text-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

