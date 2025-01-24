'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useState } from 'react'

export default function Featured() {
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
    setScrollPosition((prev) => Math.min(prev + 500, (items.length - 1) * 350))
  }

  return (
    <section
      id='featured'
      className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-extrabold text-center mb-12 text-gray-800'>Featured Listings</h2>
        <div className='relative'>
          <button
            onClick={scrollLeft}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full z-10 shadow-md hover:bg-blue-700 transition'>
            ←
          </button>
          <div className='overflow-hidden'>
            <div
              className='flex gap-10 scroll-snap-x mandatory'
              style={{ transform: `translateX(-${scrollPosition}px)` }}>
              {items.map((item, idx) => (
                <Card
                  key={idx}
                  className='shadow-lg w-full sm:w-80 md:w-[360px] rounded-lg hover:scale-105 transition-transform duration-200'>
                  <CardHeader className='p-0'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={360}
                      height={240}
                      className='rounded-t-lg object-cover w-full h-[240px]'
                    />
                  </CardHeader>
                  <CardContent className='p-6'>
                    <CardTitle className='text-xl font-bold text-gray-800'>{item.title}</CardTitle>
                    <p className='text-lg font-semibold text-blue-600'>{item.price}</p>
                  </CardContent>
                  <CardFooter className='p-6'>
                    <Button className='w-full bg-blue-600 text-white hover:bg-blue-700'>View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full z-10 shadow-md hover:bg-blue-700 transition'>
            →
          </button>
        </div>
      </div>
    </section>
  )
}
