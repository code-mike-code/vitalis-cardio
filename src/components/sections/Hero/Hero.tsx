import { useState, useEffect, useCallback } from 'react'
import styles from './Hero.module.scss'
import { useLanguage } from '@/hooks/useLanguage'
import CtaButton from '@components/common/CtaButton/CtaButton'

function waveSpans(text: string, baseDelay: number, charCls: string, wrapCls: string) {
  return text.split('').map((char, i) => (
    <span key={i} className={wrapCls}>
      <span
        className={charCls}
        style={{ animationDelay: `${(baseDelay + i * 0.05).toFixed(2)}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    </span>
  ))
}

const SLIDES = [
  { slug: 'kardiologia',         bg: '#1B4965' },
  { slug: 'ginekologia',         bg: '#6B3A6E' },
  { slug: 'ortopedia',           bg: '#2D6A4F' },
  { slug: 'neurologia',          bg: '#4A3580' },
  { slug: 'rehabilitacja',       bg: '#3D5A80' },
  { slug: 'psychiatria',         bg: '#7A3535' },
  { slug: 'medycyna-estetyczna', bg: '#4A5568' },
] as const

const AUTOPLAY_MS = 3500

function Hero() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goNext = useCallback(() => {
    setCurrent(c => (c + 1) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(goNext, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [isPaused, goNext])

  return (
    <>
      {/* Karuzela — osobna sekcja w stosie, z-index: 1 */}
      <section
        id="home"
        className={styles.heroCarousel}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <div
              key={slide.slug}
              className={styles.slide}
              style={{ background: slide.bg }}
              aria-hidden={i !== current}
            >
              <div className={styles.slideContent}>
                <h2 className={styles.slideHeading}>
                  {t(`hero.carousel.slide${i + 1}.name`)}
                </h2>
                <p className={styles.slideDesc}>
                  {t(`hero.carousel.slide${i + 1}.desc`)}
                </p>
                <ul className={styles.slideBullets}>
                  <li>
                    <span className={styles.bulletArrow}>→</span>
                    {t(`hero.carousel.slide${i + 1}.bullet1`)}
                  </li>
                  <li>
                    <span className={styles.bulletArrow}>→</span>
                    {t(`hero.carousel.slide${i + 1}.bullet2`)}
                  </li>
                  <li>
                    <span className={styles.bulletArrow}>→</span>
                    {t(`hero.carousel.slide${i + 1}.bullet3`)}
                  </li>
                </ul>
                <div className={styles.slideCtaWrap}>
                  <CtaButton
                    to={`/specjalizacje/${slide.slug}`}
                    variant="outline"
                    size="md"
                    className={styles.slideBtn}
                  >
                    {t('hero.carousel.cta')}
                  </CtaButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots} role="tablist" aria-label="Slajdy karuzeli">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.slug}
              role="tab"
              aria-selected={i === current}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={t(`hero.carousel.slide${i + 1}.name`)}
            />
          ))}
        </div>

        <div className={styles.progressBar}>
          <div
            key={`${current}-${isPaused ? 'paused' : 'playing'}`}
            className={`${styles.progressFill} ${isPaused ? styles.progressPaused : ''}`}
            style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
          />
        </div>
      </section>

      {/* Nagłówek główny — osobna sekcja w stosie, z-index: 2 */}
      <section className={styles.heroHeading}>
        <div className={styles.container}>
          <h1 className={styles.heading}>
            <span className={`${styles.headingRow} ${styles.row1}`}>
              <span className={styles.textLarge}>
                {waveSpans(t('hero.headingPart1'), 0.15, styles.waveChar, styles.waveWrap)}
              </span>
              <span className={`${styles.textLarge} ${styles.mobileOnly}`}>
                {waveSpans(t('hero.headingPart2'), 0.2, styles.waveChar, styles.waveWrap)}
              </span>
            </span>
            <span className={`${styles.headingRow} ${styles.row2}`}>
              <span className={`${styles.textLarge} ${styles.desktopOnly}`}>
                {waveSpans(t('hero.headingPart2'), 0.1, styles.waveChar, styles.waveWrap)}
              </span>
              <span className={styles.textLarge}>
                {waveSpans(t('hero.headingPart3'), 0.1, styles.waveChar, styles.waveWrap)}
              </span>
              <span className={styles.textSmall}>
                {waveSpans(t('hero.headingPart4'), 0.2, styles.waveChar, styles.waveWrap)}
              </span>
            </span>
            <span className={`${styles.headingRow} ${styles.row3}`}>
              <span className={styles.textSmall}>
                {waveSpans(t('hero.headingPart5'), 1.2, styles.waveChar, styles.waveWrap)}
              </span>
              <span className={styles.textLarge}>
                {waveSpans(t('hero.headingPart6'), 1.3, styles.waveChar, styles.waveWrap)}
              </span>
            </span>
          </h1>
        </div>
      </section>
    </>
  )
}

export default Hero
