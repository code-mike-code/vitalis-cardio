import PageLayout from '@components/layout/PageLayout/PageLayout'
import styles from './RodoPage.module.scss'
import klauzulaPacjenci from '@/assets/docs/Klauzula-informacyjna-pacjenci.pdf'
import klauzulaMonitoring from '@/assets/docs/Klauzula-informacyjna-monitoring-wizyjny.pdf'
import klauzulaKandydaci from '@/assets/docs/Klauzula-informacyjna-kandydaci-do-pracy.pdf'

interface DocCard {
  title: string
  description: string
  url: string
}

const DOCS: DocCard[] = [
  {
    title: 'Klauzula informacyjna dla Pacjentów',
    description: 'Informacje o przetwarzaniu danych osobowych pacjentów oraz osób upoważnionych do przetwarzania ich danych w związku z udzielaniem świadczeń zdrowotnych.',
    url: klauzulaPacjenci,
  },
  {
    title: 'Klauzula informacyjna — Monitoring wizyjny',
    description: 'Informacje o przetwarzaniu danych osobowych rejestrowanych przez system monitoringu wizyjnego na terenie Poradni Vitalis.',
    url: klauzulaMonitoring,
  },
  {
    title: 'Klauzula informacyjna dla Kandydatów do pracy',
    description: 'Informacje o przetwarzaniu danych osobowych kandydatów ubiegających się o zatrudnienie w Vitalis Nowak i Żurakowski Sp. z o.o.',
    url: klauzulaKandydaci,
  },
]

function RodoPage() {
  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.label}>Ochrona danych osobowych</span>
          <h1 className={styles.title}>RODO</h1>
          <p className={styles.subtitle}>
            Zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
            27 kwietnia 2016 r. (RODO) informujemy o zasadach przetwarzania danych osobowych
            w Vitalis Nowak i Żurakowski Sp. z o.o.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.adminBox}>
            <h2 className={styles.adminTitle}>Administrator danych osobowych</h2>
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
            {DOCS.map(doc => (
              <div key={doc.title} className={styles.card}>
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
                  Otwórz dokument
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className={styles.rights}>
            <h2>Twoje prawa w zakresie ochrony danych</h2>
            <ul>
              <li><strong>Prawo dostępu</strong> — możesz uzyskać informację o przetwarzanych danych (art. 15 RODO)</li>
              <li><strong>Prawo do sprostowania</strong> — możesz żądać poprawienia nieprawidłowych danych (art. 16 RODO)</li>
              <li><strong>Prawo do usunięcia</strong> — możesz żądać usunięcia danych w określonych przypadkach (art. 17 RODO)</li>
              <li><strong>Prawo do ograniczenia przetwarzania</strong> — możesz ograniczyć zakres przetwarzania (art. 18 RODO)</li>
              <li><strong>Prawo do przenoszenia danych</strong> — możesz otrzymać dane w formacie nadającym się do odczytu (art. 20 RODO)</li>
              <li><strong>Prawo sprzeciwu</strong> — możesz sprzeciwić się przetwarzaniu w określonych przypadkach (art. 21 RODO)</li>
              <li><strong>Prawo do cofnięcia zgody</strong> — w każdej chwili, bez wpływu na legalność wcześniejszego przetwarzania</li>
            </ul>
            <p className={styles.uodo}>
              Jeżeli uważasz, że przetwarzanie Twoich danych osobowych narusza przepisy RODO,
              masz prawo złożyć skargę do organu nadzorczego —{' '}
              <strong>Prezesa Urzędu Ochrony Danych Osobowych</strong>
              {' '}(ul. Stawki 2, 00-193 Warszawa, <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer">uodo.gov.pl</a>).
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default RodoPage
