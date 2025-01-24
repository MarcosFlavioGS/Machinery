'use client'

import { Button } from '@/components/ui/button'

export default function Cta() {
  return (
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
  )
}
