import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-xl font-bold mb-4 sm:mb-0">
          Mustafa Hassan
        </Link>
        <ul className="flex flex-wrap justify-center space-x-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-gray-600">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
} 