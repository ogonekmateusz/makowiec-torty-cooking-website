import React from 'react'
import cakeParticles from '../assets/cake-particles.png'

export default function CakeParticles() {
  return (
    <img className='cake-particles absolute right-0 hidden md:block w-100' src={cakeParticles} alt="Cake Particles" />
  )
}
