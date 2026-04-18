import { specialists } from '@/data'
import { useLanguage } from '@/hooks/useLanguage'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import CtaButton from '@components/common/CtaButton/CtaButton'
import SpecialistCard from '@components/common/SpecialistCard/SpecialistCard'
import styles from './About.module.scss'
import { waveSpans } from '@/utils/waveSpans'

function About() {
  const { t } = useLanguage()
  const founders = specialists.filter(s => s.isFounder)
  const foundersHeading = useScrollReveal<HTMLDivElement>(0.2)
  const cabinetHeading = useScrollReveal<HTMLDivElement>(0.2)

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>

        {/* Founders */}
        <div className={styles.subsection}>
          <div className={styles.headerWrap} ref={foundersHeading.ref}>
            <span className={styles.label}>{t('about.foundersLabel')}</span>
            <h2 className={styles.heading} aria-label={t('about.foundersTitle')}>
              {foundersHeading.isVisible && waveSpans(t('about.foundersTitle'), 0, styles.waveChar, styles.waveWrap)}
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

        {/* Our clinic */}
        <div className={styles.subsection}>
          <div className={styles.headerWrap} ref={cabinetHeading.ref}>
            <span className={styles.label}>{t('about.cabinetLabel')}</span>
            <h2 className={styles.heading} aria-label={t('about.cabinetTitle')}>
              {cabinetHeading.isVisible && waveSpans(t('about.cabinetTitle'), 0, styles.waveChar, styles.waveWrap)}
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
