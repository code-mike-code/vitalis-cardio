import PageLayout from '@components/layout/PageLayout/PageLayout'
import styles from './AccessibilityPage.module.scss'

const ADMIN_NAME = 'Vitalis Nowak i Żurakowski Sp. z o.o.'
const ADMIN_ADDRESS = 'ul. Kopernika 25, 32-540 Trzebinia'
const SITE_URL = 'klinika-vitalis.pl'
const CONTACT_EMAIL = 'jnvitalis@wp.pl'
const CONTACT_PHONE = '32 210 98 66'
const STATEMENT_DATE = '18 maja 2026 r.'
const SITE_PUBLISHED = '2024 r.'

function AccessibilityPage() {
  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.label}>Dostępność cyfrowa</span>
          <h1 className={styles.title}>Deklaracja Dostępności</h1>
          <p className={styles.meta}>Sporządzona dnia: {STATEMENT_DATE}</p>
        </div>
      </div>

      <article className={styles.article}>
        <div className={styles.container}>

          <section className={styles.section}>
            <h2>1. Informacje ogólne</h2>
            <p>
              <strong>{ADMIN_NAME}</strong> zobowiązuje się zapewnić dostępność swojej strony
              internetowej zgodnie z przepisami ustawy z dnia 4 kwietnia 2019 r.
              o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów
              publicznych (Dz.U. 2019 poz. 848 z późn. zm.).
            </p>
            <p>
              Niniejsza deklaracja dostępności dotyczy strony internetowej dostępnej pod
              adresem: <strong>{SITE_URL}</strong>.
            </p>
            <ul>
              <li>Data publikacji strony internetowej: {SITE_PUBLISHED}</li>
              <li>Data ostatniej istotnej aktualizacji: {STATEMENT_DATE}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. Status zgodności z ustawą</h2>
            <p>
              Strona internetowa jest <strong>częściowo zgodna</strong> z ustawą z dnia
              4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji
              mobilnych podmiotów publicznych z powodu niezgodności wymienionych poniżej.
            </p>
            <p>
              Dokładamy wszelkich starań, aby serwis spełniał wymagania standardu WCAG 2.1
              na poziomie AA. Strona jest zoptymalizowana pod kątem: nawigacji klawiaturą,
              współpracy z czytnikami ekranu, odpowiednich kontrastów kolorystycznych
              oraz responsywności na różnych urządzeniach.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Treści niedostępne</h2>
            <p>Poniższe treści lub funkcjonalności mogą nie spełniać w pełni wymagań dostępności cyfrowej:</p>
            <ul>
              <li>
                <strong>Dokumenty PDF</strong> — klauzule informacyjne dostępne do pobrania
                (Klauzula informacyjna dla pacjentów, dla kandydatów do pracy, dot.
                monitoringu wizyjnego) mogą nie posiadać pełnego oznaczenia struktury
                wymaganego przez WCAG 2.1, gdyż zostały opublikowane przed dniem
                wejścia w życie przepisów o dostępności cyfrowej.
              </li>
              <li>
                <strong>Mapa Google</strong> — osadzony widżet mapy Google Maps (iframe)
                pochodzi od zewnętrznego dostawcy i nie podlega pełnej kontroli
                podmiotu w zakresie dostępności. Alternatywą jest link tekstowy
                otwierający mapę w aplikacji Google Maps.
              </li>
              <li>
                <strong>Treści wideo i multimedia</strong> — serwis nie zawiera materiałów
                wideo wymagających audiodeskrypcji lub napisów.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Przygotowanie deklaracji dostępności</h2>
            <ul>
              <li>Deklarację sporządzono dnia: {STATEMENT_DATE}</li>
              <li>Deklarację sporządzono na podstawie samooceny przeprowadzonej przez podmiot.</li>
              <li>
                Podczas oceny korzystano z narzędzi: walidator HTML W3C, narzędzia
                Chrome DevTools Accessibility Panel, czytnik ekranu NVDA (Windows),
                VoiceOver (macOS/iOS).
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Informacje zwrotne i dane kontaktowe</h2>
            <p>
              W przypadku problemów z dostępnością strony internetowej prosimy o kontakt
              z naszym biurem. Kontaktować można się:
            </p>
            <ul>
              <li>
                e-mail:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                telefonicznie: <a href={`tel:+48${CONTACT_PHONE.replace(/\s/g, '')}`}>{CONTACT_PHONE}</a>
              </li>
              <li>
                pisemnie na adres: {ADMIN_NAME}, {ADMIN_ADDRESS}
              </li>
            </ul>
            <p>
              Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej
              oraz składać żądania zapewnienia dostępności.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Procedura wnioskowo-skargowa</h2>
            <p>
              Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej
              strony internetowej lub jakiegoś jej elementu. Można także zażądać
              udostępnienia informacji za pomocą alternatywnego sposobu dostępu —
              na przykład przez odczytanie niedostępnego cyfrowo dokumentu lub opisanie
              zawartości materiału.
            </p>
            <p>
              Żądanie powinno zawierać:
            </p>
            <ul>
              <li>dane osoby zgłaszającej żądanie,</li>
              <li>wskazanie, o którą stronę lub element chodzi,</li>
              <li>sposób kontaktu,</li>
              <li>preferowany sposób przedstawienia niedostępnej informacji (jeśli dotyczy).</li>
            </ul>
            <p>
              Podmiot publiczny powinien zrealizować żądanie niezwłocznie, nie później niż
              w ciągu <strong>7 dni</strong> od dnia wystąpienia z żądaniem. Jeżeli
              dotrzymanie tego terminu nie jest możliwe, podmiot niezwłocznie informuje
              o tym wnoszącego żądanie — termin realizacji nie może być jednak dłuższy
              niż 2 miesiące od dnia złożenia żądania.
            </p>
            <p>
              Jeżeli zapewnienie dostępności cyfrowej nie jest możliwe, podmiot może
              zaproponować alternatywny sposób dostępu do informacji.
            </p>
            <p>
              W przypadku odmowy realizacji żądania wnoszący żądanie może złożyć skargę
              do organu nadzorującego — <strong>Ministra właściwego do spraw informatyzacji</strong>.
              Po wyczerpaniu tej procedury można również złożyć wniosek do{' '}
              <a
                href="https://www.rpo.gov.pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rzecznika Praw Obywatelskich
              </a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Dostępność architektoniczna</h2>
            <p>
              Siedziba {ADMIN_NAME} mieści się pod adresem: <strong>{ADMIN_ADDRESS}</strong>.
            </p>
            <ul>
              <li>Wejście do budynku jest dostępne dla osób poruszających się na wózkach inwalidzkich.</li>
              <li>W budynku dostępna jest winda lub pochylnia umożliwiająca dostęp do poszczególnych kondygnacji.</li>
              <li>Przy obiekcie dostępne są miejsca parkingowe wyznaczone dla osób z niepełnosprawnościami.</li>
              <li>Brak barier architektonicznych uniemożliwiających wejście osobom z niepełnosprawnością ruchową.</li>
            </ul>
            <p>
              W przypadku pytań dotyczących dostępności architektonicznej prosimy o
              kontakt telefoniczny pod numer <a href={`tel:+48${CONTACT_PHONE.replace(/\s/g, '')}`}>{CONTACT_PHONE}</a>{' '}
              przed planowaną wizytą.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Projekt współfinansowany ze środków UE</h2>
            <p>
              Podmiot realizuje projekt nr <strong>FEMP.06.08-IP.02-0454/24</strong>{' '}
              pn. <em>„Profilaktyka i rehabilitacja mieszkańców powiatu chrzanowskiego…"</em>{' '}
              finansowany ze środków Unii Europejskiej. W związku z powyższym serwis
              objęty jest obowiązkiem zapewnienia dostępności cyfrowej zgodnie z ustawą
              z dnia 4 kwietnia 2019 r.
            </p>
          </section>

        </div>
      </article>
    </PageLayout>
  )
}

export default AccessibilityPage
