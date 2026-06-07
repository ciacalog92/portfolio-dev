import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'

export type ViewMode = 'client' | 'developer'

/** idle = no transition · out = 404 glitch covering the screen · in = dissolve reveal */
export type TransitionPhase = 'idle' | 'out' | 'in'

type ViewModeContextValue = {
  /** The view currently rendered underneath the overlay. */
  mode: ViewMode
  /** The view we are switching to (only during a transition). */
  target: ViewMode | null
  phase: TransitionPhase
  switchTo: (mode: ViewMode) => void
  toggle: () => void
}

const ViewModeContext = createContext<ViewModeContextValue | null>(null)

const STORAGE_KEY = 'portfolio-view-mode'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ViewMode>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'developer' ? 'developer' : 'client'
  })
  const [target, setTarget] = useState<ViewMode | null>(null)
  const [phase, setPhase] = useState<TransitionPhase>('idle')

  // Refs let switchTo guard against re-entry without stale closures.
  const modeRef = useRef(mode)
  const phaseRef = useRef(phase)
  useEffect(() => {
    modeRef.current = mode
    phaseRef.current = phase
  }, [mode, phase])

  const switchTo = useCallback((next: ViewMode) => {
    if (next === modeRef.current || phaseRef.current !== 'idle') return
    setTarget(next)
    setPhase('out')
  }, [])

  const toggle = useCallback(() => {
    switchTo(modeRef.current === 'client' ? 'developer' : 'client')
  }, [switchTo])

  // Drive the transition timeline: out (glitch) → swap content → in (dissolve).
  useEffect(() => {
    if (phase === 'out' && target) {
      const reduce = prefersReducedMotion()
      const outMs = reduce ? 240 : target === 'developer' ? 1600 : 850
      const id = window.setTimeout(() => {
        setMode(target)
        setPhase('in')
      }, outMs)
      return () => window.clearTimeout(id)
    }
    if (phase === 'in') {
      const reduce = prefersReducedMotion()
      const inMs = reduce ? 200 : 950
      const id = window.setTimeout(() => {
        setPhase('idle')
        setTarget(null)
      }, inMs)
      return () => window.clearTimeout(id)
    }
  }, [phase, target])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode)
    document.body.dataset.mode = mode
  }, [mode])

  // Lock scroll while the overlay is up.
  useEffect(() => {
    if (phase === 'idle') return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [phase])

  const value = useMemo(
    () => ({ mode, target, phase, switchTo, toggle }),
    [mode, target, phase, switchTo, toggle],
  )

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  )
}

export function useViewMode() {
  const ctx = useContext(ViewModeContext)
  if (!ctx) throw new Error('useViewMode must be used within ViewModeProvider')
  return ctx
}
