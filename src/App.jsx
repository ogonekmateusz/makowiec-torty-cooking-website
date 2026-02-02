import React from 'react'
import HeroLayout from './layouts/hero-layout'
import Navbar from './sections/navbar'
import Hero from './sections/hero'

export default function App() {
  return (
    <HeroLayout>
      <Navbar />
      <Hero />  
    </HeroLayout>
  )
}
