import { Link } from 'react-router-dom'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import styles from './PartnerNfzPage.module.scss'
import logoNfz from '@/assets/logo/logo-nfz.webp'

const NFZ_SERVICES = [
  {
    title: 'Psycholog',
    desc: 'Konsultacje psychologiczne, diagnoza, wsparcie w kryzysach emocjonalnych dla dorosłych i dzieci.',
    slug: 'psychologia',
  },
  {
    title: 'Gastroskopia',
    desc: 'Diagnostyczna gastroskopia górnego odcinka przewodu pokarmowego w ramach kontraktu z NFZ.',
    slug: 'gastroenterologia',
  },
  {
    title: 'Rehabilitacja',
    desc: 'Kompleksowa rehabilitacja lecznicza: kinezyterapia, fizykoterapia, masaż prozdrowotny.',
    slug: 'rehabilitacja',
  },
]

function PartnerNfzPage() {
  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <img src={logoNfz} alt="Narodowy Fundusz Zdrowia" className={styles.heroLogo} />
          <h1 className={styles.title}>Poradnia Vitalis w Narodowym Funduszu Zdrowia</h1>
          <p className={styles.subtitle}>
            Część świadczeń w Poradni Vitalis realizowana jest w ramach kontraktu
            z Narodowym Funduszem Zdrowia — bez dodatkowych opłat dla pacjentów
            posiadających skierowanie i aktywne ubezpieczenie zdrowotne.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.infoBox}>
            <strong>Jak umówić wizytę w ramach NFZ?</strong>
            <p>
              Zadzwoń do naszej rejestracji lub skorzystaj z rejestracji online.
              Poinformuj nas, że chcesz skorzystać ze świadczenia w ramach NFZ
              — przygotuj skierowanie od lekarza pierwszego kontaktu (tam gdzie jest wymagane)
              oraz dokument potwierdzający ubezpieczenie.
            </p>
          </div>

          <div className={styles.grid}>
            {NFZ_SERVICES.map(svc => (
              <div key={svc.slug} className={styles.card}>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardDesc}>{svc.desc}</p>
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
            Dostępność świadczeń finansowanych przez NFZ może ulec zmianie.
            W razie pytań prosimy o kontakt telefoniczny z rejestracją.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}

export default PartnerNfzPage
