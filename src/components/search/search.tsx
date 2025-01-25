'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function Search() {
  const [loading] = useState(false)

  return (
    <div className='w-full'>
      <form
        action='/search'
        method='GET'
        className='flex items-center bg-blue-500 rounded-lg overflow-hidden shadow-md'>
        <Input
          type='text'
          name='query'
          placeholder='Search...'
          className='flex-1 px-4 py-2 bg-white text-blue-1000 placeholder-white focus:outline-none focus:ring focus:ring-blue-300 focus:bg-white'
        />
        <Button
          type='submit'
          disabled={loading}
          className={`px-4 py-2 bg-blue-700 text-white font-bold hover:bg-blue-800 transition-all ${
            loading ? 'opacity-75 cursor-not-allowed' : ''
          }`}>
          {loading ? (
            <svg
              className='animate-spin h-5 w-5 text-white'
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
          ) : (
            'Search'
          )}
        </Button>
      </form>
    </div>
  )
}
