import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { specializations, specialists } from '@/data'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import CtaButton from '@components/common/CtaButton/CtaButton'
import SpecialistCard from '@components/common/SpecialistCard/SpecialistCard'
import cardiologyHero from '@/assets/img/hero/cardiology-hero.png'
import gynecologyHero from '@/assets/img/hero/gynecology-hero.png'
import orthopedicsHero from '@/assets/img/hero/orthopedics-hero.png'
import neurologyHero from '@/assets/img/hero/neurology-hero.png'
import rehabilitationHero from '@/assets/img/hero/rehabilitation-hero.png'
import psychoHero from '@/assets/img/hero/psycho-hero.png'
import aestheticsHero from '@/assets/img/hero/aesthetics-hero.png'
import styles from './SpecializationPage.module.scss'

const heroImages: Record<string, string> = {
  'kardiologia': cardiologyHero,
  'ginekologia': gynecologyHero,
  'ortopedia': orthopedicsHero,
  'neurologia': neurologyHero,
  'rehabilitacja': rehabilitationHero,
  'psychiatria': psychoHero,
  'medycyna-estetyczna': aestheticsHero,
  'diagnostyka-usg': neurologyHero,
}

function SpecializationPage() {
  const { slug } = useParams<{ slug: string }>()
  const specialization = specializations.find(s => s.slug === slug)

  if (!specialization) return <Navigate to="/specjalizacje" replace />

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
      {/* Hero 50svh */}
      <div
        className={styles.hero}
        style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{specialization.name}</h1>
          <CtaButton
            to={`/specjalizacje/${specialization.slug}/umow-wizyte`}
            variant="outline"
            size="lg"
            className={styles.slideBtn}
          >
            Umów wizytę
          </CtaButton>
        </div>
      </div>

      {/* Description + examinations + specialists */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.description}>
            <p>{specialization.description}</p>
          </div>

          {specialization.conditions && specialization.conditions.length > 0 && (
            <div className={styles.examinations}>
              <h2 className={styles.examinationsTitle}>{specialization.conditionsLabel ?? 'Diagnozujemy i leczymy'}</h2>
              <ul className={styles.examinationsList}>
                {specialization.conditions.map((item, i) => (
                  <li key={i} className={styles.examinationsItem}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {specialization.examinations && specialization.examinations.length > 0 && (
            <div className={styles.examinations}>
              <h2 className={styles.examinationsTitle}>{specialization.examinationsLabel ?? 'Dostępne badania'}</h2>
              <ul className={styles.examinationsList}>
                {specialization.examinations.map((exam, i) => (
                  <li key={i} className={styles.examinationsItem}>{exam}</li>
                ))}
              </ul>
            </div>
          )}

          {specialization.serviceGroups && specialization.serviceGroups.length > 0 && (
            <div className={styles.serviceGroupsSection}>
              <h2 className={styles.examinationsTitle}>Świadczone usługi</h2>
              <div className={styles.serviceGroupsAccordion}>
                {specialization.serviceGroups.map((group, gi) => {
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

          {specialization.infoSections && specialization.infoSections.length > 0 && (
            <div className={styles.infoSectionsWrap}>
              {specialization.infoSections.map((section, i) => (
                <div key={i} className={styles.infoSection}>
                  <h2 className={styles.infoSectionTitle}>{section.title}</h2>
                  <p className={styles.infoSectionContent}>{section.content}</p>
                </div>
              ))}
            </div>
          )}

          {pageSpecialists.length > 0 && (
            <div className={styles.specialists}>
              <h2 className={styles.specialistsTitle}>Nasi specjaliści</h2>
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
