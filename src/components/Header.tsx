'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-sm bg-white dark:bg-gray-950 bg-opacity-80 backdrop-blur-md supports-[backdrop-filter]:bg-opacity-60">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6 md:px-10">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center">
            <span className="text-xl font-bold">Priyanshu Dadhich</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-black/80 dark:hover:text-white/80 ${
                pathname === item.href ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800 bg-transparent p-1 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>
          
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800 bg-transparent p-1 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
} 