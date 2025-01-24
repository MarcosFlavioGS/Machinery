'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Search() {
  return (
    <section
      className='py-16'
      id='search'>
      <div className='container px-4 flex justify-center'>
        <form
          action='/search'
          method='GET'
          className='flex items-center space-x-4 w-full max-w-3xl'>
          <Input
            type='text'
            name='query'
            placeholder='Search machines...'
            className='px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 w-full sm:w-auto text-lg'
          />
          <Button
            type='submit'
            className='bg-blue-600 text-white px-6 py-3 rounded-lg text-lg'>
            Search
          </Button>
        </form>
      </div>
    </section>
  )
}
