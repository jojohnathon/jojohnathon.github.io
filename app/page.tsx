import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm Johnathon Zheng
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Computer Science Student passionate about building innovative cloud solutions and sharing knowledge.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AWS Cloud Infrastructure */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  AWS Cloud Infrastructure
                  <Badge variant="secondary">Featured</Badge>
                </CardTitle>
                <CardDescription>
                  Scalable cloud infrastructure deployment with automated CI/CD pipelines and monitoring.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">AWS EC2</Badge>
                    <Badge variant="outline">S3</Badge>
                    <Badge variant="outline">Lambda</Badge>
                    <Badge variant="outline">CloudFormation</Badge>
                    <Badge variant="outline">Terraform</Badge>
                    <Badge variant="outline">Docker</Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/yourusername/aws-infrastructure" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Home Server */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Home Server</CardTitle>
                <CardDescription>
                  Self-hosted media server with automated management, secure access, and AWS S3 backup integration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">Ubuntu Linux</Badge>
                    <Badge variant="outline">SWAG</Badge>
                    <Badge variant="outline">Plex</Badge>
                    <Badge variant="outline">AWS S3</Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/yourusername/home-server" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Timely Track */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Timely Track</CardTitle>
                <CardDescription>
                  AI-powered scheduling assistant using Google Maps and OpenAI APIs, deployed on AWS.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Flask</Badge>
                    <Badge variant="outline">OpenAI API</Badge>
                    <Badge variant="outline">Google Maps API</Badge>
                    <Badge variant="outline">AWS Lambda</Badge>
                    <Badge variant="outline">API Gateway</Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/yourusername/timely-track" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Multiplayer Web Game */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Multiplayer Web Game</CardTitle>
                <CardDescription>
                  Browser-based isometric game with real-time multiplayer functionality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">p5.js</Badge>
                    <Badge variant="outline">p5play</Badge>
                    <Badge variant="outline">p5party</Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/yourusername/web-game" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FRC Robot Controller */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle>FRC Robot Controller</CardTitle>
                <CardDescription>
                  Robot control system with autonomous balancing capabilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Java</Badge>
                    <Badge variant="outline">WPILib</Badge>
                    <Badge variant="outline">Git</Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/yourusername/frc-robot" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {/* Cloud Engineer */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Cloud Engineer (Personal Projects)</CardTitle>
                    <CardDescription>Self-directed • 2024 - Present</CardDescription>
                  </div>
                  <Badge>Current</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Designed and deployed scalable AWS infrastructure using EC2, S3, Lambda, and CloudFormation</li>
                  <li>Implemented automated CI/CD pipelines for serverless applications</li>
                </ul>
              </CardContent>
            </Card>

            {/* Peer Tutor */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Peer Tutor</CardTitle>
                    <CardDescription>Skyline College • Jan 2025 - Present</CardDescription>
                  </div>
                  <Badge>Current</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Provided individualized tutoring sessions focusing on Calculus I - III</li>
                  <li>Identified and helped students develop needed skills for success</li>
                </ul>
              </CardContent>
            </Card>

            {/* Teaching Assistant */}
            <Card>
              <CardHeader>
                <CardTitle>Teaching Assistant</CardTitle>
                <CardDescription>KTBYTE Computer Science Academy • Jun 2023 - Sep 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Conducted regular office hours to offer support with Java related concepts and problem sets</li>
                  <li>Adapted teaching methods to accommodate students of varying ages and backgrounds</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <Button size="lg" asChild>
            <a href="mailto:contact@johnatho.nz" className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Email Me
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}