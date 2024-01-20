'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'

function SmallDot() {
  const smallDotRef = useRef<HTMLDivElement>(null)
  const smallDotSize = 8

  useEffect(() => {
    if (!smallDotRef.current) return

    const moveSmallDot = (e: MouseEvent) => {
      gsap.to(smallDotRef.current, {
        x: e.clientX - smallDotSize / 2,
        y: e.clientY - smallDotSize / 2,
        duration: 0.2,
        ease: 'expo',
      })
    }

    window.addEventListener('mousemove', moveSmallDot)

    return () => {
      window.removeEventListener('mousemove', moveSmallDot)
    }
  }, [])
  return (
    <div
      ref={smallDotRef}
      className="w-2 h-2 rounded-full bg-primary-default fixed z-10"
    ></div>
  )
}

export default SmallDot
