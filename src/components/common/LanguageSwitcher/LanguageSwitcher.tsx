import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import type { Language } from '@/i18n'
import styles from './LanguageSwitcher.module.scss'

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'pl', label: 'PL' },
  { code: 'en', label: 'EN' },
  { code: 'ua', label: 'UA' },
]

interface LanguageSwitcherProps {
  variant?: 'onDark'
}

export function LanguageSwitcher({ variant }: LanguageSwitcherProps = {}) {
  const { language, setLanguage } = useLanguage()
  const onDark = variant === 'onDark'
  const [expanded, setExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!expanded) return
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setExpanded(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [expanded])

  const inactiveLangs = LANGUAGES.filter(l => l.code !== language)
  const activeLabel = LANGUAGES.find(l => l.code === language)?.label ?? language.toUpperCase()

  return (
    <div
      ref={containerRef}
      className={`${styles.mobileSwitcher} ${onDark ? styles.onDark : ''} ${expanded ? styles.mobileExpanded : ''}`}
    >
      {/* Inactive langs — slide in to the left of active button */}
      <div className={`${styles.inactiveGroup} ${expanded ? styles.inactiveGroupVisible : ''}`}>
        {inactiveLangs.map(({ code, label }, i) => (
          <button
            key={code}
            className={styles.mobileInactiveBtn}
            style={{ transitionDelay: expanded ? `${i * 0.05}s` : '0s' }}
            onClick={() => { setLanguage(code); setExpanded(false) }}
            aria-label={`Zmień język na ${label}`}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Active lang — always visible, trigger */}
      <button
        className={`${styles.btn} ${styles.active} ${styles.mobileActiveBtn}`}
        onClick={() => setExpanded(prev => !prev)}
        aria-expanded={expanded}
        aria-label="Zmień język"
      >
        {activeLabel}
      </button>
    </div>
  )
}
