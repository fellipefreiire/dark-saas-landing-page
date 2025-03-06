'use client'

import cursorImage from '@/assets/cursor.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function CursorImageMotion() {
  return (
    <motion.div
      className="absolute right-[476px] top-[108px] hidden md:inline"
      drag
      dragSnapToOrigin
    >
      <Image
        src={cursorImage}
        height={200}
        width={200}
        alt=""
        className="max-w-none"
        draggable="false"
      />
    </motion.div>
  )
}
