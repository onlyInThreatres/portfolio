"use client"

import React from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { number: "01", label: "Home", href: "/" },
  { number: "02", label: "Projects", href: "/projects" },
  { number: "03", label: "Expertise", href: "/expertise" },
  { number: "04", label: "Blog", href: "/blog" },
  { number: "05", label: "Contact", href: "/contact" },
]

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 px-6 py-8 backdrop-blur-sm bg-[#0a192f]/90">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-[#64ffda] font-mono text-2xl">
          M
        </Link>
        
        <div className="flex items-center gap-8">
          <ul className="flex gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="text-[#8892b0] font-mono hover:text-[#64ffda] transition-colors"
                >
                  <span className="text-[#64ffda]">{item.number}.</span>
                  {" "}{item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a 
            href="/resume.pdf" 
            className="font-mono text-[#64ffda] border border-[#64ffda] px-4 py-2 rounded 
                     hover:bg-[#64ffda]/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
} 