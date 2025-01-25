'use client'

import { Button } from '@/components/ui/button'

export default function Cta() {
  return (
    <section
      id='cta'
      className='bg-blue-600 text-white py-12 relative w-full h-screen overflow-hidden'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-4'>Pronto para anunciar seu equipamento ?</h2>
        <p className='mb-6'>
          Junte-se aos milhares profissionais comprando e vendendo na nossa plataforma !.
        </p>
        <Button
          variant='outline'
          className='bg-white text-blue-600 font-bold px-6 py-3'>
          Começe já
        </Button>
      </div>
    </section>
  )
}
