import { useParams, Navigate, Link } from 'react-router-dom'
import { specializations } from '@/data'
import { calendarConfig } from '@/data/calendarConfig'
import { CalendarSlot } from '@/features/calendar'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import CtaButton from '@components/common/CtaButton/CtaButton'
import styles from './BookingPage.module.scss'

function BookingPage() {
  const { slug } = useParams<{ slug: string }>()
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
            Umów wizytę
          </p>
          <h1 className={styles.heroTitle}>Umów wizytę — {specialization.name}</h1>
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
                Rezerwacja online dla tej specjalizacji jest niedostępna
              </h2>
              <p className={styles.fallbackText}>
                Aby umówić wizytę w poradni <strong>{specialization.name}</strong>,
                skontaktuj się z rejestracją telefonicznie lub osobiście.
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
                Rejestracja czynna: Pon–Pt 7:00–20:00, Sob 8:00–14:00
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  )
}

export default BookingPage
