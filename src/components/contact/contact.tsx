'use client'

import { Button } from '@/components/ui/button'
import { FunctionComponent } from 'react'

const Contact: FunctionComponent = () => {
  return (
    <section
      id='contact'
      className='bg-gray-200 py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Entre em contato</h2>
        <form className='max-w-xl mx-auto space-y-6'>
          <div>
            <label className='block text-gray-700 font-bold mb-2'>Nome</label>
            <input
              type='text'
              placeholder='Seu Nome'
              className='w-full border border-gray-300 rounded px-4 py-2 text-sm sm:text-base'
            />
          </div>
          <div>
            <label className='block text-gray-700 font-bold mb-2'>Email</label>
            <input
              type='email'
              placeholder='Seu Email'
              className='w-full border border-gray-300 rounded px-4 py-2 text-sm sm:text-base'
            />
          </div>
          <div>
            <label className='block text-gray-700 font-bold mb-2'>Mensagem</label>
            <textarea
              placeholder='Sua Mensagem'
              className='w-full border border-gray-300 rounded px-4 py-2 text-sm sm:text-base'
              rows={4}
            />
          </div>
          <Button className='w-full bg-sky-600 text-white py-3'>Enviar mensagem</Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
