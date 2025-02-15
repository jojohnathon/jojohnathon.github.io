"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedText } from "@/components/animated-text"

export function Contact() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ email, message })
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedText text="Get in Touch" className="text-4xl md:text-5xl font-bold mb-8" />
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/5 border-white/10"
          />
          <Textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white/5 border-white/10 min-h-[150px]"
          />
          <Button type="submit" className="w-full bg-white text-black hover:bg-white/90">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  )
}

