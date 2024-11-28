import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-xl font-bold mb-4 sm:mb-0">Mustafa Hassan</Link>
        <ul className="flex flex-wrap justify-center space-x-4">
          <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
          <li><Link href="/#projects" className="hover:text-gray-600">Projects</Link></li>
          <li><Link href="/#expertise" className="hover:text-gray-600">Expertise</Link></li>
          <li><Link href="/blog" className="hover:text-gray-600">Blog</Link></li>
          <li><Link href="/#contact" className="hover:text-gray-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

