'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Search from '@/components/search/search'
import { cn } from '@/lib/utils' // Utility function for conditional classes, like clsx.

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Featured Listings', href: '#featured' },
    { label: 'Get Started', href: '#cta' },
    { label: 'Contact', href: '#footer' }
  ]

  const toggleState = (stateSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    stateSetter((prev) => !prev)
  }

  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4 flex items-center justify-between py-4'>
        {/* Logo */}
        <div className='flex items-center'>
          <Image
            src='/logo.svg'
            alt='Marketplace Logo'
            width={112}
            height={28}
            className='object-contain w-28'
          />
        </div>

        {/* Desktop Search */}
        <div className='hidden sm:block w-full max-w-md'>
          <Search />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden sm:flex items-center space-x-6 text-gray-800 font-medium'>
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='hover:text-blue-600 transition-colors'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Controls */}
        <div className='flex items-center space-x-4 sm:hidden'>
          <Button
            variant='ghost'
            onClick={() => toggleState(setSearchOpen)}
            aria-label='Toggle search'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-4.35-4.35M11 18A7 7 0 1111 4a7 7 0 010 14z'
              />
            </svg>
          </Button>
          <Button
            variant='ghost'
            onClick={() => toggleState(setMenuOpen)}
            aria-label='Toggle menu'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-6 h-6'>
              {menuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='sm:hidden flex flex-col space-y-4 mt-2 bg-white shadow-md py-4 px-6 text-gray-800 font-medium'>
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className='hover:text-blue-600 transition-colors'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Mobile Search */}
      {searchOpen && (
        <div className='sm:hidden mt-2 px-4'>
          <Search />
        </div>
      )}
    </nav>
  )
}
