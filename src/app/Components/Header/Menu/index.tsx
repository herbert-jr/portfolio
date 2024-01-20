'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import MenuBtn from './MenuBtn'
import Navigation from './Navigation'

function Menu() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <MenuBtn open={open} setOpen={setOpen} />
      <AnimatePresence mode="wait">
        {open && <Navigation setOpen={setOpen} />}
      </AnimatePresence>
    </>
  )
}

export default Menu
