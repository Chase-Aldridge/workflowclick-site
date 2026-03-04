'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'
import {
  audienceContent,
  type Audience,
  type AudienceContent,
} from '@/data/audience-content'

const STORAGE_KEY = 'wc-audience'

interface AudienceContextValue {
  audience: Audience | null
  setAudience: (a: Audience) => void
  content: AudienceContent | null
  isGateVisible: boolean
  isLoaded: boolean
}

const AudienceContext = createContext<AudienceContextValue>({
  audience: null,
  setAudience: () => {},
  content: null,
  isGateVisible: true,
  isLoaded: false,
})

function isValidAudience(value: string | null): value is Audience {
  return value === 'agency' || value === 'insurtech'
}

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudienceState] = useState<Audience | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Read from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isValidAudience(stored)) {
      setAudienceState(stored)
    }
    setIsLoaded(true)
  }, [])

  function setAudience(a: Audience) {
    localStorage.setItem(STORAGE_KEY, a)
    setAudienceState(a)
  }

  const content = audience ? audienceContent[audience] : null
  const isGateVisible = isLoaded && audience === null

  return (
    <AudienceContext.Provider
      value={{ audience, setAudience, content, isGateVisible, isLoaded }}
    >
      {children}
    </AudienceContext.Provider>
  )
}

export function useAudience() {
  return useContext(AudienceContext)
}
