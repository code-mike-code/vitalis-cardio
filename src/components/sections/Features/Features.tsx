import { features } from '@/data'
import { useLanguage } from '@/hooks/useLanguage'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './Features.module.scss'
import { waveSpans } from '@/utils/waveSpans'
import icon1 from '@/assets/icons/icon-1.webp'
import icon2 from '@/assets/icons/icon-2.webp'
import icon3 from '@/assets/icons/icon-3.webp'

const featureIcons: Record<string, string> = {
  heart:     icon1,
  team:      icon2,
  equipment: icon3,
}

function Features() {
  const { t } = useLanguage()
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>(0.2)

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
                {featureIcons[feature.icon] && (
                  <img src={featureIcons[feature.icon]} alt="" aria-hidden="true" />
                )}
              </div>
              <h3 className={styles.cardTitle}>{t(`features.card${feature.id}.title`)}</h3>
              <p className={styles.cardText}>{t(`features.card${feature.id}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
