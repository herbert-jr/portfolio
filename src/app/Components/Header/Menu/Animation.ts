import { FooterLinks, MainLinks } from './data'

const navVariants = {
  initial: {
    height: '0rem',
  },
  animate: {
    height: 'auto',
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    height: '0rem',
    transition: {
      duration: 0.6,
      delay: 0.4,
    },
  },
}

export const navMotionProps = {
  variants: navVariants,
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
}

const footerVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: (index: number) => ({
    scale: [1, 1.1, 1],
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.15 * index + 0.5,
    },
  }),
  exit: (index: number) => ({
    scale: [1.1, 1, 0],
    opacity: [1, 1, 0],
    transition: {
      duration: 0.5,
      delay: (FooterLinks.length - 1 - index) * 0.15,
    },
  }),
}

export const footerMotionProps = {
  variants: footerVariants,
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
}

const mainVariants = {
  initial: {
    x: 0,
    opacity: 0,
  },
  animate: (index: number) => ({
    x: [0, 20, 0],
    opacity: [0, 0.5, 0.5, 1],
    transition: {
      duration: 0.4,
      delay: 0.15 * index,
    },
  }),
  exit: (index: number) => ({
    x: [0, 20, 0],
    opacity: [1, 0.5, 0],
    transition: {
      duration: 0.4,
      delay: (MainLinks.length - 1 - index) * 0.15,
    },
  }),
}

export const mainMotionProps = {
  variants: mainVariants,
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  transition: {
    type: 'spring',
    stiffness: 300,
    mass: 0.5,
    damping: 30,
    bounce: 50,
  },
}
