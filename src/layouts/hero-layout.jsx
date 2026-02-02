import React from 'react'

export default function HeroLayout({ children }) {
  return (
    <div className="hero-layout w-full bg-linear-to-tr from-pink-300 via-pink-400 to-pink-500">
      {children}
    </div>
  )
}
