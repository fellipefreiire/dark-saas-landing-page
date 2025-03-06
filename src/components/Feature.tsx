'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Leaf } from 'lucide-react'
import { useEffect, useRef } from 'react'

type FeatureProps = {
  title: string
  description: string
}

export function Feature({ title, description }: FeatureProps) {
  const offsetX = useMotionValue(-100)
  const offsetY = useMotionValue(-100)
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`

  const borderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function updateMousePosition(e: MouseEvent) {
      if (!borderRef.current) return

      const borderRect = borderRef.current?.getBoundingClientRect()
      offsetX.set(e.x - borderRect.x)
      offsetY.set(e.y - borderRect.y)
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div className="border border-white/30 px-5 py-10 text-center rounded-xl md:flex-1 relative">
      <motion.div
        ref={borderRef}
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
      <div className="inline-flex h-14 w-14 bg-white items-center justify-center text-black rounded-lg">
        <Leaf />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  )
}
