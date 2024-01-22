import { motion } from 'framer-motion'
import { mainMotionProps } from '../../Animation'
import { MainLinks } from '../../data'
import LinkItem from './LinkItem'

interface MainNavProps {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
  handleChangeBackground: (index: number) => void
}

function MainNav({ setToggle, handleChangeBackground }: MainNavProps) {
  return (
    <menu
      className="w-full py-8 flex flex-col items-start gap-5 font-dm-sans
     h-auto z-10 -rotate-2"
    >
      {MainLinks.map((item, index) => (
        <motion.li
          {...mainMotionProps}
          custom={index}
          key={`menu_${item.title}`}
          className="overflow-hidden p-1"
        >
          <LinkItem
            link={item.link}
            title={item.title}
            onClick={() => setToggle(false)}
            onMouseEnter={() => handleChangeBackground(index + 1)}
            onMouseLeave={() => handleChangeBackground(0)}
          />
        </motion.li>
      ))}
    </menu>
  )
}

export default MainNav
