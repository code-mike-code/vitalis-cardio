import { team } from '@/data'
import { useLanguage } from '@/hooks/useLanguage'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import CtaButton from '@components/common/CtaButton/CtaButton'
import styles from './Team.module.scss'
import { waveSpans } from '@/utils/waveSpans'

function AvatarPlaceholder({ index }: { index: number }) {
  // Alternuje między dwoma wariantami tła
  const variant = index % 2 === 0 ? styles.avatarBgA : styles.avatarBgB
  return (
    <div className={`${styles.avatarPlaceholder} ${variant}`} aria-hidden="true">
      <svg viewBox="0 0 80 80" fill="none" className={styles.avatarSvg}>
        <circle cx="40" cy="28" r="14" fill="rgba(255,255,255,0.55)" />
        <path
          d="M14 72 C14 52, 24 44, 40 44 C56 44, 66 52, 66 72"
          fill="rgba(255,255,255,0.35)"
        />
      </svg>
    </div>
  )
}

function Team() {
  const { t } = useLanguage()
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>(0.2)

  return (
    <section className={styles.team} id="team">
      <div className={styles.container}>

        {/* ── Nagłówek (styl cennika — wyrównany do lewej) ────────── */}
        <div className={styles.headerWrap} ref={headingRef}>
          <span className={styles.label}>{t('team.label')}</span>
          <h2 className={styles.heading} aria-label={t('team.heading')}>
            {headingVisible && waveSpans(t('team.heading'), 0, styles.waveChar, styles.waveWrap)}
          </h2>
          <p className={styles.subheading}>{t('team.subheading')}</p>
        </div>

        {/* ── Lista specjalistów — editorial numbered list ─────────── */}
        <ol className={styles.list}>
          {team.map((member, index) => (
            <li key={member.id} className={styles.item}>
              {/* Numer w tle */}
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Zdjęcie */}
              <div className={styles.photoWrap}>
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className={styles.photo}
                    loading="lazy"
                  />
                ) : (
                  <AvatarPlaceholder index={index} />
                )}
                <span className={styles.badge}>{t(`team.member${member.id}.specialization`)}</span>
              </div>

              {/* Treść */}
              <div className={styles.content}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.role}>{t(`team.member${member.id}.role`)}</span>
                <p className={styles.bio}>{t(`team.member${member.id}.bio`)}</p>
              </div>

              {/* Linia — widoczna dzięki ::after w SCSS */}
            </li>
          ))}
        </ol>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <div className={styles.ctaWrap}>
          <CtaButton to="/specjalizacje" variant="outline" size="md">
            {t('team.ctaAll')}
          </CtaButton>
        </div>

      </div>
    </section>
  )
}

export default Team
