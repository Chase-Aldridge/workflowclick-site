'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

function AccordionRow({ question, answer }: AccordionItem) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-dark pr-4">{question}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-medium-gray transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <p className="text-medium-gray leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {items.map((item) => (
        <AccordionRow key={item.question} {...item} />
      ))}
    </div>
  )
}
