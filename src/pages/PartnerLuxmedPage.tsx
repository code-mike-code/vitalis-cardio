import { Link } from 'react-router-dom'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import styles from './PartnerLuxmedPage.module.scss'
import logoLuxmed from '@/assets/logo/logo-luxmed.png'

const LUXMED_SERVICES = [
  {
    title: 'Kardiologia',
    items: ['Konsultacja kardiologiczna', 'Badanie EKG', 'Echokardiografia (UKG)', 'Holter EKG', 'Próba wysiłkowa'],
    slug: 'kardiologia',
  },
  {
    title: 'Gastroenterologia',
    items: ['Konsultacja gastroenterologiczna', 'Gastroskopia', 'Kolonoskopia'],
    slug: 'gastroenterologia',
  },
  {
    title: 'Psychiatria',
    items: ['Konsultacja psychiatryczna'],
    slug: 'psychiatria',
  },
  {
    title: 'Ortopedia',
    items: ['Konsultacja ortopedyczna', 'Diagnostyka USG stawów'],
    slug: 'ortopedia',
  },
  {
    title: 'Rehabilitacja',
    items: ['Fizjoterapia', 'Kinezyterapia', 'Fizykoterapia', 'Masaż leczniczy', 'Kinesiotaping'],
    slug: 'rehabilitacja',
  },
  {
    title: 'Neurologia',
    items: ['Konsultacja neurologiczna'],
    slug: 'neurologia',
  },
  {
    title: 'Endokrynologia',
    items: ['Konsultacja endokrynologiczna'],
    slug: 'endokrynologia',
  },
  {
    title: 'Diagnostyka USG',
    items: ['USG jamy brzusznej', 'USG tarczycy', 'USG piersi', 'USG układu moczowego', 'Doppler naczyń'],
    slug: 'diagnostyka-usg',
  },
  {
    title: 'Urologia',
    items: ['Konsultacja urologiczna'],
    slug: 'urologia',
  },
  {
    title: 'Psychologia',
    items: ['Konsultacja psychologiczna'],
    slug: 'psychologia',
  },
]

function PartnerLuxmedPage() {
  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <img src={logoLuxmed} alt="LuxMed" className={styles.heroLogo} />
          <h1 className={styles.title}>Usługi Vitalis w ramach abonamentu LuxMed</h1>
          <p className={styles.subtitle}>
            Posiadacze abonamentu medycznego LuxMed mogą korzystać z szerokiego zakresu
            usług Poradni Vitalis bez dodatkowych opłat. Poniżej znajdziesz listę
            świadczeń objętych abonamentem.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.infoBox}>
            <strong>Jak skorzystać z usług w ramach LuxMed?</strong>
            <p>
              Umów wizytę poprzez aplikację lub infolinię LuxMed, wybierając Poradnię Vitalis
              jako miejsce realizacji usługi. Możesz też zadzwonić do naszej rejestracji —
              poinformuj nas, że posiadasz abonament LuxMed.
            </p>
          </div>

          <div className={styles.grid}>
            {LUXMED_SERVICES.map(svc => (
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
                  Dowiedz się więcej →
                </Link>
              </div>
            ))}
          </div>

          <p className={styles.disclaimer}>
            Zakres usług dostępnych w ramach abonamentu LuxMed może ulec zmianie.
            Aktualna lista świadczeń dostępna jest w aplikacji LuxMed lub pod numerem infolinii.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}

export default PartnerLuxmedPage
