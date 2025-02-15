import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { Header } from "@/components/header"
import { Analytics } from "@vercel/analytics/react"

const metadata: Metadata = {
  title: "Johnathon Zheng | Developer & Educator",
  description: "Portfolio of Johnathon Zheng - Software Developer, Educator, and Computer Science Student",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.className} bg-zinc-950 text-zinc-100`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'