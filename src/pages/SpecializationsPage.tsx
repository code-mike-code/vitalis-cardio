import { specializations } from '@/data'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import SpecializationCard from '@components/common/SpecializationCard/SpecializationCard'
import { useLanguage } from '@/hooks/useLanguage'
import heroImg from '@/assets/img/hero/multi-spec-hero.webp'
import styles from './SpecializationsPage.module.scss'

function SpecializationsPage() {
  const { t } = useLanguage()
  return (
    <PageLayout>
      <div className={styles.hero}>
        <img src={heroImg} alt="" className={styles.heroImg} aria-hidden="true" />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t('specializationsPage.heroTitle')}</h1>
          <p className={styles.heroSubtitle}>{t('specializationsPage.heroSubtitle')}</p>
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
