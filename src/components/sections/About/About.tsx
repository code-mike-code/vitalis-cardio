import { useRef, useEffect, useState } from 'react'
import { specialists } from '@/data'
import { useLanguage } from '@/hooks/useLanguage'
import CtaButton from '@components/common/CtaButton/CtaButton'
import SpecialistCard from '@components/common/SpecialistCard/SpecialistCard'
import styles from './About.module.scss'

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

function useHeadingReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function About() {
  const { t } = useLanguage()
  const founders = specialists.filter(s => s.isFounder)
  const foundersHeading = useHeadingReveal()
  const cabinetHeading = useHeadingReveal()

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>

        {/* Założyciele */}
        <div className={styles.subsection}>
          <div className={styles.headerWrap} ref={foundersHeading.ref}>
            <span className={styles.label}>{t('about.foundersLabel')}</span>
            <h2 className={styles.heading} aria-label={t('about.foundersTitle')}>
              {foundersHeading.visible && waveSpans(t('about.foundersTitle'), 0, styles.waveChar, styles.waveWrap)}
            </h2>
          </div>
          <div className={styles.foundersLayout}>
            <div className={styles.foundersIntro}>
              <p className={styles.introText}>{t('about.foundersText')}</p>
              <CtaButton to="/specjalizacje" size="md" className={styles.ctaBtn}>
                {t('about.ctaBtn')}
              </CtaButton>
            </div>

            <div className={styles.foundersCards}>
              {founders.map(founder => (
                <SpecialistCard
                  key={founder.id}
                  specialist={founder}
                  size="sm"
                  learnMoreTo={`/specjalizacje/${founder.specializationSlug}#${founder.slug}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Nasz gabinet */}
        <div className={styles.subsection}>
          <div className={styles.headerWrap} ref={cabinetHeading.ref}>
            <span className={styles.label}>{t('about.cabinetLabel')}</span>
            <h2 className={styles.heading} aria-label={t('about.cabinetTitle')}>
              {cabinetHeading.visible && waveSpans(t('about.cabinetTitle'), 0, styles.waveChar, styles.waveWrap)}
            </h2>
          </div>
          <div className={styles.cabinetLayout}>
            <p className={styles.cabinetText}>{t('about.cabinetText')}</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
