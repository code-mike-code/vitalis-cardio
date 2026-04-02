import { useRef, useState, useEffect, RefObject } from 'react'

interface UseScrollRevealResult<T extends HTMLElement> {
  ref: RefObject<T>
  isVisible: boolean
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15): UseScrollRevealResult<T> {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
