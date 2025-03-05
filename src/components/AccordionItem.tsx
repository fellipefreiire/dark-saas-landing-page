'use client'

import { cn } from '@/utils/cn'
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
        {isOpen && <MinusIcon />}
        {!isOpen && <PlusIcon />}
      </div>
      <div
        className={cn('hidden mt-4', {
          block: isOpen,
        })}
      >
        {answer}
      </div>
    </div>
  )
}
