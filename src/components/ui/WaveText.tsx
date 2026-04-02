import { Fragment, useEffect, useRef, useState, ElementType } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './WaveText.module.scss'

interface WaveTextProps {
  text: string
  /** HTML tag to render the outer wrapper as. Default: 'span' */
  as?: ElementType
  /** Delay before the first character starts (ms). Default: 0 */
  delay?: number
  /** Stagger between consecutive characters (ms). Default: 22 */
  charDelay?: number
  /**
   * When true, animation fires immediately on mount (for above-the-fold elements like Hero).
   * When false (default), animation fires when element enters the viewport on scroll.
   */
  onMount?: boolean
  className?: string
}

export function WaveText({
  text,
  as: Tag = 'span',
  delay = 0,
  charDelay = 22,
  onMount = false,
  className = '',
}: WaveTextProps) {
  const { ref: scrollRef, isVisible } = useScrollReveal()

  const [mountReady, setMountReady] = useState(false)
  useEffect(() => {
    if (!onMount) return
    const frame = requestAnimationFrame(() => setMountReady(true))
    return () => cancelAnimationFrame(frame)
  }, [onMount])

  const ready = onMount ? mountReady : isVisible

  const mountRef = useRef<HTMLElement>(null)
  const tagRef = onMount ? mountRef : (scrollRef as React.RefObject<HTMLElement>)

  const words = text.split(' ')
  let charIndex = 0

  return (
    <Tag ref={tagRef} className={className} aria-label={text} role="text">
      {words.map((word, wi) => {
        const wordStart = charIndex
        charIndex += word.length + 1

        return (
          <Fragment key={wi}>
            <span className={styles.wordWrapper}>
              {word.split('').map((char, ci) => (
                <span key={ci} className={styles.charClip}>
                  <span
                    className={ready ? styles.charVisible : styles.charHidden}
                    style={ready ? { animationDelay: `${delay + (wordStart + ci) * charDelay}ms` } : undefined}
                    aria-hidden="true"
                  >
                    {char}
                  </span>
                </span>
              ))}
            </span>
            {wi < words.length - 1 && ' '}
          </Fragment>
        )
      })}
    </Tag>
  )
}
