'use client'

import { Separator } from '@/components/ui/separator'

import NavBar from '@/components/navBar/navBar'
import Hero from '@/components/hero/hero'
import Featured from '@/components/featured/featured'
import Cta from '@/components/cta/cta'
import Contact from '@/components/contact/contact'
import Footer from '@/components/footer/footer'

export default function LandingPage() {
  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Navbar Section */}
      <NavBar />

      <Separator />

      {/* Hero Section */}
      <Hero />

      {/* Featured Listings Section */}
      <Featured />

      {/* CTA Section */}
      <Cta />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
