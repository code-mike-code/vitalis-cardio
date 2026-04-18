import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import styles from './PartnerLuxmedPage.module.scss'
import logoLuxmed from '@/assets/logo/logo-luxmed.png'

const LUXMED_META = [
  { slug: 'kardiologia', itemCount: 5 },
  { slug: 'gastroenterologia', itemCount: 3 },
  { slug: 'psychiatria', itemCount: 1 },
  { slug: 'ortopedia', itemCount: 2 },
  { slug: 'rehabilitacja', itemCount: 5 },
  { slug: 'neurologia', itemCount: 1 },
  { slug: 'endokrynologia', itemCount: 1 },
  { slug: 'diagnostyka-usg', itemCount: 5 },
  { slug: 'urologia', itemCount: 1 },
  { slug: 'psychologia', itemCount: 1 },
]

function PartnerLuxmedPage() {
  const { t } = useLanguage()

  const luxmedServices = LUXMED_META.map(({ slug, itemCount }, i) => ({
    slug,
    title: t(`partnerLuxmed.svc${i + 1}.title`),
    items: Array.from({ length: itemCount }, (_, j) =>
      t(`partnerLuxmed.svc${i + 1}.item${j + 1}`)
    ),
  }))

  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <img src={logoLuxmed} alt="LuxMed" className={styles.heroLogo} />
          <h1 className={styles.title}>{t('partnerLuxmed.heroTitle')}</h1>
          <p className={styles.subtitle}>{t('partnerLuxmed.heroSubtitle')}</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.infoBox}>
            <strong>{t('partnerLuxmed.infoBoxTitle')}</strong>
            <p>{t('partnerLuxmed.infoBoxContent')}</p>
          </div>

          <div className={styles.grid}>
            {luxmedServices.map(svc => (
              <div key={svc.slug} className={styles.card}>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <ul className={styles.itemList}>
                  {svc.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link
                  to={`/specjalizacje/${svc.slug}`}
                  className={styles.cardLink}
                >
                  {t('partnerLuxmed.learnMore')}
                </Link>
              </div>
            ))}
          </div>

          <p className={styles.disclaimer}>{t('partnerLuxmed.disclaimer')}</p>
        </div>
      </section>
    </PageLayout>
  )
}

export default PartnerLuxmedPage
