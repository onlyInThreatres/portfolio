import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} bg-[#0a192f]`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
} 