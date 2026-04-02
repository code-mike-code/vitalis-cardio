import { useLanguage } from '@/hooks/useLanguage'
import euLogo from '@/assets/logo/EU-founds.jpg'
import styles from './EUFunding.module.scss'

function EUFunding() {
  const { t } = useLanguage()

  const items = [
    t('euFunding.item1'),
    t('euFunding.item2'),
    t('euFunding.item3'),
    t('euFunding.item4'),
    t('euFunding.item5'),
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

          <p className={styles.footer}>{t('euFunding.footer')}</p>
        </div>
      </div>
    </section>
  )
}

export default EUFunding
