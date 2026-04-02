import type { Specialist } from '@/types'
import LearnMoreLink from '@components/common/LearnMoreLink/LearnMoreLink'
import CtaButton from '@components/common/CtaButton/CtaButton'
import styles from './SpecialistCard.module.scss'

interface Props {
  specialist: Specialist
  /** Link "Dowiedz się więcej" — przekazać gdy karta jest skrótem (np. sekcja O Nas) */
  learnMoreTo?: string
  /** Link "Umów wizytę" — przekazać gdy karta jest na podstronie specjalizacji */
  bookingTo?: string
  /** sm = 80px zdjęcie (O Nas), md = 120px zdjęcie (podstrona specjalizacji) */
  size?: 'sm' | 'md'
}

function SpecialistCard({ specialist, learnMoreTo, bookingTo, size = 'md' }: Props) {
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
        <span className={styles.role}>{specialist.role}</span>
        {size === 'md' && <p className={styles.bio}>{specialist.bio}</p>}

        {learnMoreTo && (
          <LearnMoreLink to={learnMoreTo} className={styles.action} />
        )}
        {bookingTo && (
          <CtaButton to={bookingTo} variant="outline" size="sm" className={styles.action}>
            Umów wizytę
          </CtaButton>
        )}
      </div>
    </div>
  )
}

export default SpecialistCard
