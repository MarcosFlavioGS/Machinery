'use client'

import { Button } from '@/components/ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative w-full h-screen overflow-hidden'>
      {/* Background Video */}
      <div className='absolute inset-0'>
        <AspectRatio
          ratio={16 / 9}
          className='w-full h-full'>
          <video
            src='https://video-stream-poc-elixir.s3.us-east-2.amazonaws.com/uploads/machinery.mp4'
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-full object-cover filter opacity-40'
          />
        </AspectRatio>
        <div className='absolute inset-0 bg-black/40' /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className='relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4'>
        <h1 className='text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6'>Máquina Market</h1>
        <p className='text-lg sm:text-xl md:text-2xl max-w-2xl mb-8'>
          A plataforma perfeita para comprar, vender e alugar equipamentos industriais.
        </p>
        <Button
          variant='default'
          className='bg-sky-600 hover:bg-sky-700 text-white font-bold px-8 py-4 text-lg rounded-lg'>
          Explore Agora
        </Button>
      </div>
    </section>
  )
}
