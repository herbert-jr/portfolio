'use client'

import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

type Effects = {
  [key: string]: () => void
}

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

    const effects: Effects = {
      none: () => {
        const { width, height, left, top } =
          elementHover?.getBoundingClientRect() as DOMRect
        const center = {
          x: left + width / 2,
          y: top + height / 2,
        }

        gsap.to(bigDot, {
          x: center.x - width / 2,
          y: center.y - height / 2,
          duration: 1.5,
          ease: 'elastic',
          borderRadius: '10%',
          width,
          height,
          opacity: 0,
          scale: 1,
        })
      },
      burger: () => {
        const { width, height, left, top } =
          elementHover?.getBoundingClientRect() as DOMRect
        const center = {
          x: left + width / 2,
          y: top + height / 2,
        }

        gsap.to(bigDot, {
          x: center.x - width / 2,
          y: center.y - height / 2,
          duration: 1.5,
          ease: 'elastic',
          borderRadius: '50%',
          width,
          height,
          opacity: 1,
          scale: 1.2,
        })
      },
    }

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
        scale: 1,
      })
    }

    const moveBigDot = (e: MouseEvent) => {
      if (isHover && dataHover) {
        const animateBigDotHover = effects[dataHover]

        animateBigDotHover()
      } else {
        animateBigDot(e, bigDotSize, bigDot)
      }
    }

    const onHover = (e: MouseEvent) => {
      setIsHover(true)
      const element = e.target as HTMLElement
      setElementHover(element)
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
