import logoImg from '@/assets/logo/logo-vitalis-no-bg.png'
import styles from './Logo.module.scss'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

function Logo({ size = 'md', className = '' }: LogoProps) {
  const classes = [styles.logo, styles[size], className].filter(Boolean).join(' ')

  return (
    <a href="/" className={classes}>
      <img src={logoImg} alt="Klinika Vitalis" className={styles.logoImg} />
    </a>
  )
}

export default Logo
