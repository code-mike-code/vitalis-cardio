import { useState } from 'react'
import { specializations, specialists } from '@/data'
import { useLanguage } from '@/hooks/useLanguage'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import SpecialistCard from '@components/common/SpecialistCard/SpecialistCard'
import heroImg from '@/assets/img/hero/multi-spec-hero.webp'
import styles from './TeamPage.module.scss'

function TeamPage() {
  const { t, language } = useLanguage()
  const langKey = language as 'en' | 'ua'

  const grouped = specializations
    .filter(spec => specialists.some(s => s.specializationSlug === spec.slug))
    .map(spec => ({
      spec,
      members: specialists.filter(s => s.specializationSlug === spec.slug),
    }))

  const [openSlugs, setOpenSlugs] = useState<Set<string>>(new Set())

  function toggle(slug: string) {
    setOpenSlugs(prev => {
      const next = new Set(prev)
      if (next.has(slug)) next.delete(slug)
      else next.add(slug)
      return next
    })
  }

  return (
    <PageLayout>
      <div className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>{t('teamPage.label')}</span>
          <h1 className={styles.heroTitle}>{t('teamPage.heroTitle')}</h1>
          <p className={styles.heroSubtitle}>{t('teamPage.heroSubtitle')}</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.accordion}>
            {grouped.map(({ spec, members }) => {
              const isOpen = openSlugs.has(spec.slug)
              const specName = spec.translations?.[langKey]?.name ?? spec.name
              return (
                <div
                  key={spec.slug}
                  className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
                >
                  <button
                    className={styles.accordionTrigger}
                    onClick={() => toggle(spec.slug)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.accordionTitle}>{specName}</span>
                    <span className={styles.accordionMeta} aria-hidden="true">
                      {members.length} {t('teamPage.specialistCount')}
                    </span>
                    <span className={styles.accordionArrow} aria-hidden="true">→</span>
                  </button>
                  <div className={styles.accordionBody}>
                    <div className={styles.accordionBodyInner}>
                      <div className={styles.specialistsGrid}>
                        {members.map(specialist => (
                          <SpecialistCard
                            key={specialist.id}
                            specialist={specialist}
                            size="md"
                            bookingTo={`/specjalizacje/${spec.slug}/umow-wizyte`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default TeamPage
