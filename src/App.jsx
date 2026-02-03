import React from 'react'
import HeroLayout from './layouts/hero-layout'
import Navbar from './sections/navbar'
import Hero from './sections/hero'
import CakeParticles from './components/Cake-particles'

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <CakeParticles />
      <HeroLayout>
        <Navbar />
        <Hero />  
      </HeroLayout>
    </div>
  )
}
