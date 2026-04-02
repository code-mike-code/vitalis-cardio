import { useRef, useEffect, useState } from 'react'
import { features } from '@/data'
import { useLanguage } from '@/hooks/useLanguage'
import styles from './Features.module.scss'

function waveSpans(text: string, baseDelay: number, charCls: string, wrapCls: string) {
  return text.split('').map((char, i) => (
    <span key={i} className={wrapCls}>
      <span
        className={charCls}
        style={{ animationDelay: `${(baseDelay + i * 0.04).toFixed(2)}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    </span>
  ))
}

const featureIcons: Record<string, JSX.Element> = {
  heart: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="currentColor" opacity="0.1"/>
      <path d="M24 36 C16 29, 10 23, 10 18 C10 13, 14 10, 18 10 C21 10, 23 11, 24 14 C25 11, 27 10, 30 10 C34 10, 38 13, 38 18 C38 23, 32 29, 24 36Z" fill="currentColor"/>
    </svg>
  ),
  team: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="currentColor" opacity="0.1"/>
      <circle cx="24" cy="17" r="5" fill="currentColor"/>
      <circle cx="15" cy="19" r="3.5" fill="currentColor" opacity="0.7"/>
      <circle cx="33" cy="19" r="3.5" fill="currentColor" opacity="0.7"/>
      <path d="M16 30 C16 26, 20 24, 24 24 C28 24, 32 26, 32 30 L32 33 L16 33Z" fill="currentColor"/>
      <path d="M9 32 C9 29, 12 27, 15 27.5 L15 33 L9 33Z" fill="currentColor" opacity="0.7"/>
      <path d="M39 32 C39 29, 36 27, 33 27.5 L33 33 L39 33Z" fill="currentColor" opacity="0.7"/>
    </svg>
  ),
  equipment: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="currentColor" opacity="0.1"/>
      <rect x="14" y="12" width="20" height="24" rx="2" fill="currentColor" opacity="0.3"/>
      <polyline points="17,26 21,26 23,20 25,32 27,24 29,26 31,26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

function Features() {
  const { t } = useLanguage()
  const headingRef = useRef<HTMLDivElement>(null)
  const [headingVisible, setHeadingVisible] = useState(false)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeadingVisible(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.features} id="about">
      <div className={styles.container}>
        <div className={styles.headerWrap} ref={headingRef}>
          <span className={styles.label}>{t('features.label')}</span>
          <h2 className={styles.heading} aria-label={t('features.heading')}>
            {headingVisible && waveSpans(t('features.heading'), 0, styles.waveChar, styles.waveWrap)}
          </h2>
          <p className={styles.subtitle}>{t('features.subtitle')}</p>
        </div>
        <div className={styles.grid}>
          {features.map(feature => (
            <div key={feature.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                {featureIcons[feature.icon]}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardText}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
