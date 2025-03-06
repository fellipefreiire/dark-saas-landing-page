'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import acmeLogo from '@/assets/acme.png'
import quantumLogo from '@/assets/quantum.png'
import echoLogo from '@/assets/echo.png'
import celestialLogo from '@/assets/celestial.png'
import pulseLogo from '@/assets/pulse.png'
import apexLogo from '@/assets/apex.png'

const images = [
  { src: acmeLogo, alt: 'Acme Logo' },
  { src: quantumLogo, alt: 'Quantum Logo' },
  { src: echoLogo, alt: 'Echo Logo' },
  { src: celestialLogo, alt: 'Celestial Logo' },
  { src: pulseLogo, alt: 'Pulse Logo' },
  { src: apexLogo, alt: 'Apex Logo' },
]

export function LogoTickerMotion() {
  return (
    <motion.div
      transition={{
        duration: 10,
        ease: 'linear',
        repeat: Infinity,
      }}
      initial={{ translateX: 0 }}
      animate={{ translateX: '-50%' }}
      className="flex flex-none gap-16 pr-16"
    >
      {images.map((item) => (
        <Image
          key={item.src.src}
          src={item.src}
          alt={item.alt}
          className="flex-none h-8 w-auto"
        />
      ))}
      {images.map((item) => (
        <Image
          key={item.src.src}
          src={item.src}
          alt={item.alt}
          className="flex-none h-8 w-auto"
        />
      ))}
    </motion.div>
  )
}
