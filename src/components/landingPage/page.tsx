'use client'

import NavBar from '@/components/navBar/navBar'
import Hero from '@/components/hero/hero'
import Featured from '@/components/featured/featured'
import Cta from '@/components/cta/cta'
import Contact from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
import Categories from '@/components/categories/categories'

export default function LandingPage() {
  return (
    <div className='min-h-screen bg-red-500'>
      {/* Navbar Section */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Categories section */}
      <Categories />

      {/* Featured Listings Section */}
      <Featured listName='Destaques' />

      <Featured listName='Mais procurados' />

      <Featured listName='Recomendados para você' />

      {/* CTA Section */}
      <Cta />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
