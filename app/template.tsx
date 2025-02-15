"use client"

import { GridReveal } from "@/components/grid-reveal"
import type React from "react"

export default function Template({ children }: { children: React.ReactNode }) {
  return <GridReveal>{children}</GridReveal>
}

