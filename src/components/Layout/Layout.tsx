import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-8">
      {children}
    </main>
    <Footer />
  </div>
)
