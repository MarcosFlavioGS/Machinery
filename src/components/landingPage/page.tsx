'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useState } from 'react'

export default function LandingPage() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const items = [
    { title: 'MARAIS SMC 200 R', price: '$25,000', image: '/MARAIS SMC 200 R.png' },
    { title: 'Bulldozer XT200', price: '$35,000', image: '/bulldozer.png' },
    { title: 'Komatsu PC210-LC', price: '$50,000', image: '/Komatsu PC210-LC.png' },
    { title: 'Loader Pro XL', price: '$40,000', image: '/bulldozer.png' },
    { title: 'DrillMaster 500', price: '$60,000', image: '/bulldozer.png' },
    { title: 'Loader Pro XL', price: '$40,000', image: '/bulldozer.png' },
    { title: 'DrillMaster 500', price: '$40,000', image: '/bulldozer.png' },
    { title: 'Komatsu PC210-LC', price: '$40,000', image: '/MARAIS SMC 200 R.png' }
  ]

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - 500, 0))
  }

  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + 500, (items.length - 1) * 300))
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Navbar Section */}
      <nav className='bg-white shadow-md py-4'>
        <div className='container mx-auto px-4 flex items-center justify-between'>
          <div className='flex items-center space-x-4 sm:space-x-10'>
            <Image
              src='/logo.svg'
              alt='Marketplace Logo'
              width={150}
              height={150}
              className='object-contain'
            />
            <span className='text-xl font-bold text-gray-800'>Machinery Market</span>
          </div>
          <ul className='hidden sm:flex space-x-6 text-gray-800'>
            <li>
              <a
                href='#hero'
                className='hover:text-blue-600'>
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
          <form
            action='/search'
            method='GET'
            className='flex items-center space-x-2'>
            <input
              type='text'
              name='query'
              placeholder='Search machines...'
              className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 w-32 sm:w-auto'
            />
            <Button
              type='submit'
              className='bg-blue-600 text-white px-4 py-2 rounded-lg'>
              Search
            </Button>
          </form>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id='hero'
        className='relative bg-blue-600 text-white py-20 text-center'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>Heavy Machinery Marketplace</h1>
          <p className='text-lg sm:text-xl md:text-2xl mb-6'>
            The ultimate platform to buy, sell, and lease industrial equipment.
          </p>
          <Button
            variant='outline'
            className='bg-white text-blue-600 font-bold px-6 py-3'>
            Explore Now
          </Button>
        </div>
        <Image
          src='/images/logo.svg'
          alt='Heavy Machinery'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className='absolute inset-0 z-0 opacity-40'
        />
      </section>

      {/* Featured Listings Section */}
      <section
        id='featured'
        className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>Featured Listings</h2>
          <div className='relative'>
            <button
              onClick={scrollLeft}
              className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full z-10'>
              ←
            </button>
            <div className='overflow-auto'>
              <div
                className='flex gap-8'
                style={{ transform: `translateX(-${scrollPosition}px)` }}>
                {items.map((item, idx) => (
                  <Card
                    key={idx}
                    className='shadow-md w-72 sm:w-80 md:w-96'>
                    <CardHeader>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={200}
                        className='rounded-t-md object-cover w-full h-[200px]'
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{item.title}</CardTitle>
                      <p className='text-lg font-semibold text-gray-800'>{item.price}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className='w-full'>View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
            <button
              onClick={scrollRight}
              className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full z-10'>
              →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id='cta'
        className='bg-blue-600 text-white py-12'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-4'>Ready to List Your Machinery?</h2>
          <p className='mb-6'>Join thousands of professionals buying and selling on our platform.</p>
          <Button
            variant='outline'
            className='bg-white text-blue-600 font-bold px-6 py-3'>
            Get Started
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='bg-gray-200 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-8'>Contact Us</h2>
          <form className='max-w-xl mx-auto space-y-6'>
            <div>
              <label className='block text-gray-700 font-bold mb-2'>Name</label>
              <input
                type='text'
                placeholder='Your Name'
                className='w-full border border-gray-300 rounded px-4 py-2 text-sm sm:text-base'
              />
            </div>
            <div>
              <label className='block text-gray-700 font-bold mb-2'>Email</label>
              <input
                type='email'
                placeholder='Your Email'
                className='w-full border border-gray-300 rounded px-4 py-2 text-sm sm:text-base'
              />
            </div>
            <div>
              <label className='block text-gray-700 font-bold mb-2'>Message</label>
              <textarea
                placeholder='Your Message'
                className='w-full border border-gray-300 rounded px-4 py-2 text-sm sm:text-base'
                rows={4}
              />
            </div>
            <Button className='w-full bg-blue-600 text-white py-3'>Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        id='footer'
        className='bg-gray-800 text-white py-6'>
        <div className='container mx-auto text-center'>
          <p className='text-sm sm:text-base'>
            &copy; {new Date().getFullYear()} Heavy Machinery Marketplace. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
