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
    setScrollPosition((prev) => Math.min(prev + 500, (items.length - 1) * 300))
  }

  return (
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
  )
}
