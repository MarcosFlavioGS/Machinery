'use client'

import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className='bg-white shadow-md py-4'>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        <div className='flex items-center space-x-4 sm:space-x-10'>
          <Image
            src='/logo.svg'
            alt='Marketplace Logo'
            width={400}
            height={400}
            className='object-contain'
          />
        </div>
        <ul className='hidden sm:flex space-x-6 text-gray-800'>
          <li>
            <a
              href='#hero'
              className='hover:text-white'>
              Home
            </a>
          </li>
          <li>
            <a
              href='#featured'
              className='hover:text-blue-600'>
              Featured Listings
            </a>
          </li>
          <li>
            <a
              href='#cta'
              className='hover:text-blue-600'>
              Get Started
            </a>
          </li>
          <li>
            <a
              href='#footer'
              className='hover:text-blue-600'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
