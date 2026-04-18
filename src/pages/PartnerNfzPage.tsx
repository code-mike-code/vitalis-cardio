import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import styles from './PartnerNfzPage.module.scss'
import logoNfz from '@/assets/logo/logo-nfz.webp'

const NFZ_SLUGS = ['psychologia', 'gastroenterologia', 'rehabilitacja'] as const

function PartnerNfzPage() {
  const { t } = useLanguage()

  const nfzServices = NFZ_SLUGS.map((slug, i) => ({
    slug,
    title: t(`partnerNfz.svc${i + 1}.title`),
    desc: t(`partnerNfz.svc${i + 1}.desc`),
  }))

  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <img src={logoNfz} alt="Narodowy Fundusz Zdrowia" className={styles.heroLogo} />
          <h1 className={styles.title}>{t('partnerNfz.heroTitle')}</h1>
          <p className={styles.subtitle}>{t('partnerNfz.heroSubtitle')}</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.infoBox}>
            <strong>{t('partnerNfz.infoBoxTitle')}</strong>
            <p>{t('partnerNfz.infoBoxContent')}</p>
          </div>

          <div className={styles.grid}>
            {nfzServices.map(svc => (
              <div key={svc.slug} className={styles.card}>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardDesc}>{svc.desc}</p>
                <Link
                  to={`/specjalizacje/${svc.slug}`}
                  className={styles.cardLink}
                >
                  {t('partnerNfz.learnMore')}
                </Link>
              </div>
            ))}
          </div>

          <p className={styles.disclaimer}>{t('partnerNfz.disclaimer')}</p>
        </div>
      </section>
    </PageLayout>
  )
}

export default PartnerNfzPage
