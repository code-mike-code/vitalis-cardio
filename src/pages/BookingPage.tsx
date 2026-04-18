import { useParams, Navigate, Link } from 'react-router-dom'
import { specializations } from '@/data'
import { calendarConfig } from '@/data/calendarConfig'
import { CalendarSlot } from '@/features/calendar'
import { useLanguage } from '@/hooks/useLanguage'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import CtaButton from '@components/common/CtaButton/CtaButton'
import styles from './BookingPage.module.scss'

function BookingPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useLanguage()
  const specialization = specializations.find(s => s.slug === slug)

  if (!specialization) return <Navigate to="/specjalizacje" replace />

  const serviceId = calendarConfig[specialization.slug]

  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.breadcrumb}>
            <Link to={`/specjalizacje/${specialization.slug}`}>
              {specialization.name}
            </Link>
            {' / '}
            {t('bookingPage.breadcrumbBook')}
          </p>
          <h1 className={styles.heroTitle}>{t('bookingPage.titlePrefix')}{specialization.name}</h1>
        </div>
      </div>

      <section className={styles.content}>
        <div className={styles.container}>
          {serviceId ? (
            <CalendarSlot serviceId={serviceId} className={styles.calendar} />
          ) : (
            <div className={styles.fallback}>
              <div className={styles.fallbackIcon}>📅</div>
              <h2 className={styles.fallbackTitle}>
                {t('bookingPage.unavailableTitle')}
              </h2>
              <p className={styles.fallbackText}>
                {t('bookingPage.unavailableTextBefore')} <strong>{specialization.name}</strong>{t('bookingPage.unavailableTextAfter')}
              </p>
              <div className={styles.fallbackContacts}>
                <CtaButton href="tel:+48221234567" variant="secondary">
                  📞 22 123 45 67
                </CtaButton>
                <CtaButton href="tel:+48500100200" variant="secondary">
                  📞 500 100 200
                </CtaButton>
              </div>
              <p className={styles.fallbackHours}>
                {t('bookingPage.unavailableHours')}
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  )
}

export default BookingPage
