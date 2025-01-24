'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function Search() {
  const [loading] = useState(false)

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   setLoading(true)
  //   // Simulate form submission delay
  //   setTimeout(() => {
  //     setLoading(false)
  //     e.currentTarget.submit()
  //   }, 1000)
  // }

  return (
    <section
      className='py-16 bg-gray-50'
      id='search'>
      <div className='container px-4 flex justify-center'>
        <form
          action='/search'
          method='GET'
          // onSubmit={handleSubmit}
          className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-3xl'>
          <Input
            type='text'
            name='query'
            placeholder='Search machines...'
            className='px-6 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300 w-full text-lg transition-all'
          />
          <Button
            type='submit'
            disabled={loading}
            className={`flex items-center justify-center bg-blue-600 text-white px-6 py-4 rounded-lg text-lg transition-all ${
              loading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}>
            {loading ? (
              <svg
                className='animate-spin h-5 w-5 mr-2 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'>
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z'></path>
              </svg>
            ) : null}
            Search
          </Button>
        </form>
      </div>
    </section>
  )
}
