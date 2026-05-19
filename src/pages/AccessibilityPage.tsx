import PageLayout from '@components/layout/PageLayout/PageLayout'
import { useLanguage } from '@/hooks/useLanguage'
import styles from './AccessibilityPage.module.scss'

const ADMIN_NAME = 'Vitalis Nowak i Żurakowski Sp. z o.o.'
const ADMIN_ADDRESS = 'ul. Kopernika 25, 32-540 Trzebinia'
const SITE_URL = 'klinika-vitalis.pl'
const CONTACT_EMAIL = 'jnvitalis@wp.pl'
const CONTACT_PHONE = '32 210 98 66'
const PROJECT_ID = 'FEMP.06.08-IP.02-0454/24'
const PROJECT_NAME = '„Profilaktyka i rehabilitacja mieszkańców powiatu chrzanowskiego…"'

function AccessibilityPage() {
  const { t } = useLanguage()

  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.label}>{t('accessibility.label')}</span>
          <h1 className={styles.title}>{t('accessibility.title')}</h1>
          <p className={styles.meta}>{t('accessibility.meta')} {t('accessibility.statementDate')}</p>
        </div>
      </div>

      <article className={styles.article}>
        <div className={styles.container}>

          <section className={styles.section}>
            <h2>{t('accessibility.s1Title')}</h2>
            <p>
              <strong>{ADMIN_NAME}</strong> {t('accessibility.s1p1')}
            </p>
            <p>
              {t('accessibility.s1p2_before')} <strong>{SITE_URL}</strong>.
            </p>
            <ul>
              <li>{t('accessibility.s1li1_before')} {t('accessibility.sitePublished')}</li>
              <li>{t('accessibility.s1li2_before')} {t('accessibility.statementDate')}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t('accessibility.s2Title')}</h2>
            <p>
              {t('accessibility.s2p1_pre')} <strong>{t('accessibility.s2p1_strong')}</strong> {t('accessibility.s2p1_post')}
            </p>
            <p>{t('accessibility.s2p2')}</p>
          </section>

          <section className={styles.section}>
            <h2>{t('accessibility.s3Title')}</h2>
            <p>{t('accessibility.s3intro')}</p>
            <ul>
              <li>
                <strong>{t('accessibility.s3li1_title')}</strong> {t('accessibility.s3li1_text')}
              </li>
              <li>
                <strong>{t('accessibility.s3li2_title')}</strong> {t('accessibility.s3li2_text')}
              </li>
              <li>
                <strong>{t('accessibility.s3li3_title')}</strong> {t('accessibility.s3li3_text')}
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t('accessibility.s4Title')}</h2>
            <ul>
              <li>{t('accessibility.s4li1_before')} {t('accessibility.statementDate')}</li>
              <li>{t('accessibility.s4li2')}</li>
              <li>{t('accessibility.s4li3')}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t('accessibility.s5Title')}</h2>
            <p>{t('accessibility.s5p1')}</p>
            <ul>
              <li>
                {t('accessibility.s5li_email')}{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                {t('accessibility.s5li_phone')} <a href={`tel:+48${CONTACT_PHONE.replace(/\s/g, '')}`}>{CONTACT_PHONE}</a>
              </li>
              <li>
                {t('accessibility.s5li_address')} {ADMIN_NAME}, {ADMIN_ADDRESS}
              </li>
            </ul>
            <p>{t('accessibility.s5p2')}</p>
          </section>

          <section className={styles.section}>
            <h2>{t('accessibility.s6Title')}</h2>
            <p>{t('accessibility.s6p1')}</p>
            <p>{t('accessibility.s6p2')}</p>
            <ul>
              <li>{t('accessibility.s6li1')}</li>
              <li>{t('accessibility.s6li2')}</li>
              <li>{t('accessibility.s6li3')}</li>
              <li>{t('accessibility.s6li4')}</li>
            </ul>
            <p>
              {t('accessibility.s6p3_pre')} <strong>{t('accessibility.s6p3_days')}</strong> {t('accessibility.s6p3_post')}
            </p>
            <p>{t('accessibility.s6p4')}</p>
            <p>
              {t('accessibility.s6p5_pre')} <strong>{t('accessibility.s6p5_minister')}</strong>{t('accessibility.s6p5_mid')}{' '}
              <a
                href="https://www.rpo.gov.pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('accessibility.s6p5_rpo')}
              </a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>{t('accessibility.s7Title')}</h2>
            <p>
              {t('accessibility.s7p1_pre')} <strong>{ADMIN_NAME}</strong> {t('accessibility.s7p1_post')} <strong>{ADMIN_ADDRESS}</strong>.
            </p>
            <ul>
              <li>{t('accessibility.s7li1')}</li>
              <li>{t('accessibility.s7li2')}</li>
              <li>{t('accessibility.s7li3')}</li>
              <li>{t('accessibility.s7li4')}</li>
            </ul>
            <p>
              {t('accessibility.s7p2_pre')} <a href={`tel:+48${CONTACT_PHONE.replace(/\s/g, '')}`}>{CONTACT_PHONE}</a>{' '}
              {t('accessibility.s7p2_post')}
            </p>
          </section>

          <section className={styles.section}>
            <h2>{t('accessibility.s8Title')}</h2>
            <p>
              {t('accessibility.s8p1_pre')} <strong>{PROJECT_ID}</strong>{' '}
              {t('accessibility.s8p1_name')} <em>{PROJECT_NAME}</em>{' '}
              {t('accessibility.s8p1_post')}
            </p>
          </section>

        </div>
      </article>
    </PageLayout>
  )
}

export default AccessibilityPage
