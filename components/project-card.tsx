"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  github?: string
  link?: string
  index: number
}

export function ProjectCard({ title, description, technologies, github, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800/50 transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex gap-2">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
          )}
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
      <p className="text-zinc-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="text-sm px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

