'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
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
        src='/test.svg'
        alt='Heavy Machinery'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className='absolute inset-0 z-0 opacity-40'
      />
    </section>
  )
}
