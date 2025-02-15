"use client"

import { motion } from "framer-motion"

interface ExperienceCardProps {
  title: string
  company: string
  date: string
  description: string[]
  index: number
}

export function ExperienceCard({ title, company, date, description, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-white"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-zinc-400">
        {company} • {date}
      </p>
      <ul className="mt-4 space-y-2">
        {description.map((item, i) => (
          <li key={i} className="text-zinc-400">
            • {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

