import styles from './CalendarSlot.module.scss'

interface CalendarSlotProps {
  iframeUrl: string
  className?: string
}

export function CalendarSlot({ iframeUrl, className = '' }: CalendarSlotProps) {
  return (
    <div className={`${styles.slot} ${className}`}>
      <iframe
        src={iframeUrl}
        className={styles.iframe}
        title="Rejestracja online"
        frameBorder="0"
        scrolling="yes"
        allowFullScreen
      />
    </div>
  )
}
