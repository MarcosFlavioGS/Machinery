'use client'

import { Button } from '@/components/ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

export default function Cta() {
  return (
    <section
      id='cta'
      className='bg-sky-600 text-white py-12 relative w-full h-screen overflow-hidden'>
      {/* Background Video */}
      <div className='absolute inset-0'>
        <AspectRatio
          ratio={16 / 9}
          className='w-full h-full'>
          <Image
            src='/logo.svg'
            alt='Marketplace Logo'
            width={200}
            height={200}
            className='w-full h-full object-cover filter opacity-40'
          />
        </AspectRatio>
        <div className='absolute inset-0 bg-black/40' /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className='relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4'>
        <h1 className='text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6'>
          Pronto para anunciar seu equipamento ?
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl max-w-2xl mb-8'>
          Junte-se aos milhares de profissionais comprando e vendendo na nossa plataforma !
        </p>
        <Button
          variant='default'
          className='bg-sky-600 hover:bg-sky-700 text-white font-bold px-8 py-4 text-lg rounded-lg'>
          Começe já
        </Button>
      </div>
    </section>
  )
}
