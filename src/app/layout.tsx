import React from 'react'
import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Mustafa Hassan - Telecom Engineer',
  description: 'Telecommunications and Cloud Solutions Expert',
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