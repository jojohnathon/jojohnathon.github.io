import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Johnathon Zheng - Portfolio',
  description: 'Computer Science Student passionate about building innovative cloud solutions and sharing knowledge.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}