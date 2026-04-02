import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import NavigationMenu from './NavigationMenu'
import Logo from '@components/common/Logo/Logo'
import { LanguageSwitcher } from '@components/common/LanguageSwitcher/LanguageSwitcher'
import { useLanguage } from '@/hooks/useLanguage'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          {/* LEWA STRONA: Hamburger + Adres */}
          <div className={styles.leftSection}>
            <button
              className={styles.hamburger}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t('common.close') : 'Menu'}
            >
              <span className={`${styles.hamburgerLine} ${styles.line1} ${isMenuOpen ? styles.line1Open : ''}`} />
              <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.line2Open : ''}`} />
              <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.line3Open : ''}`} />
            </button>

            {!isMenuOpen && (
              <div className={styles.desktopAddress}>
                <p>{t('nav.addressValue')}</p>
              </div>
            )}
          </div>

          {/* ŚRODEK: Logo */}
          <div className={styles.logoCenter}>
            <Logo size="md" />
          </div>

          {/* PRAWA STRONA: Języki + Tel + CTA */}
          <div className={styles.rightSection}>
            <LanguageSwitcher />

            <div className={styles.phoneWrapper}>
              <span className={styles.pulseDot} />
              <a href="tel:+48123456789" className={styles.phone}>
                +48 123 456 789
              </a>
            </div>

            <div className={styles.desktopCTA}>
              <Link to="/specjalizacje" className={styles.ctaTextOnly}>
                {t('header.bookAppointment')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Header
