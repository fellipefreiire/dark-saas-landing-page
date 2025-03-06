'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { useState } from 'react'

type AccordionItemProps = {
  question: string
  answer: string
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {!isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              transform: 'rotate(0)',
            }}
            animate={{
              opacity: 1,
              transform: 'rotate(180deg)',
            }}
            exit={{
              opacity: 0,
              transform: 'rotate(0deg)',
            }}
          >
            <PlusIcon />
          </motion.div>
        )}
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              transform: 'rotate(0)',
            }}
            animate={{
              opacity: 1,
              transform: 'rotate(180deg)',
            }}
            exit={{
              opacity: 0,
              transform: 'rotate(0deg)',
            }}
          >
            <MinusIcon />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
              marginTop: 16,
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
