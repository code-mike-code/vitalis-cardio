import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './LearnMoreLink.module.scss'

interface Props {
  to: string
  children?: ReactNode
  className?: string
}

function LearnMoreLink({ to, children = 'Dowiedz się więcej', className = '' }: Props) {
  return (
    <Link to={to} className={[styles.link, className].filter(Boolean).join(' ')}>
      {children}
      <span className={styles.arrow}>→</span>
    </Link>
  )
}

export default LearnMoreLink
