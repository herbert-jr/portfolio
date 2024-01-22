'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Burger from './Burger'
import Navigation from './Navigation'

function Menu() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Burger isOpen={toggle} onClick={() => setToggle(!toggle)} />
      <AnimatePresence mode="wait">
        {toggle && <Navigation setToggle={setToggle} />}
      </AnimatePresence>
    </>
  )
}

export default Menu
