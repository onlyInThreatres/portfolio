import React from 'react'
import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Mustafa Hassan - ICT Engineer & Cloud Solutions Architect',
  description: 'Over a decade of experience in telecommunications and cloud solutions, specializing in 5G, Cloud RAN, and technical leadership.',
  keywords: [
    'ICT Engineer',
    'Cloud Solutions',
    'RAN Architecture',
    '5G Technology',
    'Technical Leadership'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a192f]">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 