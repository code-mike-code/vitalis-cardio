import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './CtaButton.module.scss'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface Props {
  children: ReactNode
  to?: string
  href?: string
  target?: '_blank' | '_self'
  onClick?: () => void
  variant?: Variant
  size?: Size
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
}

function CtaButton({
  children,
  to,
  href,
  target,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  disabled = false,
}: Props) {
  const cls = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(' ')

  const content = (
    <>
      {children}
      <span className={styles.arrow}>→</span>
    </>
  )

  if (to) {
    return <Link to={to} className={cls}>{content}</Link>
  }

  if (href) {
    return <a href={href} className={cls} target={target} rel="noopener noreferrer">{content}</a>
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}

export default CtaButton
