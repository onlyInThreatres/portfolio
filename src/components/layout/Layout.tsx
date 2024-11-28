import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${inter.className} bg-gray-50 text-gray-900`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
} 