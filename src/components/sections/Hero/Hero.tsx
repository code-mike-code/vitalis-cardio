import styles from './Hero.module.scss'
import frontOutside from '@/assets/img/front-outside.png'
import logoNfz from '@/assets/logo/logo-nfz.webp'
import logoLuxmed from '@/assets/logo/logo-luxmed.png'
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

function Hero() {
  const { t } = useLanguage()

  return (
    <section className={styles.hero} id="home">
      {/* Górny rząd: 50% wysokości */}
      <div className={styles.rowTop}>
        <div className={styles.container}>
          <h1 className={styles.heading}>
            {/* Desktop: ZESPÓŁ wyrównany do lewej | Mobile: ZESPÓŁ PORADNI w jednej linii */}
            <span className={`${styles.headingRow} ${styles.row1}`}>
              <span className={styles.textLarge}>
                {waveSpans(t('hero.headingPart1'), 0.15, styles.waveChar, styles.waveWrap)}
              </span>
              <span className={`${styles.textLarge} ${styles.mobileOnly}`}>
                {waveSpans(t('hero.headingPart2'), 0.2, styles.waveChar, styles.waveWrap)}
              </span>
            </span>
            {/* Desktop: PORADNI SPECJALISTYCZNYCH W TRZEBINI wyśrodkowane | Mobile: dwie osobne linie */}
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
            {/* Desktop: DLA CAŁEJ RODZINY wyrównane do prawej | Mobile: w jednej linii */}
            <span className={`${styles.headingRow} ${styles.row3}`}>
              <span className={styles.textSmall}>
                {waveSpans(t('hero.headingPart5'), 1.2, styles.waveChar, styles.waveWrap)}
              </span>
              <span className={styles.textLarge}>
                {waveSpans(t('hero.headingPart6'), 1.3, styles.waveChar, styles.waveWrap)}
              </span>
            </span>
          </h1>
          <div className={styles.rowTopContent}>
            <ul className={styles.bullets}>
              <li><span className={styles.arrow}>→</span>{t('hero.bullet1')}</li>
              <li><span className={styles.arrow}>→</span>{t('hero.bullet2')}</li>
              <li>
                <span className={styles.arrow}>→</span>
                <span className={styles.partnerRow}>
                  {t('hero.bullet3')}
                  <a href="https://www.nfz.gov.pl" target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
                    <img src={logoNfz} alt="NFZ" className={styles.partnerLogoNfz} />
                  </a>
                  <a href="https://www.luxmed.pl" target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
                    <img src={logoLuxmed} alt="LuxMed" className={styles.partnerLogoLux} />
                  </a>
                </span>
              </li>
            </ul>
            <div className={styles.ctaWrap}>
              <CtaButton to="/specjalizacje" size="lg">
                {t('hero.cta')}
              </CtaButton>
            </div>
          </div>
        </div>
      </div>

      {/* Dolny rząd: 50% wysokości */}
      <div className={styles.rowBottom}>
        <img
          src={frontOutside}
          alt="Klinika Vitalis - widok z zewnątrz"
          className={styles.clinicPhoto}
        />
      </div>
    </section>
  )
}

export default Hero
