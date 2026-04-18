import { Link } from 'react-router-dom'
import type { Specialization } from '@/types'
import LearnMoreLink from '@components/common/LearnMoreLink/LearnMoreLink'
import { useLanguage } from '@/hooks/useLanguage'
import styles from './SpecializationCard.module.scss'

interface Props {
  specialization: Specialization
}

function SpecializationCard({ specialization }: Props) {
  const { language } = useLanguage()
  const langKey = language as 'en' | 'ua'
  const loc = { ...specialization, ...(specialization.translations?.[langKey] ?? {}) }
  return (
    <Link to={`/specjalizacje/${specialization.slug}`} className={styles.card}>
      <h2 className={styles.title}>{loc.name}</h2>
      <p className={styles.desc}>{loc.description.slice(0, 100)}…</p>
      <LearnMoreLink to={`/specjalizacje/${specialization.slug}`} className={styles.action} />
    </Link>
  )
}

export default SpecializationCard
