import { Link } from 'react-router-dom'
import type { Specialization } from '@/types'
import LearnMoreLink from '@components/common/LearnMoreLink/LearnMoreLink'
import styles from './SpecializationCard.module.scss'

interface Props {
  specialization: Specialization
}

function SpecializationCard({ specialization }: Props) {
  return (
    <Link to={`/specjalizacje/${specialization.slug}`} className={styles.card}>
      <h2 className={styles.title}>{specialization.name}</h2>
      <p className={styles.desc}>{specialization.description.slice(0, 100)}…</p>
      <LearnMoreLink to={`/specjalizacje/${specialization.slug}`} className={styles.action} />
    </Link>
  )
}

export default SpecializationCard
