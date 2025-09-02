"use client"

import React from "react"

export function GridReveal({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}