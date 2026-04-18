import { services } from '@/data'
import { useLanguage } from '@/hooks/useLanguage'
import SectionHeader from '@components/common/SectionHeader/SectionHeader'
import styles from './Services.module.scss'

const serviceIcons: Record<string, JSX.Element> = {
  cardiology: (
    <svg viewBox="0 0 40 40" fill="none"><path d="M20 34 C10 26, 3 20, 3 13 C3 7, 8 3, 13 3 C16 3, 19 5, 20 8 C21 5, 24 3, 27 3 C32 3, 37 7, 37 13 C37 20, 30 26, 20 34Z" fill="currentColor"/><polyline points="8,18 14,18 16,13 18,23 20,16 22,18 26,18" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  orthopedics: (
    <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="8" r="4" fill="currentColor"/><path d="M14 14 L26 14 L24 24 L22 32 L18 32 L16 24Z" fill="currentColor" opacity="0.8"/><line x1="12" y1="18" x2="28" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
  ),
  neurology: (
    <svg viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="16" rx="12" ry="10" fill="currentColor" opacity="0.3"/><path d="M12 18 Q12 10, 20 8 Q28 10, 28 18" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M15 16 Q15 12, 20 11 Q25 12, 25 16" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="20" cy="30" r="1.5" fill="currentColor"/><line x1="20" y1="22" x2="20" y2="28" stroke="currentColor" strokeWidth="2"/></svg>
  ),
  rehabilitation: (
    <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="8" r="4" fill="currentColor"/><line x1="20" y1="12" x2="20" y2="26" stroke="currentColor" strokeWidth="2.5"/><line x1="14" y1="17" x2="26" y2="17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M16 26 L14 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M24 26 L26 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><polyline points="10,20 14,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><polyline points="30,20 26,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  internal: (
    <svg viewBox="0 0 40 40" fill="none"><rect x="10" y="6" width="20" height="28" rx="3" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5"/><line x1="16" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5"/><line x1="16" y1="19" x2="24" y2="19" stroke="currentColor" strokeWidth="1.5"/><line x1="16" y1="24" x2="22" y2="24" stroke="currentColor" strokeWidth="1.5"/><path d="M18 6 L18 3 L22 3 L22 6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3"/></svg>
  ),
  physiotherapy: (
    <svg viewBox="0 0 40 40" fill="none"><circle cx="24" cy="8" r="4" fill="currentColor"/><path d="M18 14 L30 14 L30 20 L24 28 L24 36" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 14 L18 22 L14 28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><circle cx="11" cy="20" r="3" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5"/></svg>
  ),
}

function Services() {
  const { t } = useLanguage()

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <SectionHeader
          title={t('services.sectionTitle')}
          subtitle={t('services.sectionSubtitle')}
        />
        <div className={styles.grid}>
          {services.map(service => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                {serviceIcons[service.icon]}
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{t(`services.${service.icon}.title`)}</h3>
                <p className={styles.description}>{t(`services.${service.icon}.desc`)}</p>
                <a href="#contact" className={styles.link}>
                  {t('services.learnMore')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
