import React from 'react'
import HeroLayout from './layouts/hero-layout'

export default function App() {
  return (
    <HeroLayout>
      <h1 className="text-4xl font-bold text-center">Welcome to My App</h1>
      <p className="text-center mt-4">This is a simple hero layout example.</p>
    </HeroLayout>
  )
}
