import { useRef } from 'react'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { useLanguage } from '@/hooks/useLanguage'
import styles from './MapPopover.module.scss'

interface MapPopoverProps {
  address: string
  open: boolean
  onClose: () => void
}

export function MapPopover({ address, open, onClose }: MapPopoverProps) {
  const { t } = useLanguage()
  const sheetRef = useRef<HTMLDivElement>(null)
  useFocusTrap(sheetRef, open, onClose)

  const encodedAddress = encodeURIComponent(address)

  return (
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.open : styles.closed}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={sheetRef}
        className={`${styles.sheet} ${open ? styles.open : styles.closed}`}
        role="dialog"
        aria-modal="true"
        aria-label={address}
      >
        <div className={styles.header}>
          <span className={styles.addressText}>{address}</span>
          <button
            onClick={onClose}
            className={styles.closeBtn}
            aria-label={t('common.closeMap')}
          >
            ✕
          </button>
        </div>

        <div className={styles.mapContainer}>
          {open && (
            <iframe
              className={styles.iframe}
              title="Lokalizacja"
              src={`https://maps.google.com/maps?q=${encodedAddress}&output=embed&hl=pl`}
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>
      </div>
    </>
  )
}
