import { useState, useEffect, useRef } from 'react'
import styles from './Header.module.scss'
import NavigationMenu from './NavigationMenu'
import Logo from '@components/common/Logo/Logo'
import { LanguageSwitcher } from '@components/common/LanguageSwitcher/LanguageSwitcher'
import CtaButton from '@components/common/CtaButton/CtaButton'
import { useLanguage } from '@/hooks/useLanguage'
import { MAPS_LINK } from '@/data/mapsConfig'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  useEffect(() => {
    if (isMenuOpen) {
      wasOpen.current = true
      const firstFocusable = menuRef.current?.querySelector<HTMLElement>(
        'a[href], button:not([disabled])'
      )
      firstFocusable?.focus()
    } else if (wasOpen.current) {
      hamburgerRef.current?.focus()
    }
  }, [isMenuOpen])

  return (
    <>
      <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.container}>
          {/* LEFT: Hamburger + Address */}
          <div className={styles.leftSection}>
            <button
              ref={hamburgerRef}
              className={styles.hamburger}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t('common.close') : t('common.menu')}
              aria-expanded={isMenuOpen}
              aria-controls="navigation-menu"
            >
              <span className={`${styles.hamburgerLine} ${styles.line1} ${isMenuOpen ? styles.line1Open : ''}`} />
              <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.line2Open : ''}`} />
              <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.line3Open : ''}`} />
            </button>

            {!isMenuOpen && (
              <div className={styles.desktopAddress}>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.addressLink}
                >
                  {t('nav.addressValue')}
                </a>
              </div>
            )}
          </div>

          {/* CENTER: Logo */}
          <div className={styles.logoCenter}>
            <Logo size="md" />
          </div>

          {/* RIGHT: Languages + Phone + CTA */}
          <div className={styles.rightSection}>
            <LanguageSwitcher />

            <div className={styles.phoneWrapper}>
              <span className={styles.pulseDot} aria-hidden="true" />
              <a href="tel:+48322109866" className={styles.phone}>
                32 210 98 66
              </a>
            </div>

            <div className={styles.desktopCTA}>
              <CtaButton
                to="/specjalizacje"
                variant="outline"
                size="md"
                className={isMenuOpen ? undefined : styles.ctaOutlineWhite}
              >
                {t('header.bookAppointment')}
              </CtaButton>
            </div>
          </div>
        </div>
      </header>

      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} menuRef={menuRef} />
    </>
  )
}

export default Header
