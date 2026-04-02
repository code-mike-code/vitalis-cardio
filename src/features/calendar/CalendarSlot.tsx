import { useLanguage } from '@/hooks/useLanguage'
import styles from './CalendarSlot.module.scss'

/**
 * CalendarSlot — placeholder for the medycynaPraktyczna booking widget.
 *
 * Integration steps:
 *  1. Obtain the embed snippet from medycynaPraktyczna panel
 *     (Settings → Widget → Copy embed code).
 *  2. Replace the <div id="mp-widget-container"> block below with the
 *     provided <script> + container snippet.
 *  3. If the portal provides a React SDK, import it here instead.
 *
 * The `serviceId` prop allows mounting different widgets per specialty
 * (e.g. GP, cardiology) on the same page.
 */
interface CalendarSlotProps {
  /** medycynaPraktyczna service / doctor ID — passed to the widget src URL */
  serviceId?: string
  className?: string
}

export function CalendarSlot({ serviceId, className = '' }: CalendarSlotProps) {
  const { t } = useLanguage()

  // TODO: replace this placeholder with the actual medycynaPraktyczna widget
  // Example iframe embed (adjust src with real token from the portal):
  // const src = `https://www.mp.pl/pacjent/widget/rejestracja?id=${serviceId}`

  return (
    <div className={`${styles.slot} ${className}`}>
      <p className={styles.label}>{t('calendar.subtitle')}</p>

      {/* ── medycynaPraktyczna widget mount point ───────────────────
          Replace the placeholder below with the actual embed code.
          The portal widget will inject itself into #mp-widget-container.
      ──────────────────────────────────────────────────────────── */}
      <div id="mp-widget-container" className={styles.widgetContainer}>
        <span className={styles.placeholder}>
          {t('calendar.loading')}
          {serviceId && <code> [{serviceId}]</code>}
        </span>
      </div>
    </div>
  )
}
