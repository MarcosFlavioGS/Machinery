'use client'

import NavBar from '@/components/navBar/navBar'
import Hero from '@/components/hero/hero'
import Featured from '@/components/featured/featured'
import Cta from '@/components/cta/cta'
import Contact from '@/components/contact/contact'
import Footer from '@/components/footer/footer'

export default function LandingPage() {
  return (
    <div className='min-h-screen bg-gray-400'>
      {/* Navbar Section */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Featured Listings Section */}
      <Featured listName='Most searched' />

      <Featured listName='Trending' />

      <Featured listName='Picks for you' />

      {/* CTA Section */}
      <Cta />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
