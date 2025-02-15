import { Hero } from "@/components/hero"
import { ProjectCard } from "@/components/project-card"
import { ExperienceCard } from "@/components/experience-card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

const projects = [
  {
    title: "Home Server",
    description: "Self-hosted media server with automated management and secure access.",
    technologies: ["Docker", "Ubuntu Linux", "SWAG", "Plex"],
    github: "https://github.com/yourusername/home-server",
  },
  {
    title: "Timely Track",
    description: "AI-powered scheduling assistant using Google Maps and OpenAI APIs.",
    technologies: ["Python", "Flask", "OpenAI API", "Google Maps API"],
    github: "https://github.com/yourusername/timely-track",
  },
  {
    title: "Multiplayer Web Game",
    description: "Browser-based isometric game with real-time multiplayer functionality.",
    technologies: ["JavaScript", "p5.js", "p5play", "p5party"],
    github: "https://github.com/yourusername/web-game",
  },
  {
    title: "FRC Robot Controller",
    description: "Robot control system with autonomous balancing capabilities.",
    technologies: ["Java", "WPILib", "Git"],
    github: "https://github.com/yourusername/frc-robot",
  },
]

const experience = [
  {
    title: "Peer Tutor",
    company: "Skyline College",
    date: "Jan 2025 - Present",
    description: [
      "Provided individualized tutoring sessions focusing on Calculus I - III",
      "Identified and helped students develop needed skills for success",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "KTBYTE Computer Science Academy",
    date: "Jun 2023 - Sep 2023",
    description: [
      "Conducted regular office hours to offer support with Java related concepts and problem sets",
      "Adapted teaching methods to accommodate students of varying ages and backgrounds",
    ],
  },
]

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="projects" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.title} {...exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free
            to reach out!
          </p>
          <Button asChild className="bg-white text-black hover:bg-zinc-200">
            <a href="mailto:contact@johnatho.nz">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}

