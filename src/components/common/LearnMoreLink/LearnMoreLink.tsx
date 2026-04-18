import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import styles from './LearnMoreLink.module.scss'

interface Props {
  to: string
  children?: ReactNode
  className?: string
}

function LearnMoreLink({ to, children, className = '' }: Props) {
  const { t } = useLanguage()
  return (
    <Link to={to} className={[styles.link, className].filter(Boolean).join(' ')}>
      {children ?? t('common.learnMore')}
      <span className={styles.arrow}>→</span>
    </Link>
  )
}

export default LearnMoreLink
