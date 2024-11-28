"use client"

import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-[#ccd6f6]">
          Get in Touch
        </h2>
        <form className="max-w-xl space-y-8">
          <div>
            <label htmlFor="name" className="text-lg mb-2 block text-[#8892b0]">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-transparent border border-[#233554] rounded px-4 py-3 text-[#8892b0]
                       focus:border-[#64ffda] focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-lg mb-2 block text-[#8892b0]">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-transparent border border-[#233554] rounded px-4 py-3 text-[#8892b0]
                       focus:border-[#64ffda] focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-lg mb-2 block text-[#8892b0]">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-transparent border border-[#233554] rounded px-4 py-3 text-[#8892b0]
                       focus:border-[#64ffda] focus:outline-none transition-colors"
            />
          </div>
          <button 
            type="submit"
            className="font-mono text-[#64ffda] border border-[#64ffda] px-6 py-4 rounded
                     hover:bg-[#64ffda]/10 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
} 