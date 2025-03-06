'use client'

import messageImage from '@/assets/message.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function MessageImageMotion() {
  return (
    <motion.div
      className="absolute left-[496px] top-[56px] hidden md:inline"
      drag
      dragSnapToOrigin
    >
      <Image
        src={messageImage}
        height={200}
        width={200}
        alt=""
        className="max-w-none"
        draggable="false"
      />
    </motion.div>
  )
}
