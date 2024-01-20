'use client'

import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

type MagneticProps = {
  children: React.ReactElement
}

function Magnetic({ children }: MagneticProps) {
  const magnetic = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!magnetic.current) return

    const xTo = gsap.quickTo(magnetic.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    })
    const yTo = gsap.quickTo(magnetic.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    })

    magnetic.current.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e
      const element = magnetic.current as HTMLElement
      const { height, width, left, top } = element.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x * 0.15)
      yTo(y * 0.15)
    })
    magnetic.current.addEventListener('mouseleave', () => {
      xTo(0)
      yTo(0)
    })
  }, [])

  return React.cloneElement(children, { ref: magnetic })
}

export default Magnetic
