import { useParams, Navigate } from 'react-router-dom'
import { specializations, specialists } from '@/data'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import CtaButton from '@components/common/CtaButton/CtaButton'
import SpecialistCard from '@components/common/SpecialistCard/SpecialistCard'
import styles from './SpecializationPage.module.scss'

function SpecializationPage() {
  const { slug } = useParams<{ slug: string }>()
  const specialization = specializations.find(s => s.slug === slug)

  if (!specialization) return <Navigate to="/specjalizacje" replace />

  const pageSpecialists = specialists.filter(s => s.specializationSlug === slug)

  return (
    <PageLayout>
      {/* Hero 50svh */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{specialization.name}</h1>
          <CtaButton to={`/specjalizacje/${specialization.slug}/umow-wizyte`} size="lg">
            Umów wizytę
          </CtaButton>
        </div>
      </div>

      {/* Description + specialists */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.description}>
            <p>{specialization.description}</p>
          </div>

          {pageSpecialists.length > 0 && (
            <div className={styles.specialists}>
              <h2 className={styles.specialistsTitle}>Specjaliści</h2>
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
