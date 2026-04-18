import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { specializations, specialists } from '@/data'
import { useLanguage } from '@/hooks/useLanguage'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import CtaButton from '@components/common/CtaButton/CtaButton'
import SpecialistCard from '@components/common/SpecialistCard/SpecialistCard'
import cardiologyHero from '@/assets/img/hero/cardiology-hero.webp'
import pediatricCardiologyHero from '@/assets/img/hero/pediatric-cardiology.webp'
import gynecologyHero from '@/assets/img/hero/gynecology-hero.webp'
import gastroenterologyHero from '@/assets/img/hero/gastroenterology.webp'
import orthopedicsHero from '@/assets/img/hero/orthopedics-hero.webp'
import neurosurgeryHero from '@/assets/img/hero/neurosurgery.webp'
import neurologyHero from '@/assets/img/hero/neurology-hero.webp'
import rehabilitationHero from '@/assets/img/hero/rehabilitation-hero.webp'
import psychoHero from '@/assets/img/hero/psycho-hero.webp'
import urologyHero from '@/assets/img/hero/urology.webp'
import diabetologyHero from '@/assets/img/hero/diabetology.webp'
import aestheticsHero from '@/assets/img/hero/aesthetics-hero.webp'
import biopsyHero from '@/assets/img/hero/core-needle-biopsy.webp'
import multiSpecHero from '@/assets/img/hero/multi-spec-hero.webp'
import styles from './SpecializationPage.module.scss'

const heroImages: Record<string, string> = {
  'kardiologia':          cardiologyHero,
  'kardiologia-dziecieca': pediatricCardiologyHero,
  'ginekologia':          gynecologyHero,
  'gastroenterologia':    gastroenterologyHero,
  'endokrynologia':       diabetologyHero,
  'ortopedia':            orthopedicsHero,
  'neurochirurgia':       neurosurgeryHero,
  'neurologia':           neurologyHero,
  'psychiatria':          psychoHero,
  'psychologia':          psychoHero,
  'urologia':             urologyHero,
  'dietetyka':            multiSpecHero,
  'diabetologia':         diabetologyHero,
  'medycyna-estetyczna':  aestheticsHero,
  'biopsja':              biopsyHero,
  'biopsja-grubogłowa':   biopsyHero,
  'rehabilitacja':        rehabilitationHero,
  'diagnostyka-usg':      multiSpecHero,
}

function SpecializationPage() {
  const { slug } = useParams<{ slug: string }>()
  const specialization = specializations.find(s => s.slug === slug)

  if (!specialization) return <Navigate to="/specjalizacje" replace />

  const { t, language } = useLanguage()
  const langKey = language as 'en' | 'ua'
  const loc = { ...specialization, ...(specialization.translations?.[langKey] ?? {}) }
  const pageSpecialists = specialists.filter(s => s.specializationSlug === slug)
  const heroImage = heroImages[specialization.slug]
  const [openGroups, setOpenGroups] = useState<Set<number>>(new Set())

  function toggleGroup(idx: number) {
    setOpenGroups(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  return (
    <PageLayout>
      {/* Hero — 50svh */}
      <div
        className={styles.hero}
        style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{loc.name}</h1>
          <CtaButton
            to={`/specjalizacje/${specialization.slug}/umow-wizyte`}
            variant="outline"
            size="lg"
            className={styles.slideBtn}
          >
            {t('specializationPage.bookCta')}
          </CtaButton>
        </div>
      </div>

      {/* Description + examinations + specialists */}

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.description}>
            <p>{loc.description}</p>
          </div>

          {loc.conditions && loc.conditions.length > 0 && (
            <div className={styles.examinations}>
              <h2 className={styles.examinationsTitle}>{loc.conditionsLabel ?? t('specializationPage.conditionsLabel')}</h2>
              <ul className={styles.examinationsList}>
                {loc.conditions.map((item, i) => (
                  <li key={i} className={styles.examinationsItem}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {loc.examinations && loc.examinations.length > 0 && (
            <div className={styles.examinations}>
              <h2 className={styles.examinationsTitle}>{loc.examinationsLabel ?? t('specializationPage.examinationsLabel')}</h2>
              <ul className={styles.examinationsList}>
                {loc.examinations.map((exam, i) => (
                  <li key={i} className={styles.examinationsItem}>{exam}</li>
                ))}
              </ul>
            </div>
          )}

          {loc.serviceGroups && loc.serviceGroups.length > 0 && (
            <div className={styles.serviceGroupsSection}>
              <h2 className={styles.examinationsTitle}>{t('specializationPage.servicesLabel')}</h2>
              <div className={styles.serviceGroupsAccordion}>
                {loc.serviceGroups.map((group, gi) => {
                  const isOpen = openGroups.has(gi)
                  return (
                    <div key={gi} className={`${styles.serviceGroupItem} ${isOpen ? styles.open : ''}`}>
                      <button
                        className={styles.serviceGroupTrigger}
                        onClick={() => toggleGroup(gi)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.serviceGroupTitle}>{group.title}</span>
                        <span className={styles.serviceGroupArrow} aria-hidden="true">→</span>
                      </button>
                      <div className={styles.serviceGroupBody}>
                        <div className={styles.serviceGroupBodyInner}>
                          <ul className={styles.serviceGroupList}>
                            {group.items.map((item, i) => (
                              <li key={i} className={styles.examinationsItem}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {loc.infoSections && loc.infoSections.length > 0 && (
            <div className={styles.infoSectionsWrap}>
              {loc.infoSections.map((section, i) => (
                <div key={i} className={styles.infoSection}>
                  <h2 className={styles.infoSectionTitle}>{section.title}</h2>
                  <p className={styles.infoSectionContent}>{section.content}</p>
                </div>
              ))}
            </div>
          )}

          {pageSpecialists.length > 0 && (
            <div className={styles.specialists}>
              <h2 className={styles.specialistsTitle}>{t('specializationPage.specialistsLabel')}</h2>
              <div className={styles.specialistsGrid}>
                {pageSpecialists.map(specialist => (
                  <SpecialistCard
                    key={specialist.id}
                    specialist={specialist}
                    size="md"
                    bookingTo={`/specjalizacje/${specialization.slug}/umow-wizyte`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  )
}

export default SpecializationPage
