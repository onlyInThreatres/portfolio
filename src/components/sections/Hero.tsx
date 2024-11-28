"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Mustafa Hassan</h1>
        <p className="text-xl text-gray-600 mb-6">
          ICT Engineer | Telecommunications Expert | Cloud Solutions Architect
        </p>
        <p className="text-gray-600 mb-6">
          With over a decade of experience in telecommunications and cloud solutions, 
          I bridge complex technical systems with customer-focused innovations.
        </p>
        <Button asChild>
          <a href="#contact">Get in touch</a>
        </Button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Mustafa Hassan"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
    </section>
  )
} 