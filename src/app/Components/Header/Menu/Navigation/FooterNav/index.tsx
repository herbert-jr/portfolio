import { Magnetic } from '@/app/Components/Common'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { footerMotionProps } from '../../Animation'
import { FooterLinks } from '../../data'

function FooterNav() {
  return (
    <ul
      className="w-full pt-3 pb-14 flex items-center justify-end gap-5
     -rotate-2 font-medium font-dm-sans text-xl"
    >
      {FooterLinks.map((item, index) => (
        <Magnetic key={index}>
          <motion.li {...footerMotionProps} custom={index} className="p-1">
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </Link>
          </motion.li>
        </Magnetic>
      ))}
    </ul>
  )
}

export default FooterNav
