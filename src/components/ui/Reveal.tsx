import { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './Reveal.module.scss'

type RevealVariant = 'up' | 'left' | 'right' | 'scale'

const visibleClass: Record<RevealVariant, string> = {
  up:    styles.animateUp,
  left:  styles.animateLeft,
  right: styles.animateRight,
  scale: styles.animateScale,
}

interface RevealProps {
  children: ReactNode
  /** Animation direction / type. Default: 'up' */
  variant?: RevealVariant
  /** Delay before animation starts after element enters viewport (ms). Default: 0 */
  delay?: number
  /** Extra classes on the wrapper div */
  className?: string
}

export function Reveal({ children, variant = 'up', delay = 0, className }: RevealProps) {
  const { ref, isVisible } = useScrollReveal()

  const animClass = isVisible ? visibleClass[variant] : styles.hidden
  const combined = [animClass, className].filter(Boolean).join(' ')

  return (
    <div
      ref={ref}
      className={combined}
      style={isVisible && delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
