'use client'

import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
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
  )
}
