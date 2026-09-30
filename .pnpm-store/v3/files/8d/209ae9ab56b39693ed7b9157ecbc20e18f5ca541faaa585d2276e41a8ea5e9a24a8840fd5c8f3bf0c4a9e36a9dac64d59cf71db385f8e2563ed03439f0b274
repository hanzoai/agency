import { useEffect, useRef, useState } from 'react'

export interface UseCountUpOptions {
  /** Animation duration in ms. Default 1200. Set 0 to disable. */
  duration?: number
  /** Easing function. Default cubic ease-out. */
  ease?: (t: number) => number
  /** Re-trigger on `target` changes. Default true. */
  retrigger?: boolean
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

/**
 * Smoothly animates from 0 (or the previous value) up to `target`. Honors
 * `prefers-reduced-motion` and a `duration: 0` opt-out.
 */
export function useCountUp(target: number | null, opts: UseCountUpOptions = {}): number {
  const {
    duration = 1200,
    ease = easeOutCubic,
    retrigger = true,
  } = opts

  const [value, setValue] = useState(0)
  const raf = useRef<number | null>(null)
  const prev = useRef(0)

  useEffect(() => {
    if (target === null || target === undefined) return
    if (duration <= 0) { setValue(target); prev.current = target; return }

    const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setValue(target); prev.current = target; return }

    const from = retrigger ? prev.current : value
    const to = target
    if (from === to) return

    const start = performance.now()
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const v = from + (to - from) * ease(t)
      setValue(Math.round(v))
      if (t < 1) raf.current = requestAnimationFrame(step)
      else { prev.current = to; raf.current = null }
    }
    raf.current = requestAnimationFrame(step)
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration])

  return value
}
