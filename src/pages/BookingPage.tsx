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
  const { t, language } = useLanguage()
  const specialization = specializations.find(s => s.slug === slug)

  if (!specialization) return <Navigate to="/specjalizacje" replace />

  const langKey = language as 'en' | 'ua'
  const loc = { ...specialization, ...(specialization.translations?.[langKey] ?? {}) }
  const iframeUrl = calendarConfig[specialization.slug]

  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.breadcrumb}>
            <Link to={`/specjalizacje/${specialization.slug}`}>
              {loc.name}
            </Link>
            {' / '}
            {t('bookingPage.breadcrumbBook')}
          </p>
          <h1 className={styles.heroTitle}>{t('bookingPage.titlePrefix')}{loc.name}</h1>
        </div>
      </div>

      <section className={styles.content}>
        <div className={styles.container}>
          {iframeUrl ? (
            <CalendarSlot iframeUrl={iframeUrl} className={styles.calendar} />
          ) : (
            <div className={styles.fallback}>
              <div className={styles.fallbackIcon}>📅</div>
              <h2 className={styles.fallbackTitle}>
                {t('bookingPage.unavailableTitle')}
              </h2>
              <p className={styles.fallbackText}>
                {t('bookingPage.unavailableTextBefore')} <strong>{loc.name}</strong>{t('bookingPage.unavailableTextAfter')}
              </p>
              <div className={styles.fallbackContacts}>
                <CtaButton href="tel:+48322109866" variant="secondary">
                  📞 32 210 98 66
                </CtaButton>
                <CtaButton href="tel:+48326200293" variant="secondary">
                  📞 32 620 02 93
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
