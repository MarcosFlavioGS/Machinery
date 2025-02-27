'use client'

import { FunctionComponent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Search from '@/components/search/search'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const NavBar: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '/#hero' },
    { label: 'Destaques', href: '/#featured' },
    { label: 'Começe Já', href: '/#cta' },
    { label: 'Contato', href: '/#footer' }
  ]

  const toggleState = (stateSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    stateSetter((prev) => !prev)
  }

  return (
    <nav className='bg-sky-700 shadow-md'>
      <div className='container mx-auto px-4 flex items-center justify-between py-4'>
        {/* Logo */}
        <div className='flex items-center flex-shrink-0 ml-[-110px]'>
          <Link href='/'>
            <Image
              src='/logo.svg'
              alt='Marketplace Logo'
              width={100}
              height={100}
              className='w-auto h-8 sm:h-9 lg:h-16 max-w-xs object-contain'
            />
          </Link>
        </div>

        {/* Desktop Search */}
        <div className='hidden lg:block flex-grow max-w-md px-4'>
          <Search />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex items-center space-x-6 text-white font-bold'>
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='hover:text-gray-300 transition-colors'>
                {item.label}
              </a>
            </li>
          ))}
          {/* Avatar */}
          <div>
            <Avatar>
              <AvatarImage
                src='/avatar.svg'
                alt='Avatar'
              />
              <AvatarFallback />
              CN
            </Avatar>
          </div>
        </ul>

        {/* Mobile Controls */}
        <div className='flex items-center space-x-4 lg:hidden'>
          <Button
            variant='ghost'
            onClick={() => toggleState(setSearchOpen)}
            aria-label='Toggle search'
            className='hover:bg-sky-800'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-6 h-6 text-white'>
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
            aria-label='Toggle menu'
            className='hover:bg-sky-800'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-6 h-6 text-white'>
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
        <ul className='lg:hidden flex flex-col space-y-2 mt-2 bg-sky-600 shadow-md py-4 px-6 text-white font-bold animate-slide-down'>
          {/* Avatar */}
          <div>
            <Avatar>
              <AvatarImage
                src='/avatar.svg'
                alt='Avatar'
              />
              <AvatarFallback />
              CN
            </Avatar>
          </div>
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className='hover:text-gray-300 transition-colors'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Mobile Search */}
      {searchOpen && (
        <div className='lg:hidden mt-2 px-4'>
          <Search />
        </div>
      )}
    </nav>
  )
}

export default NavBar
