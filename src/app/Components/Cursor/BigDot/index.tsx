'use client'

import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

function BigDot() {
  const [isHover, setIsHover] = useState(false)
  const [elementHover, setElementHover] = useState<HTMLElement | null>(null)
  const bigDotRef = useRef<HTMLDivElement>(null)
  const bigDotSize = 36

  useEffect(() => {
    if (!bigDotRef.current) return
    const bigDot = bigDotRef.current
    const allDataHover = document.querySelectorAll('[data-hover]')
    const dataHover = elementHover?.dataset.hover

    const animateBigDot = (
      e: MouseEvent,
      size: number,
      element: HTMLDivElement,
    ) => {
      gsap.to(element, {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
        duration: 2,
        ease: 'elastic',
        borderRadius: '50%',
        width: size,
        height: size,
        opacity: 1,
      })
    }

    const moveBigDot = (e: MouseEvent) => {
      animateBigDot(e, bigDotSize, bigDot)
    }

    const onHover = (e: MouseEvent) => {
      setIsHover(true)
      setElementHover(e.target as HTMLElement)
    }

    const onHoverOut = () => {
      setIsHover(false)
      setElementHover(null)
    }

    window.addEventListener('mousemove', moveBigDot)

    allDataHover.forEach((element) => {
      element.addEventListener('mouseover', (e) => onHover(e as MouseEvent))
      element.addEventListener('mouseout', onHoverOut)
    })

    return () => {
      window.removeEventListener('mousemove', moveBigDot)

      allDataHover.forEach((element) => {
        element.removeEventListener('mouseover', (e) =>
          onHover(e as MouseEvent),
        )
        element.removeEventListener('mouseout', onHoverOut)
      })
    }
  }, [isHover])

  return <div ref={bigDotRef} className="bg-big-dot fixed"></div>
}

export default BigDot
