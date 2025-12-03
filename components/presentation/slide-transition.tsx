/**
 * Advanced Slide Transitions with Direction Awareness
 */
'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

export type TransitionType = 'slide' | 'fade' | 'scale' | 'flip' | 'cube'
export type Direction = 'forward' | 'backward'

interface SlideTransitionProps {
  children: ReactNode
  transitionType?: TransitionType
  direction?: Direction
}

const slideVariants: Variants = {
  enter: (direction: Direction) => ({
    x: direction === 'forward' ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => ({
    x: direction === 'forward' ? -1000 : 1000,
    opacity: 0,
  }),
}

const fadeVariants: Variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const scaleVariants: Variants = {
  enter: {
    scale: 0.8,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 1.2,
    opacity: 0,
  },
}

const flipVariants: Variants = {
  enter: (direction: Direction) => ({
    rotateY: direction === 'forward' ? 90 : -90,
    opacity: 0,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => ({
    rotateY: direction === 'forward' ? -90 : 90,
    opacity: 0,
  }),
}

const cubeVariants: Variants = {
  enter: (direction: Direction) => ({
    x: direction === 'forward' ? '100%' : '-100%',
    rotateY: direction === 'forward' ? -90 : 90,
    opacity: 0,
  }),
  center: {
    x: 0,
    rotateY: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => ({
    x: direction === 'forward' ? '-100%' : '100%',
    rotateY: direction === 'forward' ? 90 : -90,
    opacity: 0,
  }),
}

const transitionVariantsMap = {
  slide: slideVariants,
  fade: fadeVariants,
  scale: scaleVariants,
  flip: flipVariants,
  cube: cubeVariants,
}

export function SlideTransition({
  children,
  transitionType = 'slide',
  direction = 'forward'
}: SlideTransitionProps) {
  const variants = transitionVariantsMap[transitionType]

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        rotateY: { duration: 0.5 },
        scale: { duration: 0.4, ease: 'easeOut' },
      }}
      className="absolute inset-0"
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}

interface PageTransitionProps {
  children: ReactNode
  direction: Direction
}

export function PageTransition({ children, direction }: PageTransitionProps) {
  return (
    <motion.div
      key={`page-${direction}`}
      custom={direction}
      initial={{
        x: direction === 'forward' ? '100%' : '-100%',
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
      exit={{
        x: direction === 'forward' ? '-100%' : '100%',
        opacity: 0
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  )
}
