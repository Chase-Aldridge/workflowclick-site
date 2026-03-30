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

// Color themes per audience
const audienceColors: Record<Audience, Record<string, string>> = {
  agency: {
    '--color-primary': '#105eb2',      // Brand dark blue - trust, stability
    '--color-primary-dark': '#0c4a8c',
    '--color-primary-light': '#84acef',
  },
  insurtech: {
    '--color-primary': '#618b94',      // Slate teal - innovation, tech
    '--color-primary-dark': '#4d7078',
    '--color-primary-light': '#90dddf',
  },
}

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

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudienceState] = useState<Audience | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // No localStorage - always start with gate
  useEffect(() => {
    setIsLoaded(true)
    document.getElementById('loading-screen')?.remove()
    document.body.classList.add('app-ready')
  }, [])

  // Apply color theme to document when audience changes
  useEffect(() => {
    if (!audience) return
    const colors = audienceColors[audience]
    const root = document.documentElement
    for (const [prop, value] of Object.entries(colors)) {
      root.style.setProperty(prop, value)
    }
  }, [audience])

  // Switch to white background once audience is selected (gate dismissed)
  useEffect(() => {
    if (audience) {
      document.body.classList.add('app-ready')
    }
  }, [audience])

  function setAudience(a: Audience) {
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
