import { useLanguage } from '@/hooks/useLanguage'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import styles from './RodoPage.module.scss'
import klauzulaPacjenci from '@/assets/docs/Klauzula-informacyjna-pacjenci.pdf'
import klauzulaMonitoring from '@/assets/docs/Klauzula-informacyjna-monitoring-wizyjny.pdf'
import klauzulaKandydaci from '@/assets/docs/Klauzula-informacyjna-kandydaci-do-pracy.pdf'

const DOC_URLS = [klauzulaPacjenci, klauzulaMonitoring, klauzulaKandydaci]

const RIGHTS_COUNT = 7

function RodoPage() {
  const { t } = useLanguage()

  const docs = DOC_URLS.map((url, i) => ({
    url,
    title: t(`rodo.doc${i + 1}Title`),
    description: t(`rodo.doc${i + 1}Desc`),
  }))

  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.label}>{t('rodo.heroLabel')}</span>
          <h1 className={styles.title}>{t('rodo.heroTitle')}</h1>
          <p className={styles.subtitle}>{t('rodo.heroSubtitle')}</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.adminBox}>
            <h2 className={styles.adminTitle}>{t('rodo.adminTitle')}</h2>
            <p>
              <strong>Vitalis Nowak i Żurakowski Sp. z o.o.</strong><br />
              ul. Kopernika 25, 32-540 Trzebinia<br />
              tel. 32 210 98 66
            </p>
            <p className={styles.iod}>
              <strong>Inspektor Ochrony Danych:</strong> Joanna Grabowska
              {' — '}<a href="mailto:grabowskaodo@gmail.com">grabowskaodo@gmail.com</a>
            </p>
          </div>

          <div className={styles.grid}>
            {docs.map(doc => (
              <div key={doc.url} className={styles.card}>
                <div className={styles.cardIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>{doc.title}</h3>
                <p className={styles.cardDesc}>{doc.description}</p>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardBtn}
                >
                  {t('rodo.openDoc')}
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className={styles.rights}>
            <h2>{t('rodo.rightsTitle')}</h2>
            <ul>
              {Array.from({ length: RIGHTS_COUNT }, (_, i) => (
                <li key={i}>
                  <strong>{t(`rodo.right${i + 1}Label`)}</strong>
                  {' — '}{t(`rodo.right${i + 1}Text`)}
                </li>
              ))}
            </ul>
            <p className={styles.uodo}>
              {t('rodo.uodo')}
              {' '}
              <strong>{t('rodo.uodoName')}</strong>
              {' '}(ul. Stawki 2, 00-193 Warszawa, <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer">uodo.gov.pl</a>).
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default RodoPage
