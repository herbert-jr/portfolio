'use client'

import gsap from 'gsap'
import React from 'react'

interface Props {
  children: React.ReactNode
}

function Container({ children }: Props) {
  const headerRef = React.useRef<HTMLHeadElement>(null)

  React.useEffect(() => {
    gsap.to(headerRef.current, {
      y: 0,
      duration: 0.8,
      ease: 'sine.out',
    })
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed w-screen h-20 flex items-center justify-between
   px-5 z-30 bg-background top-0 left-0 -translate-y-full"
    >
      {children}
    </header>
  )
}

export default Container
