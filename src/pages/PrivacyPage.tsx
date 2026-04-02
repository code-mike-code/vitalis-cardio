import PageLayout from '@components/layout/PageLayout/PageLayout'
import styles from './PrivacyPage.module.scss'

const LAST_UPDATED = '1 kwietnia 2026 r.'
const ADMIN_NAME = 'Vitalis Nowak i Żurakowski Sp. z o.o.'
const ADMIN_ADDRESS = 'ul. Kopernika 25, 32-540 Trzebinia'
const ADMIN_PHONE = '32 210 98 66'
const IOD_EMAIL = 'grabowskaodo@gmail.com'
const IOD_NAME = 'Joanna Grabowska'

function PrivacyPage() {
  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.label}>Dokument prawny</span>
          <h1 className={styles.title}>Polityka Prywatności i Cookies</h1>
          <p className={styles.meta}>Ostatnia aktualizacja: {LAST_UPDATED}</p>
        </div>
      </div>

      <article className={styles.article}>
        <div className={styles.container}>

          <section className={styles.section}>
            <h2>1. Administrator danych osobowych</h2>
            <p>
              Administratorem danych osobowych zbieranych za pośrednictwem serwisu
              internetowego dostępnego pod adresem <strong>klinika-vitalis.pl</strong> jest:
            </p>
            <p>
              <strong>{ADMIN_NAME}</strong><br />
              {ADMIN_ADDRESS}<br />
              tel. {ADMIN_PHONE}
            </p>
            <p>
              Inspektor Ochrony Danych: <strong>{IOD_NAME}</strong>
              {' — '}<a href={`mailto:${IOD_EMAIL}`}>{IOD_EMAIL}</a>
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Jakie dane zbieramy i w jakim celu</h2>
            <h3>2.1. Dane zbierane automatycznie</h3>
            <p>
              Podczas korzystania z serwisu automatycznie zbierane są dane techniczne,
              w szczególności: adres IP, typ i wersja przeglądarki, system operacyjny,
              strony odsyłające, czas wizyty, przeglądane podstrony. Dane te są przetwarzane
              wyłącznie w celach statystycznych i diagnostycznych na podstawie prawnie
              uzasadnionego interesu administratora (art. 6 ust. 1 lit. f RODO).
            </p>
            <h3>2.2. Formularz kontaktowy i rejestracja wizyt</h3>
            <p>
              Dane podane w formularzach kontaktowych oraz formularzach rejestracji wizyt
              (imię, nazwisko, numer telefonu, adres e-mail, informacje o stanie zdrowia
              niezbędne do umówienia wizyty) są przetwarzane w celu realizacji usługi
              na podstawie art. 6 ust. 1 lit. b RODO (wykonanie umowy / podjęcie działań
              przed zawarciem umowy) oraz art. 9 ust. 2 lit. h RODO w zakresie danych
              zdrowotnych.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Pliki cookies</h2>
            <p>
              Serwis wykorzystuje pliki cookies (ciasteczka) — małe pliki tekstowe
              zapisywane na urządzeniu użytkownika. Możesz kontrolować obsługę cookies
              w ustawieniach swojej przeglądarki.
            </p>

            <div className={styles.cookieTable}>
              <div className={styles.cookieRow}>
                <div className={styles.cookieType}>
                  <strong>Niezbędne</strong>
                </div>
                <div className={styles.cookieDesc}>
                  Wymagane do prawidłowego działania serwisu (np. zapamiętanie preferencji
                  językowych, stan formularzy). Nie mogą być wyłączone.
                  Podstawa prawna: art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes).
                </div>
              </div>
              <div className={styles.cookieRow}>
                <div className={styles.cookieType}>
                  <strong>Analityczne</strong>
                </div>
                <div className={styles.cookieDesc}>
                  Umożliwiają analizę ruchu i sposobu korzystania z serwisu za pomocą
                  Google Analytics 4. Dane są anonimizowane — adres IP jest skracany
                  przed zapisaniem. Włączane wyłącznie po wyrażeniu zgody przez użytkownika.
                  Podstawa prawna: art. 6 ust. 1 lit. a RODO (zgoda).
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>4. Google Analytics</h2>
            <p>
              Serwis korzysta z usługi Google Analytics 4 świadczonej przez Google LLC
              (1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA). Usługa ta
              pozwala analizować zachowanie użytkowników w serwisie w celach
              statystycznych i marketingowych.
            </p>
            <p>
              Google Analytics 4 jest konfigurowany z włączoną anonimizacją adresów IP.
              Dane przekazywane do Google mogą być przetwarzane na serwerach poza
              Europejskim Obszarem Gospodarczym. Google LLC stosuje standardowe klauzule
              umowne zatwierdzone przez Komisję Europejską jako mechanizm zapewnienia
              odpowiedniego poziomu ochrony danych.
            </p>
            <p>
              Zbieranie danych przez Google Analytics możesz wyłączyć instalując
              dodatek do przeglądarki:{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Udostępnianie danych</h2>
            <p>
              Dane osobowe mogą być przekazywane podmiotom trzecim wyłącznie:
            </p>
            <ul>
              <li>podmiotom uprawnionym do ich otrzymywania na podstawie przepisów prawa,</li>
              <li>podmiotom przetwarzającym dane w imieniu administratora na podstawie umów powierzenia (dostawcy usług IT, hostingu, analizy danych),</li>
              <li>Google LLC w zakresie usługi Google Analytics (wyłącznie po wyrażeniu zgody).</li>
            </ul>
            <p>
              Dane nie są sprzedawane ani przekazywane podmiotom trzecim w celach marketingowych
              bez wyraźnej zgody użytkownika.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Okres przechowywania danych</h2>
            <ul>
              <li>Dane z formularzy kontaktowych — przez czas niezbędny do obsługi zapytania, nie dłużej niż 3 lata.</li>
              <li>Dane dotyczące dokumentacji medycznej — zgodnie z ustawą z dnia 6 listopada 2008 r. o prawach pacjenta (co do zasady 20 lat).</li>
              <li>Dane analityczne Google Analytics — do 26 miesięcy od ostatniego zdarzenia.</li>
              <li>Dane z cookies niezbędnych — do zakończenia sesji lub usunięcia przez użytkownika.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Twoje prawa</h2>
            <p>
              Na podstawie RODO przysługują Ci następujące prawa:
            </p>
            <ul>
              <li><strong>Dostępu do danych</strong> (art. 15) — prawo uzyskania kopii przetwarzanych danych,</li>
              <li><strong>Sprostowania</strong> (art. 16) — prawo żądania poprawienia nieprawidłowych danych,</li>
              <li><strong>Usunięcia</strong> (art. 17) — prawo żądania usunięcia w określonych przypadkach,</li>
              <li><strong>Ograniczenia przetwarzania</strong> (art. 18),</li>
              <li><strong>Przenoszenia danych</strong> (art. 20),</li>
              <li><strong>Sprzeciwu</strong> (art. 21) — w przypadku przetwarzania na podstawie prawnie uzasadnionego interesu,</li>
              <li><strong>Cofnięcia zgody</strong> — w każdej chwili, bez wpływu na legalność przetwarzania przed cofnięciem.</li>
            </ul>
            <p>
              Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem{' '}
              <a href={`mailto:${IOD_EMAIL}`}>{IOD_EMAIL}</a> lub pisemnie na adres siedziby.
            </p>
            <p>
              Masz również prawo złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych
              (ul. Stawki 2, 00-193 Warszawa).
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Zarządzanie cookies w przeglądarce</h2>
            <p>
              Większość przeglądarek domyślnie akceptuje pliki cookies. Możesz zmienić
              te ustawienia w opcjach swojej przeglądarki:
            </p>
            <ul>
              <li>Google Chrome: Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie</li>
              <li>Mozilla Firefox: Opcje → Prywatność i bezpieczeństwo → Ciasteczka</li>
              <li>Safari: Preferencje → Prywatność</li>
              <li>Microsoft Edge: Ustawienia → Prywatność, wyszukiwanie i usługi</li>
            </ul>
            <p>
              Wyłączenie cookies niezbędnych może uniemożliwić prawidłowe działanie
              niektórych funkcji serwisu.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Zmiany polityki prywatności</h2>
            <p>
              Administrator zastrzega sobie prawo do zmian niniejszej Polityki Prywatności.
              O wszelkich istotnych zmianach poinformujemy poprzez aktualizację daty
              „Ostatnia aktualizacja" na początku dokumentu. Korzystanie z serwisu po
              wprowadzeniu zmian oznacza ich akceptację.
            </p>
          </section>

        </div>
      </article>
    </PageLayout>
  )
}

export default PrivacyPage
