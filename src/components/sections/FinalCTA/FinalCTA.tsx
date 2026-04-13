import { useLanguage } from '@/hooks/useLanguage'
import CtaButton from '@components/common/CtaButton/CtaButton'
import styles from './FinalCTA.module.scss'
import { waveSpans } from '@/utils/waveSpans'

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
                {waveSpans(t('finalCta.headingPart1'), 0.1, styles.waveChar, styles.waveWrap, 0.05)}
              </span>
            </span>
            <span className={`${styles.headingRow} ${styles.row2}`}>
              <span className={styles.textItalic}>
                {waveSpans(t('finalCta.headingPart2'), 0.4, styles.waveChar, styles.waveWrap, 0.05)}
              </span>
              <span className={styles.textLarge}>
                {waveSpans(t('finalCta.headingPart3'), 0.5, styles.waveChar, styles.waveWrap, 0.05)}
              </span>
            </span>
          </h2>
        </div>

        {/* Prawa kolumna – opis + CTA */}
        <div className={styles.contentCol}>
          <p className={styles.subtext}>{t('finalCta.subtext')}</p>
          <div className={styles.ctaWrap}>
            <CtaButton to="/specjalizacje" size="lg">
              {t('finalCta.cta')}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
