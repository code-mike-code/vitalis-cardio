import { useLanguage } from '@/hooks/useLanguage'
import CtaButton from '@components/common/CtaButton/CtaButton'
import styles from './FinalCTA.module.scss'

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

function FinalCTA() {
  const { t } = useLanguage()

  return (
    <section className={styles.finalCta} id="final-cta">
      <div className={styles.container}>
        {/* Lewa kolumna – nagłówek animowany */}
        <div className={styles.headingCol}>
          <h2 className={styles.heading}>
            <span className={`${styles.headingRow} ${styles.row1}`}>
              <span className={styles.textLarge}>
                {waveSpans(t('finalCta.headingPart1'), 0.1, styles.waveChar, styles.waveWrap)}
              </span>
            </span>
            <span className={`${styles.headingRow} ${styles.row2}`}>
              <span className={styles.textItalic}>
                {waveSpans(t('finalCta.headingPart2'), 0.4, styles.waveChar, styles.waveWrap)}
              </span>
              <span className={styles.textLarge}>
                {waveSpans(t('finalCta.headingPart3'), 0.5, styles.waveChar, styles.waveWrap)}
              </span>
            </span>
          </h2>
        </div>

        {/* Prawa kolumna – opis + CTA */}
        <div className={styles.contentCol}>
          <p className={styles.subtext}>{t('finalCta.subtext')}</p>
          <div className={styles.ctaWrap}>
            <CtaButton to="/kontakt" size="lg">
              {t('finalCta.cta')}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
