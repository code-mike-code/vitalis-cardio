import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { pricing } from '@/data'
import CtaButton from '@components/common/CtaButton/CtaButton'
import logoNfz from '@/assets/logo/logo-nfz.webp'
import logoLuxmed from '@/assets/logo/logo-luxmed.png'
import offerImg1 from '@/assets/img/offer-1.webp'
import offerImg2 from '@/assets/img/offer-2.webp'
import offerImg3 from '@/assets/img/offer-3.webp'
import offerImg4 from '@/assets/img/offer-4.webp'
import styles from './Offer.module.scss'
import { waveSpans } from '@/utils/waveSpans'

const areaKeys = ['clinics', 'usg', 'rehab', 'aesthetic'] as const

const areaImages: Record<typeof areaKeys[number], string> = {
  clinics: offerImg1,
  usg: offerImg2,
  rehab: offerImg3,
  aesthetic: offerImg4,
}


function Offer() {
  const { t } = useLanguage()
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>(0.2)

  function toggleAccordion(key: string) {
    setOpenIds(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
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
                <img
                  src={areaImages[key]}
                  alt=""
                  className={styles.areaImage}
                  aria-hidden="true"
                  loading="lazy"
                />
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
              <CtaButton to="/specjalizacje" variant="primary" size="lg">
                {t('offer.pricingCta')}
              </CtaButton>
            </div>

            <div className={styles.accordion}>
              {pricing.map(category => (
                <div key={category.id} className={styles.pricingGroup}>

                  {/* ── Nagłówek sekcji (stylizowany jak button, bez toggle) ── */}
                  <h3 className={styles.groupHeader}>{category.title}</h3>

                  {/* ── Akordeony podsekcji ───────────────────────────────── */}
                  {category.sections?.map((section, si) => {
                    const key = `${category.id}-${si}`
                    const isOpen = openIds.has(key)
                    const isHovered = hoveredKey === key

                    return (
                      <div
                        key={si}
                        className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
                      >
                        <button
                          className={styles.accordionTrigger}
                          onClick={() => toggleAccordion(key)}
                          onMouseEnter={() => setHoveredKey(key)}
                          onMouseLeave={() => setHoveredKey(null)}
                          aria-expanded={isOpen}
                        >
                          <span className={styles.accordionTitle} aria-label={section.subtitle}>
                            {section.subtitle.split('').map((char, i) => (
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
                          <span className={styles.accordionArrow} aria-hidden="true">→</span>
                        </button>

                        <div className={styles.accordionBody}>
                          <div className={styles.accordionBodyInner}>
                            <ul className={styles.priceList}>
                              {section.items.map((item, i) => (
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
              ))}
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
