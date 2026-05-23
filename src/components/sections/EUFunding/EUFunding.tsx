import { useLanguage } from '@/hooks/useLanguage'
import euLogo from '@/assets/logo/EU-founds.webp'
import daneUrl from '@/assets/docs/forms/Dane uczestnika.docx?url'
import formularzUrl from '@/assets/docs/forms/FORMULARZ POTRZEB PACJENTA.docx?url'
import oswiadczenieUrl from '@/assets/docs/forms/OŚWIADCZENIE UCZESTNIKA PROJEKTU.docx?url'
import oswiadczenieZaswUrl from '@/assets/docs/forms/oświadczenie zaświadczenie do 4 tygodni.docx?url'
import rodoUrl from '@/assets/docs/forms/rodo rehabilitacja (1).docx?url'
import styles from './EUFunding.module.scss'

const forms = [
  { label: 'Dane uczestnika',                          href: daneUrl,              filename: 'Dane uczestnika.docx' },
  { label: 'Formularz potrzeb pacjenta',               href: formularzUrl,         filename: 'FORMULARZ POTRZEB PACJENTA.docx' },
  { label: 'Oświadczenie uczestnika projektu',         href: oswiadczenieUrl,      filename: 'OŚWIADCZENIE UCZESTNIKA PROJEKTU.docx' },
  { label: 'Oświadczenie / zaświadczenie (do 4 tyg.)', href: oswiadczenieZaswUrl,  filename: 'oświadczenie zaświadczenie do 4 tygodni.docx' },
  { label: 'RODO – rehabilitacja',                     href: rodoUrl,              filename: 'rodo rehabilitacja (1).docx' },
]

function EUFunding() {
  const { t } = useLanguage()

  const items = [
    t('euFunding.item1'),
    t('euFunding.item2'),
    t('euFunding.item3'),
    t('euFunding.item4'),
    t('euFunding.item5'),
  ]

  const specificGoals = [
    t('euFunding.specificGoal1'),
    t('euFunding.specificGoal2'),
    t('euFunding.specificGoal3'),
    t('euFunding.specificGoal4'),
  ]

  return (
    <section className={styles.euFunding} id="eu-funding">
      <div className={styles.container}>
        <div className={styles.logoWrap}>
          <img src={euLogo} alt="Dofinansowano z Funduszy Europejskich" className={styles.euLogo} />
        </div>

        <div className={styles.header}>
          <span className={styles.label}>{t('euFunding.label')}</span>
          <p className={styles.projectId}>
            Projekt: <strong>{t('euFunding.projectId')}</strong>
          </p>
          <h2 className={styles.projectName}>{t('euFunding.projectName')}</h2>
        </div>

        <div className={styles.body}>
          <p className={styles.paragraph}>{t('euFunding.intro')}</p>
          <p className={styles.paragraph}>{t('euFunding.goal')}</p>
          <p className={styles.paragraph}>{t('euFunding.mainGoal')}</p>

          <div className={styles.listBlock}>
            <p className={styles.listTitle}>{t('euFunding.specificGoalsTitle')}</p>
            <ul className={styles.list}>
              {specificGoals.map((goal, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.listBlock}>
            <p className={styles.listTitle}>{t('euFunding.listTitle')}</p>
            <ul className={styles.list}>
              {items.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className={styles.paragraph}>{t('euFunding.qualificationInfo')}</p>
          <p className={styles.paragraph}>{t('euFunding.educationInfo')}</p>

          <div className={styles.downloadsBlock}>
            <p className={styles.listTitle}>{t('euFunding.downloadsTitle')}</p>
            <ul className={styles.downloadsList}>
              {forms.map(({ label, href, filename }) => (
                <li key={filename} className={styles.downloadsItem}>
                  <svg className={styles.docIcon} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <a href={href} download={filename} className={styles.downloadLink}>
                    {label}
                    <svg className={styles.downloadIcon} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.accessibilityBlock}>
            <p className={styles.listTitle}>{t('euFunding.accessibilityTitle')}</p>
            <p className={styles.paragraph}>
              <a href={`mailto:${t('euFunding.accessibilityEmail')}`} className={styles.accessibilityLink}>
                {t('euFunding.accessibilityEmail')}
              </a>
            </p>
            <p className={styles.paragraph}>{t('euFunding.accessibilityCoord1')}</p>
            <p className={styles.paragraph}>{t('euFunding.accessibilityCoord2')}</p>
          </div>

          <div className={styles.financingBlock}>
            <p className={styles.listTitle}>{t('euFunding.financingTitle')}</p>
            <ul className={styles.financingList}>
              <li className={styles.financingItem}>
                <span className={styles.financingLabel}>{t('euFunding.financingTotal')}</span>
                <strong className={styles.financingValue}>{t('euFunding.financingTotalValue')}</strong>
              </li>
              <li className={styles.financingItem}>
                <span className={styles.financingLabel}>{t('euFunding.financingEU')}</span>
                <strong className={styles.financingValue}>{t('euFunding.financingEUValue')}</strong>
              </li>
              <li className={styles.financingItem}>
                <span className={styles.financingLabel}>{t('euFunding.financingBP')}</span>
                <strong className={styles.financingValue}>{t('euFunding.financingBPValue')}</strong>
              </li>
            </ul>
          </div>

          <p className={styles.footer}>{t('euFunding.footer')}</p>
        </div>
      </div>
    </section>
  )
}

export default EUFunding
