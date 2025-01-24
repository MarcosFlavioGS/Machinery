'use client'

export default function Footer() {
  return (
    <footer
      id='footer'
      className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto text-center'>
        <p className='text-sm sm:text-base'>
          &copy; {new Date().getFullYear()} Heavy Machinery Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
