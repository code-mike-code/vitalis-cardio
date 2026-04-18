import type { Specialist } from '@/types'
import LearnMoreLink from '@components/common/LearnMoreLink/LearnMoreLink'
import CtaButton from '@components/common/CtaButton/CtaButton'
import { useLanguage } from '@/hooks/useLanguage'
import styles from './SpecialistCard.module.scss'

interface Props {
  specialist: Specialist
  /** "Learn more" link — pass when the card acts as a shortcut (e.g. About section) */
  learnMoreTo?: string
  /** "Book an appointment" link — pass when the card is on a specialization subpage */
  bookingTo?: string
  /** sm = 80px photo (About section), md = 120px photo (specialization subpage) */
  size?: 'sm' | 'md'
}

function SpecialistCard({ specialist, learnMoreTo, bookingTo, size = 'md' }: Props) {
  const { t, language } = useLanguage()
  const langKey = language as 'en' | 'ua'
  const loc = { ...specialist, ...(specialist.translations?.[langKey] ?? {}) }
  return (
    <div id={specialist.slug} className={[styles.card, styles[size]].join(' ')}>
      <div className={styles.photo}>
        {specialist.photo ? (
          <img src={specialist.photo} alt={`${specialist.titlePrefix} ${specialist.name}`} />
        ) : (
          <div className={styles.photoPlaceholder}>
            <svg viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="22" r="10" fill="rgba(255,255,255,0.5)" />
              <path d="M12 52 C12 40, 20 34, 30 34 C40 34, 48 40, 48 52" fill="rgba(255,255,255,0.3)" />
            </svg>
          </div>
        )}
      </div>

      <div className={styles.info}>
        <span className={styles.titlePrefix}>{specialist.titlePrefix}</span>
        <h3 className={styles.name}>{specialist.name}</h3>
        <span className={styles.role}>{loc.role}</span>
        {size === 'md' && <p className={styles.bio}>{loc.bio}</p>}

        {learnMoreTo && (
          <LearnMoreLink to={learnMoreTo} className={styles.action} />
        )}
        {bookingTo && (
          <CtaButton to={bookingTo} variant="outline" size="sm" className={styles.action}>
            {t('common.bookAppointment')}
          </CtaButton>
        )}
      </div>
    </div>
  )
}

export default SpecialistCard
