import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { pricing } from '@/data'
import CtaButton from '@components/common/CtaButton/CtaButton'
import logoNfz from '@/assets/logo/logo-nfz.webp'
import logoLuxmed from '@/assets/logo/logo-luxmed.png'
import styles from './Offer.module.scss'

// ── Heading wave animation (same pattern as Hero) ─────────────────
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

const areaKeys = ['clinics', 'usg', 'rehab', 'aesthetic'] as const

const areaIcons: Record<typeof areaKeys[number], JSX.Element> = {
  clinics: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M15 10V7h10v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="20" y1="16" x2="20" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="15" y1="21" x2="25" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  usg: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="12" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M26 18c3 0 6 2 6 5s-3 5-6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M26 22c1.5 0 3 .9 3 1.5s-1.5 1.5-3 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <rect x="10" y="16" width="12" height="10" rx="1" fill="currentColor" opacity="0.15"/>
      <line x1="10" y1="19" x2="22" y2="19" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="10" y1="22" x2="22" y2="22" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  ),
  rehab: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="8" r="4" fill="currentColor" opacity="0.7"/>
      <path d="M20 12v12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M13 17l7-5 7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M16 24l-3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 24l3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  aesthetic: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 6c-6 0-11 5-11 12 0 5 3 9 7 11v3h8v-3c4-2 7-6 7-11 0-7-5-12-11-12z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M16 22c1 2 2 3 4 3s3-1 4-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      <circle cx="16" cy="18" r="1.5" fill="currentColor"/>
      <circle cx="24" cy="18" r="1.5" fill="currentColor"/>
    </svg>
  ),
}

function Offer() {
  const { t } = useLanguage()
  const [openIds, setOpenIds] = useState<Set<number>>(new Set())
  const [hoveredId, setHoveredId] = useState<number | null>(null)
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

  function toggleAccordion(id: number) {
    setOpenIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section className={styles.offer} id="offer">
      <div className={styles.container}>

        {/* ── Nagłówek ───────────────────────────────────────────── */}
        <div className={styles.headingWrap} ref={headingRef}>
          <h2 className={styles.heading}>
            <span className={`${styles.headingRow} ${styles.row1}`}>
              <span className={styles.textLarge}>
                {headingVisible && waveSpans(t('offer.headingPart1'), 0, styles.waveChar, styles.waveWrap)}
              </span>
              <span className={`${styles.textLarge} ${styles.mobileOnly}`}>
                {headingVisible && waveSpans(t('offer.headingPart2'), 0.05, styles.waveChar, styles.waveWrap)}
              </span>
            </span>

            <span className={`${styles.headingRow} ${styles.row2} ${styles.desktopOnly}`}>
              <span className={styles.textLarge}>
                {headingVisible && waveSpans(t('offer.headingPart2'), 0.1, styles.waveChar, styles.waveWrap)}
              </span>
              <span className={styles.textLarge}>
                {headingVisible && waveSpans(t('offer.headingPart3'), 0.15, styles.waveChar, styles.waveWrap)}
              </span>
              <span className={styles.textLarge}>
                {headingVisible && waveSpans(t('offer.headingPart4'), 0.2, styles.waveChar, styles.waveWrap)}
              </span>
            </span>

            <span className={`${styles.headingRow} ${styles.row2} ${styles.mobileOnly}`}>
              <span className={styles.textLarge}>
                {headingVisible && waveSpans(t('offer.headingPart3'), 0.1, styles.waveChar, styles.waveWrap)}
              </span>
            </span>

            <span className={`${styles.headingRow} ${styles.row2} ${styles.mobileOnly}`}>
              <span className={styles.textLarge}>
                {headingVisible && waveSpans(t('offer.headingPart4'), 0.15, styles.waveChar, styles.waveWrap)}
              </span>
            </span>

            <span className={`${styles.headingRow} ${styles.row3}`}>
              <span className={styles.textSmall}>
                {headingVisible && waveSpans(t('offer.headingPart5'), 0.25, styles.waveChar, styles.waveWrap)}
              </span>
            </span>
          </h2>
        </div>

        {/* ── Obszary usług ──────────────────────────────────────── */}
        <div className={styles.areas}>
          {areaKeys.map(key => (
            <div key={key} className={styles.areaCard}>
              <div className={styles.areaImageWrap}>
                <div className={styles.areaImagePlaceholder} aria-hidden="true">
                  <div className={styles.areaIconPlaceholder}>
                    {areaIcons[key]}
                  </div>
                </div>
              </div>
              <div className={styles.areaContent}>
                <h3 className={styles.areaTitle}>{t(`offer.${key}Title`)}</h3>
                <p className={styles.areaDesc}>{t(`offer.${key}Desc`)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Cennik ─────────────────────────────────────────────── */}
        <div className={styles.pricingSection} id="pricing">
          {/* Wideo tło */}
          <video
            className={styles.pricingVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          >
            {/* Zastąp ścieżkę docelowym plikiem wideo */}
            <source src="/video/pricing-bg.mp4" type="video/mp4" />
          </video>
          <div className={styles.pricingOverlay} aria-hidden="true" />

          <div className={styles.pricingContent}>
            <div className={styles.pricingHeader}>
              <span className={styles.pricingLabel}>{t('offer.pricingSubheading')}</span>
              <h2 className={styles.pricingHeading}>{t('offer.pricingHeading')}</h2>
            </div>

            <div className={styles.pricingCtaWrap}>
              <CtaButton href="#contact" variant="primary" size="lg">
                {t('offer.pricingCta')}
              </CtaButton>
            </div>

            <div className={styles.accordion}>
              {pricing.map(category => {
                const isOpen = openIds.has(category.id)
                const isHovered = hoveredId === category.id

                return (
                  <div
                    key={category.id}
                    className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
                  >
                    <button
                      className={styles.accordionTrigger}
                      onClick={() => toggleAccordion(category.id)}
                      onMouseEnter={() => setHoveredId(category.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      aria-expanded={isOpen}
                    >
                      {/* Tytuł z efektem wave na hover */}
                      <span className={styles.accordionTitle} aria-label={category.title}>
                        {category.title.split('').map((char, i) => (
                          <span
                            key={`${isHovered ? 'w' : 's'}-${i}`}
                            className={styles.titleCharClip}
                          >
                            <span
                              className={isHovered ? styles.titleCharWave : styles.titleChar}
                              style={isHovered ? { animationDelay: `${(i * 0.025).toFixed(3)}s` } : undefined}
                            >
                              {char === ' ' ? '\u00A0' : char}
                            </span>
                          </span>
                        ))}
                      </span>

                      {/* Strzałka: domyślnie 45° w górę, hover → poziomo w prawo */}
                      <span className={styles.accordionArrow} aria-hidden="true">→</span>
                    </button>

                    <div className={styles.accordionBody}>
                      <div className={styles.accordionBodyInner}>
                        <ul className={styles.priceList}>
                          {category.items.map((item, i) => (
                            <li key={i} className={styles.priceItem}>
                              <span className={styles.priceName}>{item.name}</span>
                              <span className={styles.priceValue}>{item.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Karty partnerów ────────────────────────────────────── */}
        <div className={styles.partnerCards}>

          <Link to="/partnerzy/nfz" className={styles.partnerCard}>
            <div className={styles.partnerAccent} style={{ background: '#003399' }} />
            <div className={styles.partnerLogoWrap}>
              <img src={logoNfz} alt="NFZ" className={styles.logoNfz} />
            </div>
            <div className={styles.partnerBody}>
              <h3 className={styles.partnerTitle}>{t('offer.partnerNfzTitle')}</h3>
              <p className={styles.partnerDesc}>{t('offer.partnerNfzDesc')}</p>
            </div>
            <span className={styles.partnerCta}>
              {t('offer.partnerLearnMore')}
              <span className={styles.partnerCtaArrow}>→</span>
            </span>
          </Link>

          <Link to="/partnerzy/luxmed" className={styles.partnerCard}>
            <div className={styles.partnerAccent} style={{ background: '#00A551' }} />
            <div className={styles.partnerLogoWrap}>
              <img src={logoLuxmed} alt="LuxMed" className={styles.logoLuxmed} />
            </div>
            <div className={styles.partnerBody}>
              <h3 className={styles.partnerTitle}>{t('offer.partnerLuxmedTitle')}</h3>
              <p className={styles.partnerDesc}>{t('offer.partnerLuxmedDesc')}</p>
            </div>
            <span className={styles.partnerCta}>
              {t('offer.partnerLearnMore')}
              <span className={styles.partnerCtaArrow}>→</span>
            </span>
          </Link>

        </div>

      </div>
    </section>
  )
}

export default Offer
