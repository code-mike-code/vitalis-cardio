import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { specializations, specialists } from '@/data'
import { useLanguage } from '@/hooks/useLanguage'
import { getTranslationKey } from '@/utils/langUtils'
import { replaceAbbreviations } from '@/utils/replaceAbbreviations'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import Breadcrumb from '@components/common/Breadcrumb/Breadcrumb'
import CtaButton from '@components/common/CtaButton/CtaButton'
import SpecialistCard from '@components/common/SpecialistCard/SpecialistCard'
import EUFunding from '@components/sections/EUFunding/EUFunding'
import imgRehabilitation from '@/assets/img/rehabilitation.webp'
import imgHeroCardiology from '@/assets/img/hero/cardiology-hero.webp'
import imgHeroPediatricCardiology from '@/assets/img/hero/pediatric-cardiology.webp'
import imgHeroGynecology from '@/assets/img/hero/gynecology-hero.webp'
import imgHeroGastrology from '@/assets/img/hero/gastrology.webp'
import imgHeroDiabetology from '@/assets/img/hero/diabetology.webp'
import imgHeroOrthopedics from '@/assets/img/hero/orthopedics-hero.webp'
import imgHeroNeurosurgery from '@/assets/img/hero/neurosurgery.webp'
import imgHeroNeurology from '@/assets/img/hero/neurology-hero.webp'
import imgHeroPsycho from '@/assets/img/hero/psycho-hero.webp'
import imgHeroUrology from '@/assets/img/hero/urology.webp'
import imgHeroMultiSpec from '@/assets/img/hero/multi-spec-hero.webp'
import imgHeroAesthetics from '@/assets/img/hero/aesthetics-hero.webp'
import imgHeroBiopsy from '@/assets/img/hero/core-needle-biopsy.webp'
import imgHeroRehabilitation from '@/assets/img/hero/rehabilitation-hero.webp'
import imgEuFunds from '@/assets/logo/EU-founds.webp'
import styles from './SpecializationPage.module.scss'

const heroImages: Record<string, string> = {
  'kardiologia':           imgHeroCardiology,
  'kardiologia-dziecieca': imgHeroPediatricCardiology,
  'ginekologia':           imgHeroGynecology,
  'gastrologia':           imgHeroGastrology,
  'endokrynologia':        imgHeroDiabetology,
  'ortopedia':             imgHeroOrthopedics,
  'neurochirurgia':        imgHeroNeurosurgery,
  'neurologia':            imgHeroNeurology,
  'psychiatria':           imgHeroPsycho,
  'psychologia':           imgHeroPsycho,
  'urologia':              imgHeroUrology,
  'dietetyka':             imgHeroMultiSpec,
  'diabetologia':          imgHeroDiabetology,
  'medycyna-estetyczna':   imgHeroAesthetics,
  'biopsja':               imgHeroBiopsy,
  'biopsja-grubogłowa':    imgHeroBiopsy,
  'rehabilitacja':         imgHeroRehabilitation,
  'diagnostyka-usg':       imgHeroMultiSpec,
}

function SpecializationPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, language } = useLanguage()
  const [openGroups, setOpenGroups] = useState<Set<number>>(new Set())

  const specialization = specializations.find(s => s.slug === slug)
  if (!specialization) return <Navigate to="/specjalizacje" replace />

  const langKey = getTranslationKey(language)
  const loc = { ...specialization, ...(langKey ? (specialization.translations?.[langKey] ?? {}) : {}) }
  const pageSpecialists = specialists.filter(s => s.specializationSlug === slug)
  const heroImage = heroImages[specialization.slug]

  function toggleGroup(idx: number) {
    setOpenGroups(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  const breadcrumbs = [
    { label: t('common.breadcrumbHome'), href: '/' },
    { label: t('nav.specializations'), href: '/specjalizacje' },
    { label: loc.name },
  ]

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

      <Breadcrumb items={breadcrumbs} />

      {specialization.slug === 'rehabilitacja' && (
        <div className={styles.euBanner}>
          <img
            src={imgEuFunds}
            alt={t('euFunding.label')}
            className={styles.euBannerLogo}
          />
          <div className={styles.euBannerText}>
            <span className={styles.euBannerLabel}>{t('euFunding.label')}</span>
            <span className={styles.euBannerProject}>Projekt: <strong>{t('euFunding.projectId')}</strong></span>
            <p className={styles.euBannerName}>{t('euFunding.projectName')}</p>
          </div>
        </div>
      )}

      {/* Description + examinations + specialists */}

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.description}>
            <p>{replaceAbbreviations(loc.description)}</p>
          </div>

          {loc.conditions && loc.conditions.length > 0 && (
            <div className={styles.examinations}>
              <h2 className={styles.examinationsTitle}>{loc.conditionsLabel ?? t('specializationPage.conditionsLabel')}</h2>
              <ul className={styles.examinationsList}>
                {loc.conditions.map((item) => (
                  <li key={item} className={styles.examinationsItem}>{replaceAbbreviations(item)}</li>
                ))}
              </ul>
            </div>
          )}

          {loc.examinations && loc.examinations.length > 0 && (
            <div className={styles.examinations}>
              <h2 className={styles.examinationsTitle}>{loc.examinationsLabel ?? t('specializationPage.examinationsLabel')}</h2>
              <ul className={styles.examinationsList}>
                {loc.examinations.map((exam) => (
                  <li key={exam} className={styles.examinationsItem}>{replaceAbbreviations(exam)}</li>
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
                        id={`service-group-trigger-${gi}`}
                        className={styles.serviceGroupTrigger}
                        onClick={() => toggleGroup(gi)}
                        aria-expanded={isOpen}
                        aria-controls={`service-group-${gi}`}
                      >
                        <span className={styles.serviceGroupTitle}>{group.title}</span>
                        <span className={styles.serviceGroupArrow} aria-hidden="true">→</span>
                      </button>
                      <div
                        id={`service-group-${gi}`}
                        role="region"
                        aria-labelledby={`service-group-trigger-${gi}`}
                        className={styles.serviceGroupBody}
                      >
                        <div className={styles.serviceGroupBodyInner}>
                          <ul className={styles.serviceGroupList}>
                            {group.items.map((item) => (
                              <li key={item} className={styles.examinationsItem}>{replaceAbbreviations(item)}</li>
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

          {specialization.slug === 'rehabilitacja' && (
            <div className={styles.rehabilitationImgWrap}>
              <img
                src={imgRehabilitation}
                alt="Rehabilitacja — sala gimnastyczna Vitalis"
                className={styles.rehabilitationImg}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </div>
      </section>

      {specialization.slug === 'rehabilitacja' && <EUFunding />}
    </PageLayout>
  )
}

export default SpecializationPage
