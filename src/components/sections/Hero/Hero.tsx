import { useState, useEffect, useCallback } from 'react'
import styles from './Hero.module.scss'
import { useLanguage } from '@/hooks/useLanguage'
import CtaButton from '@components/common/CtaButton/CtaButton'
import { waveSpans } from '@/utils/waveSpans'

import cardiologyImg    from '@/assets/img/hero/cardiology-hero.webp'
import gynecologyImg    from '@/assets/img/hero/gynecology-hero.webp'
import orthopedicsImg   from '@/assets/img/hero/orthopedics-hero.webp'
import neurologyImg     from '@/assets/img/hero/neurology-hero.webp'
import rehabilitationImg from '@/assets/img/hero/rehabilitation-hero.webp'
import psychoImg        from '@/assets/img/hero/psycho-hero.webp'
import aestheticsImg    from '@/assets/img/hero/aesthetics-hero.webp'

const SLIDES = [
  { slug: 'kardiologia',         bg: '#1B4965', img: cardiologyImg },
  { slug: 'ginekologia',         bg: '#6B3A6E', img: gynecologyImg },
  { slug: 'ortopedia',           bg: '#2D6A4F', img: orthopedicsImg },
  { slug: 'neurologia',          bg: '#4A3580', img: neurologyImg },
  { slug: 'rehabilitacja',       bg: '#3D5A80', img: rehabilitationImg },
  { slug: 'psychiatria',         bg: '#7A3535', img: psychoImg },
  { slug: 'medycyna-estetyczna', bg: '#4A5568', img: aestheticsImg },
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
      {/* Carousel — separate stack section, z-index: 1 */}
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
              <img
                src={slide.img}
                alt=""
                className={styles.slideImg}
                aria-hidden="true"
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                decoding="async"
              />
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

      {/* Main heading — separate stack section, z-index: 2 */}
      <section className={styles.heroHeading}>
        <div className={styles.container}>
          <h1 className={styles.heading}>
            <span className={`${styles.headingRow} ${styles.row1}`}>
              <span className={styles.textLarge}>
                {waveSpans(t('hero.headingPart1'), 0.15, styles.waveChar, styles.waveWrap, 0.05)}
              </span>
              <span className={`${styles.textLarge} ${styles.mobileOnly}`}>
                {waveSpans(t('hero.headingPart2'), 0.2, styles.waveChar, styles.waveWrap, 0.05)}
              </span>
            </span>
            <span className={`${styles.headingRow} ${styles.row2}`}>
              <span className={`${styles.textLarge} ${styles.desktopOnly}`}>
                {waveSpans(t('hero.headingPart2'), 0.1, styles.waveChar, styles.waveWrap, 0.05)}
              </span>
              <span className={styles.textLarge}>
                {waveSpans(t('hero.headingPart3'), 0.1, styles.waveChar, styles.waveWrap, 0.05)}
              </span>
              <span className={styles.textSmall}>
                {waveSpans(t('hero.headingPart4'), 0.2, styles.waveChar, styles.waveWrap, 0.05)}
              </span>
            </span>
            <span className={`${styles.headingRow} ${styles.row3}`}>
              <span className={styles.textSmall}>
                {waveSpans(t('hero.headingPart5'), 1.2, styles.waveChar, styles.waveWrap, 0.05)}
              </span>
              <span className={styles.textLarge}>
                {waveSpans(t('hero.headingPart6'), 1.3, styles.waveChar, styles.waveWrap, 0.05)}
              </span>
            </span>
          </h1>
        </div>
      </section>
    </>
  )
}

export default Hero
