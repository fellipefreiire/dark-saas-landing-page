'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import appScreen from '@/assets/app-screen.png'
import { useRef } from 'react'

export function ProductShowcaseImageMotion() {
  const imageRef = useRef<HTMLImageElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end end'],
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1])

  return (
    <motion.div
      style={{
        opacity,
        rotateX,
        transformPerspective: '800px',
      }}
    >
      <Image
        ref={imageRef}
        src={appScreen}
        alt="The product screenshot"
        className="mt-14 mx-auto"
      />
    </motion.div>
  )
}
