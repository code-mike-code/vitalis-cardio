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
  const { language, setLanguage, t } = useLanguage()
  const onDark = variant === 'onDark'
  const [expanded, setExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const firstInactiveRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!expanded) return
    firstInactiveRef.current?.focus()
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setExpanded(false)
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setExpanded(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [expanded])

  const handleBlur = (e: React.FocusEvent) => {
    if (!containerRef.current?.contains(e.relatedTarget as Node)) {
      setExpanded(false)
    }
  }

  const inactiveLangs = LANGUAGES.filter(l => l.code !== language)
  const activeLabel = LANGUAGES.find(l => l.code === language)?.label ?? language.toUpperCase()

  return (
    <div
      ref={containerRef}
      className={`${styles.mobileSwitcher} ${onDark ? styles.onDark : ''} ${expanded ? styles.mobileExpanded : ''}`}
      onBlur={handleBlur}
    >
      {/* Inactive langs — slide in below active button */}
      <div
        className={`${styles.inactiveGroup} ${expanded ? styles.inactiveGroupVisible : ''}`}
        role="menu"
      >
        {inactiveLangs.map(({ code, label }, i) => (
          <button
            key={code}
            ref={i === 0 ? firstInactiveRef : undefined}
            className={styles.mobileInactiveBtn}
            style={{ transitionDelay: expanded ? `${i * 0.05}s` : '0s' }}
            onClick={() => { setLanguage(code); setExpanded(false) }}
            tabIndex={expanded ? 0 : -1}
            role="menuitem"
            aria-label={`${t('common.changeLanguageTo')} ${label}`}
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
        aria-haspopup="menu"
        aria-label={t('common.changeLanguage')}
      >
        {activeLabel}
      </button>
    </div>
  )
}
