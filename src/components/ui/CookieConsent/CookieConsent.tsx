import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { applyConsent, getStoredConsent } from '@/utils/analytics'
import styles from './CookieConsent.module.scss'

function CookieConsent() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)
  const firstBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const stored = getStoredConsent()
    if (stored === null) {
      setVisible(true)
    } else {
      applyConsent(stored === 'accepted')
    }
  }, [])

  useEffect(() => {
    if (visible) {
      firstBtnRef.current?.focus()
    }
  }, [visible])

  function handle(accepted: boolean) {
    applyConsent(accepted)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.bar} role="dialog" aria-modal="true" aria-label={t('cookies.ariaLabel')}>
      <p className={styles.message}>
        {t('cookies.message')}{' '}
        <Link to="/prywatnosc" className={styles.link}>
          {t('cookies.learnMore')}
        </Link>
      </p>
      <div className={styles.actions}>
        <button ref={firstBtnRef} className={styles.decline} onClick={() => handle(false)}>
          {t('cookies.decline')}
        </button>
        <button className={styles.accept} onClick={() => handle(true)}>
          {t('cookies.accept')}
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
