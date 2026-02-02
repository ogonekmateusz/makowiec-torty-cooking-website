import React from 'react'

export default function NavbarItem({ title, href }) {
  return (
    <div >
      <a href={href} className="relative inline-block py-3 transition-all duration-300 hover:translate-x-2
                           after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
                           after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">
        {title}
      </a>
    </div>
  )
}
