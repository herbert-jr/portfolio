import { motion } from 'framer-motion'
import { useState } from 'react'
import { navMotionProps } from '../Animation'
import { bgHover } from '../data'
import FooterNav from './FooterNav'
import MainNav from './MainNav'

interface NavigationBtnProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Navigation({ setOpen }: NavigationBtnProps) {
  const [backgroundHover, setBackgroundHover] = useState<number>(0)

  const handleChangeBackground = (index: number): void => {
    setBackgroundHover(index)
  }

  return (
    <motion.nav
      {...navMotionProps}
      className="w-full h-auto fixed top-0 left-0 z-40 px-8 text-background
      flex flex-col justify-center items-start"
    >
      <div
        className="w-full h-[calc(100%+0.75rem)] -rotate-2 -skew-x-2 skew-y-0 
        scale-x-105 absolute -top-3 md:-top-7 xl:-top-9 2xl:-top-14 left-0 -z-10 transition-colors duration-200
         ease-in-out "
        style={{ backgroundColor: bgHover[backgroundHover] }}
      ></div>
      <MainNav
        setOpen={setOpen}
        handleChangeBackground={handleChangeBackground}
      />
      <FooterNav />
    </motion.nav>
  )
}

export default Navigation
