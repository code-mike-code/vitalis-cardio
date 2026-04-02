import { specializations } from '@/data'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import SpecializationCard from '@components/common/SpecializationCard/SpecializationCard'
import styles from './SpecializationsPage.module.scss'

function SpecializationsPage() {
  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Nasze specjalizacje</h1>
          <p className={styles.heroSubtitle}>
            Poradnia Vitalis oferuje pełen zakres specjalistycznej opieki medycznej
            w jednym miejscu — od kardiologii po medycynę estetyczną.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {specializations.map(spec => (
              <SpecializationCard key={spec.id} specialization={spec} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default SpecializationsPage
